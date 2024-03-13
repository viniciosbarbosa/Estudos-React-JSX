import { useState , useEffect } from "react";

export const useFetch = (url) => {
    const [data , setData] = useState(null)
    const [config , setConfig] = useState(null)
    const [method , setMethod] = useState(null)
    const [callFetch , setCallFetch] = useState(null)


    const [loading , setLoading] = useState(false)

    const [error , setError] = useState(null)
    
    const httpConfig = (data , method) =>{
        console.log(data , method)
        console.log

        if(method === "POST"){
            setConfig({
                method ,
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
                
            })

         setMethod(method)
        }

        console.log(config)
    }
    
    useEffect(() =>{

        const fetchData = async () => {
            setLoading(true)
          try {
              const res = await fetch(url)
  
              const json = await res.json()
  
              setData(json)
          } catch (error) {
            console.log(error.menssage)
            setError("Deu Erro")
          }
            setLoading(false)
        }

        fetchData()

    }, [url , callFetch])

    useEffect( ()=>{
       const httpRequest = async () => {
            if(method === "POST"){
                let fetchOpitions = [url, config]
                const res = await fetch(... fetchOpitions)

                const json = await res.json()

                setCallFetch(json)
            }
       }
       httpRequest()
    }, [config , method , url])

    return {data , httpConfig , loading , error}
}

