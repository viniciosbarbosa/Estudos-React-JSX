import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useFetch } from './hooks/useFetch'
import './App.css'

function App() {
  const [products , setProducts] = useState([])

  const url = "http://localhost:3000/products"

  const {data:itens , httpConfig , loading , error} = useFetch(url)
  // setProducts(data)

  console.log(itens)

  const [name , setName] = useState("")
  const [price , setPrice] = useState("")

 

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setProducts(data);

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();

  //   return () => {

  //   };
  // }, [url]);

  const handleSubmit = async (e) =>{ 
    e.preventDefault()

    const product = {
      name:name,
      price:price
    };

    // const response = await fetch(url , {
    //   method : "POST",
    //   headers:{
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify(product)

    // });
    // JSON.stringify(product)

    // const addedProduct = await response.json()

    // setProducts((prevProducts) => [...prevProducts , addedProduct])

    httpConfig(product , "POST")

    setName("")
    setPrice("")
  }



  return (
    <div className="App">
          <h1>Lista de Produtos</h1>
          {loading && <p>Carregando Dados</p>}
          {error && <p>{error}</p>}

          {!loading && (
              <ul>
              {itens && itens.map((product) =>(
                  <li key={product.id}>{product.name} - R$ {product.price}</li>
              ))}
              </ul>
          )}
         

          <div className="add-product">
            <form onSubmit={handleSubmit}>
                <label>Nome:
                  <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Preço:
                  <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                </label>

                {loading && <button disabled>Aguarde</button>}
                {!loading && <button onClick={handleSubmit}>Clique aqui</button>}
               
            </form>
          </div>
    </div>
  )
}

export default App
