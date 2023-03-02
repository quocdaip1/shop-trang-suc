import { useEffect, useState } from "react";
import myAxios from "../axios";
export default function (keyParams) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApi = async () => {
    try {
      setLoading(true);
      // const queryParams = {
      //   search: keyParams,
      // };
      // const response = await myAxios.get("Allproducts",{
      //   params:queryParams,
      // })
      const response = await myAxios.get(`Allproducts?search=${keyParams}`);
      setAllProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error homepage", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [keyParams]);

  return {allProducts, loading, setLoading};
}
