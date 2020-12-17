import React, { useState } from "react";
import FormElem from "./FormElem";

const AddUserForm = (props) => {
    const initFormState = {id: null, email: '', password: '', tel: '', user: '', status: ''}
    const [userItem, setUserItem] = useState(initFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setUserItem({ ...userItem, [name]: value })
    }
    const [error, setError] = useState(false);
    const validation = !userItem.email || !userItem.password || !userItem.tel ||!userItem.user || !userItem.status

    return (
        <>
            <FormElem
                onSubmit={event=> {
                    event.preventDefault()
                 
                    if(validation) {
                        setError(true)
                        return
                    }
                    props.addUser(userItem)
                    console.log(userItem);
                    setUserItem(initFormState)
                    setError(false)
                }}
                onError={error}
                onChange={handleInputChange}
                email={userItem.email}
                password={userItem.password}
                tel={userItem.tel}
                user={userItem.user}

                onClient={ userItem.status === 'Client'}
                onPartner={ userItem.status === 'Partner'}
                onAdmin={ userItem.status === 'Admin'}
           
            />
        </>
    )
}

export default AddUserForm;