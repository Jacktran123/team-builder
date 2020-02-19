import React, {useState} from 'react'; 
import  "./form.css";
import {Button} from 'reactstrap';

const Form = props  => {
    const [list, setList]= useState({
        Name:'',
        id: Date.now,
        Email: '',
        Role: ''
    }
   
);

    const handleChange= event =>{
        setList({...list, [event.target.name]:event.target.value });
    };
    
    const submitThing= event => {
        event.preventDefault();
        props.addNewMember(list);
        // setList({
        //     Name:'',
        //     id: Date.now,
        //     Email: '',
        //     Role: ''
        // }
    }
  
    return(
      <div className='form'>
       <form onSubmit={submitThing}>
       <h2> Add a new member </h2>
       <label htmlFor='name'> Name : </label> 
       <input type='text' id='name' name='Name' placeholder="member's name" onChange={handleChange} /> 
       <label htmlFor='email'> Email : </label> 
       <input type='text' id='email'name='Email' placeholder='example@gmail.com' onChange={handleChange} /> 
       <label htmlFor='role'> Role : </label> 
       <input type='textarea' id='role' name='Role' placeholder='what does he/she do ' onChange={handleChange} /> 
       <Button color='primary' type='submit'> Submit</Button>
      </form>
      </div>
    );
};

export default Form;