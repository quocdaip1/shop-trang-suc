import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./App.css";
import { useEffect, useState } from "react";
import { config } from "./utils";
import axios from "axios";



function App() {

  const [allProducts,setAllProducts] = useState([]);
  const [bestSeller,setBestSeller] = useState([]);

  const fetchApi = async () =>{
      const postData = await axios.get(`${config.API_URL}/Allproducts`);
      setAllProducts(postData.data);
      
  }

  useEffect(() => {
    fetchApi();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Homepage allproducts={allProducts} />}/>
      </Routes>
    </div>
  );
}

export default App;
