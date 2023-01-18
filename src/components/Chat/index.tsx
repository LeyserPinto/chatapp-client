import React,{useState} from 'react'
import { io } from 'socket.io-client'
import { useLocation } from 'react-router-dom'
import ChatFooter from './Chat-footer'
import ChatBody from './Chat-body'
import ChatHeader from './Chat-Header'


const socket=io('http://localhost:4000')
const ChatPage = () => {


  const location=useLocation()

  localStorage.setItem(`${location.state.user}`,location.state.user)
  
  return (
    <div className='chat-container'>
      <ChatHeader user={location.state.user}/>
      <ChatBody socket={socket} user={location.state.user} />
      <ChatFooter socket={socket}  user={location.state.user}/>
    </div>
  )
}

export default ChatPage