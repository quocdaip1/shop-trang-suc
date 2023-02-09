import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./App.css";
import { useEffect, useState,useRef } from "react";
import { config } from "./utils";
import axios from "axios";



function App() {

  const [allProducts,setAllProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [isactive,setIsActive] = useState(false);
  const fetchApi = async () =>{
      setLoading(true);
      try {
        const postData = await axios.get(`${config.API_URL}/Allproducts`);
        setAllProducts(postData.data);
        } catch (error) {
        console.log("error homepage",error)
      }
      setLoading(false)
  }

  useEffect(() => {
    fetchApi();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Homepage 
         allproducts={allProducts} loading={loading} setLoading={setLoading} isactive={isactive} setIsActive={setIsActive} />}/>
      </Routes>
    </div>
  );
}

export default App;
