import Product from "../product/Product";
import Loading from "../Loanding/Loading";
import Pagination from "../../useHook/usePagination";
import { useEffect } from "react";

function SampleNextArrow(props) {
  const { onClick } = props;
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

  const { allproducts, loading } = props;
  const { data, pages, startIndex, endIndex,handlePageChange } = Pagination(allproducts);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="list-products row">
      {data &&
        data.slice(startIndex, endIndex).map((product) => {
          return (
            <div className="col-3 mb-5">
              <Product key={product.id} product={product} />
            </div>
          );
        })}
      <ul className="d-flex justify-content-end">
        {pages && pages.map((page) => (
          <li key={page} className="me-2">
            <button className="btn btn-primary" onClick={() => handlePageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
