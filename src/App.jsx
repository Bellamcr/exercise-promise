import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log("UseEffect starts")
    fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    console.log("UseEffect starts");
  }, [] );

  return (
    <>
      <div>        
        Hello!
      </div>
     
    </>
  )
}

export default App
