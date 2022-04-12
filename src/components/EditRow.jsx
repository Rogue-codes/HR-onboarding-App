import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'
import styled from 'styled-components'

const TR = styled.tr`
    input{
        height: 6vh;
        padding-left: 2%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        &:focus{
            outline: none;
        }
    }
    select{
        height: 6vh;
        padding-left: 2%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        &:focus{
            outline: none;
        }
    }
    button{
        border: none;
        margin-right: 2%;
        background: transparent;
        cursor: pointer; 
    }
`

function EditRow({handleChange,editFormData,cancelEdit}) {
  return (
    <TR>
        <td>
            <input type="text" name='name' placeholder='name...' onChange={handleChange} value={editFormData.name} required/>
        </td>
        <td>
            <input type="text" name='email' placeholder='email...' onChange={handleChange} value={editFormData.email} required />
        </td>
        <td>
            <input type="text" name='phone' placeholder='phone...' onChange={handleChange} value={editFormData.phone} required />
        </td>
        <td>
            <select name="jobRole" onChange={handleChange} value={editFormData.jobRole}  id="">
                <option value="">--Job role--</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Devops Engineer">Devops Engineer</option>
            </select>
        </td>
        <td>
            <select name="progress" onChange={handleChange} value={editFormData.progress}  id="">
                <option value="">--Progress--</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Awaiting Interview">Awaiting Interview</option>
            </select>
        </td>
        <td>
            <select name="status" onChange={handleChange} value={editFormData.status} id="">
                <option value="">--Status--</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
            </select>
        </td>

        <td>
            <button type='submit'><AiFillCheckCircle size='1.5rem' color='green'/></button>
            <TiDelete onClick={cancelEdit} size='1.3rem' cursor='pointer' color='red'/>
        </td>
    </TR>
  )
}

export default EditRow