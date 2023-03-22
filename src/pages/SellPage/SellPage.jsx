import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import useFetchData from "../../useHook/useFetchData";
import { useLocation } from "react-router-dom";
import "../../style/SellPage.css"
import ListProducts from "../../components/ListProducts/ListProducts";

export default function () {
  const location = useLocation();
  const Category = location.state?.category;
  const { allProducts } = useFetchData("");
  const handleCategoriesFilter = [
    {
      id: 1,
      title: "CHỌN KHOẢNG GIÁ",
      items: [
        { id: 1.1, nameFilter: "Dưới 500.000đ" },
        { id: 1.2, nameFilter: "Từ 500.000đ - 1triệu" },
        { id: 1.3, nameFilter: "Từ 1triệu - 1.500.000đ" },
        { id: 1.4, nameFilter: "Từ 1.500.000đ - 2triệu" },
        { id: 1.5, nameFilter: "Từ 2triệu - 2.500.000đ" },
        { id: 1.6, nameFilter: "Từ 3triệu" },
      ],
    },
  ];


  const newlistproducts = allProducts.filter((product) => {
    if (Category) {
      return product.category === Category;
    }
    return true;
  });


  return (
    <div className="sellpage">
      <Navbar />
      <main>
        <section className="current-page">
          <div className="container"></div>
        </section>

        <section className="allproducts">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="left-content">
                  <div className="aside-title mb-5">
                    <h3 className="title">Danh mục sản phẩm</h3>
                  </div>
                  <div className="filter-content">
                    <div className="filter-container">
                    {handleCategoriesFilter.map((category) => {
                        return <div key={category.id}>
                          <h3 className="title mb-4">{category.title}</h3>
                          <ul className="list-filter p-0">
                            {
                              category.items.map((item)=> {
                                return <li key={item.id} className="">
                                  <input type="checkbox" id="list_category" className="me-3"/>
                                  <label className={`title-filter`} htmlFor="list_category">{item.nameFilter}</label>
                                </li>
                              })  
                            }
                          </ul>
                        </div> 
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
              <div className="box-title-product mb-3">
                    <h3 className="title">{Category}</h3>
                  </div>
                <div className="right-content">
                    {/* list-products */}
                      <ListProducts allproducts={newlistproducts}/>
                      
                    {/* end-listproducts */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
