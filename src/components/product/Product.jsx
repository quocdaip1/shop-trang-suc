export default function (props) {
  const { product } = props;

  let customprice = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



  
  return (
    <div className="card">
      <img src={product.img} className="card-img-top" alt="sản phẩm" />
      <div className="card-body">
        <h5 className="card-title">

          <a href="#">{product.name}</a>
        </h5>
        <p className="card-price text-danger">{customprice}đ</p>
      </div>
    </div>
  );
}
