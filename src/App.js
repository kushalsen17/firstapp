
import './App.css';
import Header from './Header';
import Products from './Products';
import { useState } from 'react';

function App() {

 


  let countries=[
    {id:1,name:"India",capital:"New Delhi"},
    {id:2,name:"England",capital:"London"},
    {id:3,name:"Wales",capital:"Edinburgh"}
  ]


  return (
    <div className="App">  
   {
    countries.map((country,index)=>{
      return (
        <div className='data' key={country.id}>
          <h3>{country.name}</h3>
          <p>{country.capital}</p>
        </div>
      )
    })
   }

   <Products></Products>




    </div>
  );
}

export default App;
