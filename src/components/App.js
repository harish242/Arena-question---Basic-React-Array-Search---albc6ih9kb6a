import React,{useState} from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
const [arr,setArray]=useState(searchArray)
const [data,setData]=useState([])
  const HandleClick=(e)=>{
    const value=e.target.value;
    const mass=arr.filter(a=>a.toLowerCase().includes(value.toLowerCase()))
    setData(mass)
    if(e.target.value==''){
      setData([])
    }
  }
  
  console.log(data)
  return (
    <div id="main">
      <input id='search-input'  onChange={HandleClick} type='text'/><br/>
      <label>Result</label>
      <ul>
      {data.map(a=>{
        return <li>{a}</li>
      })} 
      </ul>          
    </div>
  )
}


export default App;
