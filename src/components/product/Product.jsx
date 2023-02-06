export default function (props){
    const {product} = props;

 return (
    <div className="card">
    <img
      src={product.img}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">
        {" "}
        <a
          href="#"
        >
          {product.name}
        </a>
      </h5>
      <p className="card-price text-danger">{product.price}đ</p>
    </div>
  </div>
 )
}