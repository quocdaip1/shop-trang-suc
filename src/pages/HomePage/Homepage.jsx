import Navbar from "../../components/NavBar/Navbar";
import "../../style/HomePage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
import SliderProducts from "../../components/Slider/SliderProducts";
import useFetchData from "../../useHook/useFetchData";

export default function () {
  const { allProducts, loading, setLoading } = useFetchData("");
  const bestSeller = allProducts
    .sort((a, b) => b.allsell - a.allsell)
    .slice(0, 5);

  const showquanlityProduct = (name) => {
    let count = 0;
    allProducts.forEach((product) => {
      if (product.category === name) {
        count++;
      }
    });
    return count;
  };

  const [buttonFilter, setButtonFilter] = useState([
    {
      id: 1,
      active: true,
      name: "eardrop",
      title: "Hoa Tai",
      img: "./imgs/icon_1_allpro.jpg",
      quanlity: showquanlityProduct("eardrop"),
    },
    {
      id: 2,
      active: false,
      name: "bracelet",
      title: "Vòng tay",
      img: "./imgs/icon_2_allpro.webp",
      quanlity: showquanlityProduct("bracelet"),
    },
    {
      id: 3,
      active: false,
      name: "necklace",
      title: "Dây chuyền",
      img: "./imgs/icon_3_allpro.webp",
      quanlity: showquanlityProduct("necklace"),
    },
  ]);

  useEffect(() => {
    handlefilterProducts(buttonFilter[2].name,buttonFilter[0].id);
    const newButtonFilter = buttonFilter.map((button) => ({
      ...button,
      quanlity: showquanlityProduct(button.name),
    }));
      setButtonFilter(newButtonFilter);
  }, [allProducts]);
  const [productfilter, setProductfilter] = useState([]);
  const handlefilterProducts = (name, id) => {
    setLoading(true);
    const newlistproducts = allProducts.filter(
      (product) => product.category === name
    );
    setProductfilter(newlistproducts);
    const newButtonFilter = buttonFilter.map((button) => ({
      ...button,
      active: button.id === id,
    }));
    setButtonFilter(newButtonFilter);
    setLoading(false);
  };


  // slider
  function SampleNextArrow(props) {
    return <div className="d-none" />;
  }

  function SamplePrevArrow(props) {
    return <div className="d-none" />;
  }

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="slider-wrapper">
        <img src="./imgs/slider_1.webp" alt="" />
      </div>
      <main>
        <section className="section_service">
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-3">
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
              <div className="col-6 col-lg-3">
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
              <div className="col-6 col-lg-3">
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
              <div className="col-6 col-lg-3">
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
              <div className="col-6 col-lg-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_1.webp" alt="" />
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_2.webp" alt="" />
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="banner-wrapper">
                  <img src="./imgs/img_banner_3.webp" alt="img_banner1" />
                </div>
              </div>
              <div className="col-6 col-lg-3">
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
              <SliderProducts allProducts={bestSeller} loading={loading} />
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
                  <div className="row">
                    {buttonFilter.map((button) => {
                      return (
                        <div key={button.id} className="col-4">
                          <div
                            onClick={() =>
                              handlefilterProducts(button.name, button.id)
                            }
                            className="allpro-wrapper d-flex"
                          >
                            <div
                              className={
                                button.active
                                  ? "active icon-wrapper"
                                  : "icon-wrapper"
                              }
                            >
                              <img src={button.img} alt="" />
                            </div>
                            <div className="mx-2 p-2">
                              <h4 className="name_allpro">{button.title}</h4>
                              <div className="quanlity_product">
                                {button.quanlity} sản phẩm
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>{" "}
                </div>
                <div className="list-allpro">
                  {/* filter products */}
                  <SliderProducts
                    allProducts={productfilter}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4 mb-3">
                <img src="./imgs/img_3banner_1.webp" alt="" />
              </div>
              <div className="col-12 col-lg-4 mb-3">
                <img src="./imgs/img_3banner_2.webp" alt="" />
              </div>
              <div className="col-12 col-lg-4 mb-3">
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
              <Slider {...settings}>
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
              </Slider>
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
              <Slider {...settings2}>
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
