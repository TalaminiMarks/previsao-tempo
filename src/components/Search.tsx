"use client"

import 'dotenv/config'
import { useState } from 'react'

export function Search(){
  const [cidade, setCidade] = useState("")

  const apikey = process.env.API_KEY
  
  async function searchContext(e: any){
    e.preventDefault();
    let search = (document.querySelector("input[id=search]") as HTMLInputElement).value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`

    await fetch(url)
    .then(response => response.json())
    .then(data =>{
      const {main, name, sys, weather} = data
      if (sys != undefined){

        if (weather != undefined){
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
          setCidade(`
          <div class="gambiara">
            <p>${main.temp}°C</p>
            <p>${name} - ${sys.country}</p>
            <p>${weather[0]['description']}</p>
            <img src='${icon}' />
          </div>
          `)
        }
        else{
          setCidade("")
        }
      }
    })
    .catch((e)=>{console.log(e)})
  }
  return(
    <div>
      <header className="flex flex-col justify-center items-center py-5 space-y-4 bg-zinc-300">
        <label htmlFor="search" className="text-xl text-black">Digite uma cidade para ver a previsão do tempo</label>
        <form onSubmit={(e)=>{searchContext(e)}} className="space-x-5">
          <input type="text" id="search" name="search" className="rounded-xl px-5 py-2 text-white bg-zinc-500 outline-none"/>
          <input type="submit" className="rounded-xl px-5 py-2 text-white outline-none cursor-pointer bg-zinc-500 hover:bg-stone-800 transition-colors"/>
        </form>
      </header>
      <div className='flex py-4 bg-zinc-200 justify-center items-center'>
        {
          (cidade != "") ? <div dangerouslySetInnerHTML={{__html: cidade}}/> : <div>Pesquise uma cidade</div>
        }
      </div>
    </div>
    
  )
}