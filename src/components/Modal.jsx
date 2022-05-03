import React from 'react'
import styled from "styled-components";
import {MdCancel} from 'react-icons/md'
import { ToastContainer } from 'react-toastify';

const Formic = styled.form`
    width: 100%;
    height: auto;
    margin-bottom: 1%;
    gap: 2%;
    padding: 2%;
    align-items: center;
    input{
        width: 80%;
        height: 8vh;
        display: block;
        padding: 1%;
        border-radius: 5px;
        border: none;
        margin: auto;
        margin-top: 2%;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        &:focus{
            outline: none;
        }
    }
    select{
        width: 80%;
        height: 8vh;
        display: block;
        padding: 1%;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: none;
        margin: auto;
        margin-top: 2%;
        &:focus{
            outline: none;
        }
    }
`
const Btn = styled.button`
    width: 25%;
    height: 6vh;
    border-radius: 5px;
    border: none;
    background: lightgreen;
    color: white;
    margin-top: 2%;
    cursor: pointer;
    margin-left: 10%;
`

const Mod = styled.div`
    width: 50%;
    height: auto;
    position: relative;
    background-color: #036181;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 30;
    gap: 10%;

    .bttn{
        position: absolute;
        left: 99%;
        top: -10%;
        cursor: pointer;
        color:white;
        transition: all .5s linear;
        &:hover{
            color:red;
        }
    }

`


function Modal({handleChange,handleSubmit, openModal, setOpenModal}) {
  return (
    <div className={openModal ? "shadow" : 'shadow none'}>
        <Mod>
            <MdCancel size='2.5rem' className='bttn'  onClick={() => setOpenModal(false)}/>
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
        </Mod>
        <ToastContainer/>
    </div>
  )
}

export default Modal