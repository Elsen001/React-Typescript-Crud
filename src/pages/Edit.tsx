import React, { useEffect, useState } from 'react'
import { User } from '../types/Type'
import { Link } from 'react-router-dom'

type Props = {
    data: User,
    editUser: (data: User) => void

}

const Edit = (props: Props) => {
    const { data, editUser } = props
    const [firstname, setFirstname] = useState(data.firstname);
    const [lastname, setLastname] = useState(data.lastname);
    const [email, setEmail] = useState(data.email);


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
        const updateData: User = {
            id: data.id,
            firstname: firstname,
            lastname: lastname,
            email: email
        }
        editUser(updateData)
        setFirstname("")
        setLastname("")
        setEmail("")
        
    }


    useEffect(() => {
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
    }, [data]);


    return (
        <div className='form-container mt-5'>
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
            <button type="button" className="btn btn-danger  px-5 mx-3">CANCEL</button>
        </div>
    )
}

export default Edit
