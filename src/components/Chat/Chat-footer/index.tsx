import React,{useState,useRef} from 'react'
import {TbSend} from 'react-icons/tb'


type TypeProps={
    socket:any,
    user:string
}

const ChatFooter = ({socket,user}:TypeProps) => {

  let inputRef=useRef<HTMLInputElement>(null)
    
  const [Message,setMessage] = useState('')


  const currentTime=new Date()

  

  const SendMessage=()=>{


    if(Message.length>0 && localStorage.getItem(user)){
      console.log('todo ok')

      socket.emit('message',{
        text:Message,
        name:user,
        time:`${currentTime.getHours()}:${currentTime.getMinutes()}`,
        id:`${socket.id}${Math.random()}`,
        socketID:socket.id
      })
      setMessage('')
  
  
      if(null!=inputRef.current){
        inputRef.current.value=''
      }
    }else{
      alert(`You can't send empty message`)
    }
    
    

  }

  return (
    <div className='chat-footer'>
        <input type="text" placeholder='Type your messages' onChange={(e)=>setMessage(e.target.value)}  ref={inputRef}/>
        <span><TbSend  onClick={SendMessage}/></span>
    </div>
  )
}

export default ChatFooter