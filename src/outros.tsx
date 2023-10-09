"use client"

import { useState, useEffect } from "react"
import axios from "axios"

interface dataInfo{
  name: string
  email: string
}

export default function Home() {
  // const [second, setSecond] = useState(0)
  // const [minute, setMinute] = useState(0)
  // const [hour, setHour] = useState(0)
  // useEffect(()=>{
  //   let intervalo = setInterval(()=>{
  //     setSecond(second + 1)
  //     if (second == 59){
  //       setSecond(0)
  //       setMinute(minute + 1)
  //     }
  //     if (minute == 59){
  //       setMinute(0)
  //       setHour(hour + 1)
  //     }
  //   }, 1000)
  //   return ()=>{
  //     clearInterval(intervalo)
  //   }
  // })

  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setUsers(response.data)
    })
  }, [])
  
  return (
    <div className="">
      {/* useState example
       const [count, setCount] = useState(0)

      <p>clique para aumentar o contador</p>
      <button onClick={()=>{setCount(count + 1)}} className="p-5 bg-slate-500 text-white">{count}</button> */}

      {/* const [count, setCount] = useState(0)
        useEffect(()=>{
          document.title = `Você clicou ${count}` --- Qual é o efeito que vai ser executado

          return ()=>{ --- O return é o "CleanUp code", é a função que vai resetar o estado por exemplo
            if (count == 20){
              setCount(0)
            }
          }
        }, []) --- O array é o que controla quando vai executar o useEffect novamente, se deixar vazio ele so executa quando o site é carregado pela primeira vez


      <p>clique para aumentar o contador</p>
      <button onClick={()=>{setCount(count + 1)}} className="p-5 bg-slate-500 text-white">{count}</button> */}

      {/* <p>{hour}:{minute}:{second}</p> */}
      {/*
        users.map((data: dataInfo)=>{
          return(
            <div key={data.name}>
              <p>{data.name} | {data.email}</p>
            </div>
          )
          })
        */}
    </div>
  )
}
