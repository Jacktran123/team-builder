import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';

function App() {
  const [member, setNewMember]= useState([
 { Name : 'Jack Tran',
  id: Date.now(),
  Email: 'Jack1799@gmail.com',
  Role: 'Front-end Dev'
}
]); 
 
const addNewMember= list=> {
  const newMember= {
    id: Date.now(),
    Name: list.Name,
    Email: list.Email,
    Role: list.Role
  };
  setNewMember([...member, newMember]);
};

  return (
    <div className='list'>  
      <h1> List of all members </h1>
      {member.map(obj=>(
      <div className='member' key={member.id}>
        <p> Name : {obj.Name} </p>
        <p> Email : {obj.Email} </p>
        <p> Role : {obj.Role} </p>

       </div>  ))}
    
     <Form  addNewMember={addNewMember}/>
     </div>
  );
}

export default App;
