import React, {useState} from "react";
import './AddUsers.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


function AddUsers (props){
    const [enteredName, setEnteredName]= useState("")
    const [enteredAge, setEnteredAge]= useState('')
    const [error, setError]= useState()

    
    const addUSerHandler= (e)=>{
        e.preventDefault()
        
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return 
         }
    
         if(+enteredAge <1 ){
            setError({
                title: 'Invalid Age',
                message: 'Please entere a valid age (>0).'
            })
             return
         }
         console.log(enteredAge, enteredName)
         props.onAddUser(enteredName, enteredAge)
         setEnteredName('')
         setEnteredAge('')
    }

    const nameChagneHandler = (event)=>{
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value)
    }

    const errorHandler = ()=>{
        setError(null)
    }

    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
                <Card>
                    <form onSubmit={addUSerHandler}>
                        <label htmlFor="username">Username</label>
                        <input type="textarea" id="username" onChange={nameChagneHandler} value={enteredName}></input>
                        <label htmlFor="age">Age (Years)</label>
                        <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}></input>
                        <Button type="submit">Add Users</Button>
                    </form>
                </Card>
        </div>
    )
}

export default AddUsers