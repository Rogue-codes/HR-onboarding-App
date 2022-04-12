import styled from "styled-components";
import AddContact from "./components/AddContact";
import Nav from "./components/Nav";
import Data from './components/mock-data.json'
import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import 'react-toastify/dist/ReactToastify.css';

const Cont = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f0ffff;
`
const Formic = styled.form`
    width: 100%;
    height: auto;
    margin-bottom: 1%;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    padding: 2%;
    align-items: center;
    input{
        width: 30%;
        height: 8vh;
        display: block;
        margin-top: 2%;
        padding: 1%;
        border-radius: 5px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        &:focus{
            outline: none;
        }
    }
    select{
        width: 30%;
        height: 8vh;
        display: block;
        margin-top: 2%;
        padding: 1%;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: none;
        &:focus{
            outline: none;
        }
    }
`
const Btn = styled.button`
    width: 5%;
    height: 6vh;
    border-radius: 5px;
    border: none;
    background: #036181;
    color: white;
    margin-top: 2%;
    cursor: pointer;
`
const Search = styled.div`
    width: 100%;
    margin-top: 5%;
    height: 15vh;
    display: flex;
    align-items: center;
    padding-left: 2%;
    input{
        width: 50%;
        height: 8vh;
        display: block;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        padding: 1%;
        border-radius: 5px;
        border: none;
        &:focus{
            outline: none;
        }
    }
`


function App() {
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

    if(form.email === '' || form.jobRole ==='' || form.name==='' || form.phone === '' || form.progress ==="" || form.status === ''){
      // alert('please fill in all the fields')
      return
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
  }


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
      <Nav/>
      <Search>
        <input type="text" placeholder='search...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
      </Search>

      
      <Formic onSubmit={handleSubmit}>
        <input type="text" placeholder='First name' name="name" onChange={handleChange} />
        <input type="email" placeholder='Email' name="email"  onChange={handleChange} />
        <input type="number" placeholder='Phone' name="phone"  onChange={handleChange} />
        <select name="jobRole" onChange={handleChange}  id="">
            <option value="">--Job role--</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Devops Engineer">Devops Engineer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Accountant">Accountant</option>
        </select>

        <select name="progress" onChange={handleChange}  id="">
            <option value="">--Progress--</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Awaiting Interview">Awaiting Interview</option>
        </select>

        <select name="status" onChange={handleChange} id="">
            <option value="">--Status--</option>
            <option value="undecided">undecided</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
        </select>

        <Btn>Add</Btn>
    </Formic>
      <AddContact searchValue={searchValue} candidate={candidate} setCandidate={setCandidate} />
    </Cont>
  );
}

export default App;
