import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { User } from '../types/Type';

type Props = {
    addUser: (data: User) => void,
    userList: User[]
}


const Form = (props: Props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")
    const { addUser, userList } = props

    const firstnameChange = (e: any) => {
        setFirstname(e.target.value)
    }
    const lastnameChange = (e: any) => {
        setLastname(e.target.value)
    }
    const emailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        if (firstname === "" && lastname === "" && email === "") {
            setMessage("required input")
        } else {

            const data: User = {
                id: userList.length + 1,
                firstname: firstname,
                lastname: lastname,
                email: email
            }
            addUser(data)
            setMessage("")
            setFirstname("")
            setLastname("")
            setEmail("")
            console.log(data)
        }
    }

    return (
        <div className='form-container mt-5'>
            {
                message !== "" && <div className="alert alert-danger" role="alert">
                    {message}
                </div>
            }
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Firstname</label>
                <input onChange={firstnameChange} value={firstname} type="text" className="form-control p-3" id="exampleFormControlInput1" placeholder="Firstname..." />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Lastname</label>
                <input onChange={lastnameChange} value={lastname} type="text" className="form-control p-3" id="exampleFormControlInput1" placeholder="Lastname..." />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onChange={emailChange} value={email} type="email" className="form-control p-3" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <button onClick={onSubmit} type="button" className="btn btn-primary px-5">SAVE</button>
            <Link to="/"><button type="button" className="btn btn-danger  px-5 mx-3">CANCEL</button></Link>
        </div>
    )
}

export default Form
