import React, { useState, useEffect  } from "react";
import FormElem from "./FormElem";
const EditUserForm = (props) => {
    const [userItem, setUserItem] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUserItem({ ...userItem, [name]: value })
    }
    useEffect(() => {
        setUserItem(props.currentUser)
    
    }, [props])

    const validation = !userItem.email || !userItem.password || !userItem.tel ||!userItem.user || !userItem.status

    return (
        <>
            <FormElem
                onSubmit={event=> {
                    event.preventDefault()
                    if(validation) return
                    props.updateUser(userItem.id, userItem)
                }}
                onChange={handleInputChange}
                email={userItem.email}
                password={userItem.password}
                tel={userItem.tel}
                user={userItem.user}
                editing={props.editing}
                onClick={()=> props.setEditing(false)}
                onClient={ userItem.status === 'Client'}
                onPartner={ userItem.status === 'Partner'}
                onAdmin={ userItem.status === 'Admin'}
            />
        </>
    )
}

export default EditUserForm;