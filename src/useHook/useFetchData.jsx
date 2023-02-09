import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../utils";
export default function () {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApi = async () => {
    setLoading(true);
    try {
      const postData = await axios.get(`${config.API_URL}/Allproducts`);
      setAllProducts(postData.data);
    } catch (error) {
      console.log("error homepage", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { allProducts, loading, setLoading };
}
