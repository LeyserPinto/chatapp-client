import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {


  const [user,setUser]=useState('')
  const Navigate=useNavigate()
  



  
  const HandleOnClick=()=>{

    Navigate('/chat',{state:{user:user}});
  }
  return (
    <div className='home-container'>

        {/* Home Header | cont: h1 - p */}
        <section className="home-header">
            <h1>Welcome</h1>
            <p>Sign in to Open Chat</p>
        </section>
        {/* Home user input | cont: input type text */}
        <section className="home-userInput">
            <input type="text" name="username" placeholder='Type your username...' onChange={(e)=>{setUser(e.target.value)}} />
        </section>
        {/* Home button | cont: input type text */}
        <section className="home-button-input">
            <button onClick={HandleOnClick}>SING IN</button>
        </section>

    </div>
  )
}

export default Home