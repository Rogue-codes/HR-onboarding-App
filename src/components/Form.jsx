import React from 'react'
import styled from 'styled-components'

const Formic = styled.form`
    width: 100%;
    height: auto;
    margin-bottom: 5%;
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
        border: 1px solid lightgrey;
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
        border: 1px solid lightgrey;
        &:focus{
            outline: none;
        }
    }
`
const Btn = styled.button`
    width: 10%;
    height: 8vh;
    margin-top: 2%;
`
function Form() {
  return (
    <Formic>
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone' />
        <select name="" id="">
            <option value="">--Job role--</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Devops Engineer">Devops Engineer</option>
        </select>

        <select name="" id="">
            <option value="">--Progress--</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Awaiting Interview">Awaiting Interview</option>
        </select>

        <select name="" id="">
            <option value="">--Status--</option>
            <option value="Interviewed">Accepted</option>
            <option value="Awaiting Interview">Rejected</option>
        </select>

        <Btn>Add</Btn>
    </Formic>
  )
}

export default Form