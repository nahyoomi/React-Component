import { useState } from 'react';
import './App.css';
import Data from './Data';
import Lista from './Lista';

function App() {
 const [users,setUsers]= useState(Data)
  
  return (
    <div className="App">
      <div className='main_container'>
        <h1> {users.length} Birthdays today</h1>
        <Lista users = {users} />
        <button className='btn' onClick={()=>setUsers([])}>Clear All</button>
      </div>
      
    </div>
  );
}

export default App;
