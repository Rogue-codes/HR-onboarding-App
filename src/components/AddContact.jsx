import {React, Fragment, useState} from 'react'
import styled from 'styled-components'
import EditRow from './EditRow'
import ReadOnlyRow from './ReadOnlyRow'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 2%;
    table{
        width: 100%;
        border-collapse: collapse;
        th{
            height: 8vh;
            font-family: 'Barlow', sans-serif;
        }
        td{
            height: 10vh;
            padding-left: 1%;
            text-align: center;
            font-family: 'Barlow', sans-serif;
        }
        tr{
            border-bottom: 1px solid #ddd;
            &:nth-child(even) {
                background-color: #D6EEEE;
            }
            .but{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4%;
            }
        }
        
    }
`
const Btn = styled.button`
    margin-left: 88%;
    margin-top: 5%;
    margin-bottom: 5%;
    padding: 1% 3%;
    border: none;
    border-radius: 5px;
    background: red;
    color: white;
    cursor: pointer;
`
function AddContact({candidate,setCandidate,searchValue}) {
    const [editContactID, setEditContactId] = useState(null)
    const [editFormData, setEditFormData] = useState({
        name:'',
        email:'',
        phone: '',
        jobRole:'',
        progress:'',
        status:''
    })

    const handleChange = (e) => {
        e.preventDefault()
    
        const fieldName = e.target.getAttribute('name')
        const feildValue = e.target.value
    
        const newFormData = {...editFormData}
        newFormData[fieldName] = feildValue
    
        setEditFormData(newFormData)
      }

    const handleEditClick = (e,candidate) => {
        e.preventDefault()
        setEditContactId(candidate.id)

        const formValues = {
            name:candidate.name,
            email:candidate.email,
            phone: candidate.phone,
            jobRole:candidate.jobRole,
            progress:candidate.progress,
            status:candidate.status
        }
        setEditFormData(formValues)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()

        const newCandidate = {
            id: editContactID,
            name: editFormData.name,
            email: editFormData.email,
            phone: editFormData.phone,
            jobRole: editFormData.jobRole,
            progress: editFormData.progress,
            status: editFormData.status
        }

        const newCandidates = [...candidate]

        const index = candidate.findIndex((c) => c.id === editContactID)

        newCandidates[index] = newCandidate

        setCandidate(newCandidates)
        setEditContactId(null)
    }

    const cancelEdit = () => {
        setEditContactId(null)
    }

    const deleteCandidate = (editContactID) => {
        const newCandidate = [...candidate]
    
        const index = candidate.findIndex((cand)=> cand.id === editContactID)
    
        newCandidate.splice(index,1)
    
        setCandidate(newCandidate)
    }

    const deleteAll = () => {
        const newCandidate = [...candidate]
        newCandidate.splice(0,newCandidate.length)
        setCandidate(newCandidate)

        return toast.success("All Fields has been successfully deleted!")
    }
  return (
    <Container>
        <Btn onClick={deleteAll}>delete all</Btn>
        <ToastContainer/>
        <form action="" onSubmit={handleEditFormSubmit}>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>JOB ROLE</th>
                    <th>PROGRESS</th>  
                    <th>STATUS</th>
                    <th>OPERATIONS</th>
                </tr>
            </thead>
            <tbody>
                    {
                        candidate.filter( (val) => {
                            if(searchValue === ''){
                                return val
                            }else if(val.name.toLowerCase().includes(searchValue.toLowerCase())){
                                return val
                            } return null
                        }).map((i)=>(
                            <Fragment>
                                {editContactID === i.id ? (<EditRow handleChange={handleChange} cancelEdit={cancelEdit} editFormData={editFormData} />) :
                                (<ReadOnlyRow i={i} deleteCandidate={deleteCandidate} handleEditClick={handleEditClick}/>)}
                            </Fragment>                          
                        ))
                    }

            </tbody>
        </table>
        </form>
    </Container>
  )
}

export default AddContact