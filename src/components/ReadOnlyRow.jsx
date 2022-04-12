import React from 'react'
import {TiDelete} from 'react-icons/ti'
import {FaEdit} from 'react-icons/fa'
import styled from 'styled-components'

const Tr = styled.tr`
    .norms{
      color:green;
    }
    .red{
      color: red;
    }
`
function ReadOnlyRow({i,handleEditClick,deleteCandidate,red}) {
  return (
        <Tr>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
            <td>{i.jobRole}</td>
            <td>{i.progress}</td>
            <td>{i.status}</td>
            <td className='but'><TiDelete onClick={()=>deleteCandidate(i.id)} cursor='pointer' size='1.3rem' color='red'/> <FaEdit size='1.3rem' color='blue' cursor='pointer' onClick={(e)=>handleEditClick(e,i)}/></td> 
        </Tr>
  )
}

export default ReadOnlyRow