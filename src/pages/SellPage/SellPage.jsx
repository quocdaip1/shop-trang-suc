import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";

export default function (){

    return (
       <div className="sellpage">
        <Navbar/>
        <main>
            <section className="current-page">
                    <div className="container">

                    </div>
            </section>

            <section className="allproducts">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="left-content">
                                <div className="box-title">
                                    <h3 className="title">Danh mục sản phẩm</h3>
                                </div>
                                <div className="category">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="right-content"></div>
                        </div>
                    </div>  
                </div>
            </section>
        </main>
        <Footer/>
       </div>
    )
}