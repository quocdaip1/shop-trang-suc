import Product from "../product/Product";
import Slider from "react-slick";
import React,{useMemo} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/Slider.css";
import Loading from "../Loanding/Loading";

const settings = {
  speed: 500,
  infinite: false,
  slidesToShow: 4,
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
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ display: "block" }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ display: "block" }} onClick={onClick} />
  );
}

export default function (props) {
  const { allProducts, loading } = props;

  const productElements = useMemo(() => {
    if (loading) {
      return <Loading />;
    }
    return allProducts && allProducts.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  }, [allProducts, loading]);

  return <Slider {...settings}>{productElements}</Slider>;
}
