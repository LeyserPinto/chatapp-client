import {useState,useEffect} from 'react'



type TypeProps={

    socket:any,
    user:string
}
const ChatBody = ({socket,user}:TypeProps) => {

   const [messages,setMessages]=useState<object[]>([])




   useEffect(() => {
    socket.on('messageResponse',(data:object)=>setMessages([...messages,data]))

    
}, [messages,socket])
   
 

  return (
    <div className="chat-body">
        <div className="messages">

        {messages.map((message:any) =>
          message.name === localStorage.getItem(user) ? (
            < div className = "msg-row user" key={message.id}>
                <section className='msg-body'>{message.text}</section>
                <section className='msg-time'>{message.time}</section>
            </div >
          ) : (
            < div className = "msg-row target" key={message.id}>
                <section className='msg-body'>{message.text}</section>
                <section className='msg-time'>{message.time}</section>
            </div >
          )
        )}
            
            
            
        </div>
    </div>
  )
}

export default ChatBody