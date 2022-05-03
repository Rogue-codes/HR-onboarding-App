import styled from "styled-components";
import AddContact from "./components/AddContact";
import Nav from "./components/Nav";
import Data from './components/mock-data.json'
import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./components/Modal";
import {GoPlus} from 'react-icons/go'

const Cont = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`


const Search = styled.div`
    width: 50%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    input{
        width: 100%;
        height: 8vh;
        padding: 1%;
        border-radius: 5px;
        border: none;
        &:focus{
            outline: none;
        }
    }
`
const Loader = styled.div`
    width: 100%;
    height: 100vh;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`
const Btn = styled.button`
  width: 5%;
  background: #036181;
  height: 8vh;
  border: none;
  cursor: pointer;
`

const Header = styled.div`
  width: 100%;
  height: 15vh;
  padding: 2%;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  gap: 2%;
`

function App() {
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(!openModal)
    console.log('first')
  }

  const [candidate, setCandidate] = useState(Data)

  
  const [form, setForm] = useState({
    name:'',
    email:'',
    phone: '',
    jobRole:'',
    progress:'',
    status:''
  })

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const feildValue = e.target.value

    const newFormData = {...form}
    newFormData[fieldName] = feildValue

    setForm(newFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.email || !form.jobRole || !form.name || !form.phone || !form.progress || !form.status){
      return toast.error("All Fields must be filled in!")
    }

    const checkEmailExist = candidate.filter((candi) => 
      candi.email  === form.email ? candi : null
    )

    const checkPhoneExist = candidate.filter((candi) => 
    candi.phone  === form.phone ? candi : null
  )

    if(checkEmailExist.length > 0){
      return toast.error("This email already exists!!")
    }

    if(checkPhoneExist.length > 0){
      return toast.error("This Phone number already exists!!")
    }

   const newCandidate = {
    id: nanoid(),
    name: form.name,
    email: form.email,
    phone: form.phone,
    jobRole: form.jobRole,
    progress: form.progress,
    status: form.status
   }

   const newCandidates = [...candidate, newCandidate]

   setCandidate(newCandidates)

   console.log(form.name)

   const inputs = document.querySelectorAll('input');

   inputs.forEach(input => {
     input.value = '';
   })

   const selects = document.querySelectorAll('select');

   selects.forEach(select => {
     select.value = '';
   })

   setOpenModal(false)

   console.log(form.email, form.jobRole)
  }

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  },[])

  useEffect(()=>{
    const getCandidates = JSON.parse(localStorage.getItem('candidates'))

    if(getCandidates){
      setCandidate(getCandidates)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidate))
  },[candidate])
 
 

  return (
    <Cont className="App">
      
    {
      loading ? (<Loader>
        <img src="https://cdn.dribbble.com/users/220182/screenshots/2253511/josephjpearce_dribbble_exy-loader.gif" alt=''></img>
      </Loader>):
      (
        <fragment>
        <Nav/>

        <Header>
            <Search>
              <input type="text" placeholder='search by name...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            </Search>
            <Btn onClick={showModal}><GoPlus color="white" size='2.5rem'/></Btn>
        </Header>

        <Modal handleChange={handleChange} showModal={showModal} openModal={openModal} setOpenModal={setOpenModal} handleSubmit={handleSubmit}/>
      <ToastContainer/>
        <AddContact searchValue={searchValue} candidate={candidate} setCandidate={setCandidate} />)
        </fragment>)
    }
    </Cont>
  );
}

export default App;
