import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("UseEffect starts");
    fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    ) 
      .then((response) => response.json())
      .then ((data) => setProducts(data));
    console.log("UseEffect ended");
  }, [] );

    const list = products.map((product) => <li key={product.name}>{product.name}</li>)
  return (
    <> 
      Hello!
        <div>
          <ul>
            {list} 
          </ul>
        </div>
    </>
  )
}

export default App
