import Product from "../product/Product";
import Loading from "../Loanding/Loading";

function SampleNextArrow(props) {
  const { onClick} = props;
  return (
    <div onClick={onClick} className="next-wrapper">
      <i className="fa-solid fa-chevron-right next-arrow"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev-wrapper">
      <i className="fa-solid fa-chevron-left prev-arrow"></i>
    </div>
  );
}
export default function (props) {
  const settings1 = {
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

  const { allproducts,loading } = props;
  if(loading){
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Loading/>
      </div>
    )
  }
  return (
    <div className="list-products">
      {allproducts &&
        allproducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
  );
}
