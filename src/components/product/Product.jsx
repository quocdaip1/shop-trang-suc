import "../../style/Product.css";
import { Link } from "react-router-dom";
export default function (props) {
  const { product } = props;

  let customprice = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={product.img} className="card-img-top" alt="sản phẩm" />
        <div className="box-action">
          <Link className="link">
            {" "}
            <i className="fa-solid fa-gear"></i>
          </Link>
          <Link>
          <i className="fa-regular fa-eye"></i>
          </Link>
          <Link>
          <i className="fa-regular fa-heart"></i>
          </Link>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <a href="#">{product.name}</a>
        </h5>
        <p className="card-price text-danger">{customprice}đ</p>
      </div>
    </div>
  );
}
