import React from 'react'
import {FaChevronDown,FaRegBell} from 'react-icons/fa'
import {BiExit} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'



type TypeProps={
    user:string
}




const ChatHeader = ({user}:TypeProps) => {


    const navigate=useNavigate()
  const HandleExit=()=>{
      localStorage.removeItem(user)
      navigate('/')
  }



  return (
    <div className="chat-user">
        <ul>
            <li>{user}</li>
            <li onClick={HandleExit}><BiExit /></li>
        </ul>
    </div>
  )
}

export default ChatHeader