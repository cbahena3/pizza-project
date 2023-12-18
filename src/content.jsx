import axios from "axios";

export function Content(){



  const productsIndex = () =>{
    console.log("Hi")
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
    })
  }



  return (
    <div>
      <h1>Welcome to React!</h1>
      <button onClick={productsIndex}>Click Me!</button>
    </div>
  )
}