import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import useFetchData from "./useHook/useFetchData";

function App() {
  const {allProducts, loading, setLoading } = useFetchData('');

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              allProducts={allProducts}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
