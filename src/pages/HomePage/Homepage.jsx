import Navbar from "../../components/NavBar/Navbar";
import "../../style/HomePage.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
import ListProducts from "../../components/ListProducts/ListProducts";
import Loading from "../../components/Loanding/Loading";
import SliderProducts from "../../components/Slider/SliderProducts";

export default function (props) {
  const { allproducts, loading ,setLoading} = props;

  const bestSeller = [...allproducts].sort((a,b) => b.allsell - a.allsell).slice(0,5);

  const [productfilter,setProductfilter] = useState([])
  const handlefilterProducts = (event) => {
    setLoading(true)
    const productName = event.target.getAttribute("name");
    const newlistproduct = [];

    [...allproducts].filter(function (product) {
      if(productName == product.category){
        return newlistproduct.push(product);
      }
    })

    setProductfilter([...newlistproduct]);
    setLoading(false);
  }
  
  console.log(productfilter)


  const settings1 = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings1: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings1: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings1: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings2: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings2: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings2: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homepage">
      <header>
        <Navbar />
        <div className="slider-wrapper">
          <img src="./imgs/slider_1.webp" alt="" />
        </div>
      </header>
      <main>
        <section className="section_service">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="box">
                  <div className="icon-box">
                    <i className="fa-solid fa-truck-pickup"></i>
                  </div>
                  <div className="text-box">
                    <p>
                      Vận chuyển <span>miễn phí</span>
                    </p>
                    <p>
                      Tiêu chuẩn <span>toàn quốc</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="box">
                  <div className="icon-box">
                    <i className="fa-solid fa-box"></i>
                  </div>
                  <div className="text-box">
                    <p>
                      Đổi trả <span>miễn phí</span>
                    </p>
                    <p>
                      Trong vòng <span>7 ngày</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="box">
                  <div className="icon-box">
                    <i className="fa-regular fa-credit-card"></i>
                  </div>
                  <div className="text-box">
                    <p>
                      Dịch vụ <span>bảo hành</span>
                    </p>
                    <p>
                      Lên tới <span>5 năm</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="box">
                  <div className="icon-box">
                    <i className="fa-solid fa-gift"></i>
                  </div>
                  <div className="text-box">
                    <span className="fs-5">Túi hộp trang nhã</span>
                    <p>Sẵn sàng trao tặng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_banner">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-5">
                <div className="title-wrapper d-flex justify-content-center flex-column align-items-center">
                  <h3 className="mb-4">
                    SILVER <span>FINE JEWELRY</span>
                  </h3>
                  <div className="lineboder-custom">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_1.webp" alt="" />
                </div>
              </div>
              <div className="col-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_2.webp" alt="" />
                </div>
              </div>
              <div className="col-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_3.webp" alt="img_banner1" />
                </div>
              </div>
              <div className="col-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_4.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-action">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-5">
                <div className="title-wrapper d-flex justify-content-center flex-column align-items-center">
                  <h3 className="mb-4">
                    BEST <span>SELLERS</span>
                  </h3>
                  <div className="lineboder-custom">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                </div>
              </div>
              {/* sliderBestSeller */}
              <SliderProducts allproducts={bestSeller} loading={loading} />
              {/* sliderBestSeller */}
            </div>
          </div>
        </section>
        <section className="section-banner">
          <img src="./imgs/bg_banner_big.webp" alt="" />
        </section>
        <section className="section-allproduct">
          <div className="container">
            <div className="row mb-5">
              <div className="title-wrapper d-flex justify-content-center flex-column align-items-center">
                <h3 className="mb-4">
                  NEW <span>COLLECTION</span>
                </h3>
                <div className="lineboder-custom">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3">
                <div className="img-wrapper">
                  <img src="./imgs/img_banner_tab.webp" alt="" />
                </div>
              </div>
              <div className="col-9">
                <div className="list-icon-allpro mb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <div onClick={handlefilterProducts} className="allpro-wrapper d-flex">
                          <div className="icon-wrapper">
                            <img name="eardrop" src="./imgs/icon_1_allpro.jpg" alt="" />
                          </div>
                          <div className="mx-2 p-2">
                            <h4 className="name_allpro">Hoa Tai</h4>
                            <div className="quanlity_product">138 sản phẩm</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div  onClick={handlefilterProducts} className="allpro-wrapper d-flex">
                          <div className="icon-wrapper">
                            <img name="bracelet" src="./imgs/icon_2_allpro.webp" alt="" />
                          </div>
                          <div className="mx-2 p-2">
                            <h4 className="name_allpro">Vòng Tay</h4>
                            <div className="quanlity_product">138 sản phẩm</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div onClick={handlefilterProducts} className="allpro-wrapper d-flex">
                          <div className="icon-wrapper">
                            <img name="necklace" src="./imgs/icon_3_allpro.webp" alt="" />
                          </div>
                          <div className="mx-2 p-2">
                            <h4 className="name_allpro">Dây Chuyền</h4>
                            <div className="quanlity_product">138 sản phẩm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-allpro">
                 {/* filter products */}
                 <SliderProducts allproducts={productfilter} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src="./imgs/img_3banner_1.webp" alt="" />
              </div>
              <div className="col-4">
                <img src="./imgs/img_3banner_2.webp" alt="" />
              </div>
              <div className="col-4">
                <img src="./imgs/img_3banner_3.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-feedbacks">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="text-center">FEEDBACKS</h2>
              </div>
            </div>
            <div className="row">
              {/* <Slider {...settings2}>
                <div className="card">
                  <img
                    src="./imgs/img_brand_1.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card">
                  <img
                    src="./imgs/img_brand_2.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card">
                  <img
                    src="./imgs/img_brand_3.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card">
                  <img
                    src="./imgs/img_brand_4.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card">
                  <img
                    src="./imgs/img_brand_5.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card">
                  <img
                    src="./imgs/img_brand_6.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </Slider> */}
            </div>
          </div>
        </section>
        <section className="section-blog">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <div className="title-wrapper d-flex justify-content-center flex-column align-items-center">
                  <h3 className="mb-4">
                    OUR LATEST <span>BLOG</span>
                  </h3>
                  <div className="lineboder-custom">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Slider {...settings1}>
                <div className="card">
                  <div className="img-wrapper">
                    <img
                      src="./imgs/qua-tang-sinh-nhat-ban-gai.webp"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title text-center">
                      <Link>
                        Bật mí Top 3 quà tặng kỷ niệm tình yêu hot nhất 2022
                      </Link>
                    </h3>
                    <p className="time-post">
                      <span>07/01/2023</span>
                    </p>
                    <p className="card-text">
                      Yêu là cảm xúc thiêng liêng và mỗi dịp kỷ niệm là một cột
                      mốc đánh dấu đoạn đường hạnh phúc, thể hiện sự trân trọng
                      dành cho mối quan hệ và hai đôi mắt cùng hướng...
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="img-wrapper">
                    <img
                      src="./imgs/6135b4d5-e52a-4109-828a-28bb15e41e08.webp"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      <Link>Quà tặng bạn gái 20/10 các anh nên chọn gì?</Link>
                    </h3>
                    <p className="time-post">
                      <span>07/01/2023</span>
                    </p>
                    <p className="card-text">
                      Sắp tới 20/10 rồi mà các anh vẫn chưa biết tặng gì cho
                      nàng thì hãy để Cara Luna gợi ý anh những món quà tặng bạn
                      gái 20/10 chắc chắn nàng siêu mê nhé! 20/10...
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="img-wrapper">
                    <img
                      src="./imgs/mau-cam-hop.webp"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      <Link>
                        Top 7 món quà tặng sinh nhật bạn gái ý nghĩa nhất{" "}
                      </Link>
                    </h3>
                    <p className="time-post">
                      <span>07/01/2023</span>
                    </p>
                    <p className="card-text">
                      Tặng quà sinh nhật bạn gái là một cách để chàng bày tỏ
                      tình yêu, sự quan tâm và chân thành tới nàng. Thế nhưng,
                      chàng lại băn khoăn không biết nên tặng gì đ...
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
