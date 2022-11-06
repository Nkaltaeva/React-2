import './App.css';
import React, {useState, useCallback, useRef, useEffect, useId} from 'react'

export default function App () {
  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text:'',
    author:''
  })


  const ROBOT_MESSAGE = 'Привет. Вопрос получила, отвечу позже.'

  useEffect(()=>{
    if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
      setTimeout(()=>{
        setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author: 'robot'}])
      }, 1000)
    }
  }, [messageList])

  return (
    <div className="App">
      <Form data={messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>
      <div>
        {
          messageList.map((e,i)=><Message text={e.text} author ={e.author} key = {i}/>)
        }
      </div>
      <NewComponent age = {24} />
    </div>
  );
}

const Form = ({data, setData, setMessage}) => { 
    const {text, author} = data
    const submmitForm = (e) => {
    e.preventDefault()
    if(text.length > 0){
      setMessage(pervstate => [...pervstate, {text, author}])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  } 

    return(
      <form onSubmit={submmitForm}>
        <input placeholder='Имя' value={text} onChange = {(e) =>
          setData(pervstate => ({...pervstate, text: e.target.value})
          )}/>

        <input placeholder='Текст' value={author} onChange = {(e) =>
          setData(pervstate => ({...pervstate, author: e.target.value})
          )}/>

        <button tupe='submit'>Отправить</button>
      </form>
    )
}

const Message = ({author, text}) =>{
  return(
    <div>
      <hr/>
      <h1>{author}</h1>
      <p>{text}</p>
      <hr/>
    </div>
  )
}

const NewComponent = ({age}) => {
  const [usersId, setUserID] = useState([
    1,
    2,
    3,
    4
  ])

  return (
    <div>
      <h2>Задай вопрос</h2>
      <p>ROBOT ответит</p>
    </div>
  );

}