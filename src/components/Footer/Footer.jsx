import { Link } from "react-router-dom";
import "../../style/Footer.css"
export default function () {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 mb-5">
            <h2 className="footer-title">THÔNG TIN CHUNG</h2>
            <div className="contact">
              <p className="address">
                <span>Địa chỉ: </span>Số 191 Xã Đàn, Phường Nam Đồng, Quận Đống
                Đa, TP Hà Nội
              </p>
              <p className="phone">
                <span>Điện thoại: </span> 0769870037
              </p>
              <p>
                <span>Email:</span> <Link>quocdai072@gmail.com</Link>
              </p>
              <div className="icon-contact d-flex">
                <div className="icon-wrapper">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon-wrapper">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon-wrapper">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="icon-wrapper">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5">
            <h2 className="footer-title">
                BÀI VIẾT MỚI
            </h2>
            <div className="news-content">
              <div className="news-wrapper">
                <div className="img-wrapper">
                  <img src="./imgs/qua-tang-sinh-nhat-ban-gai.webp" alt="" />
                </div>
                <div className="text-content">
                  <Link>Bật mí Top 3 quà tặng kỷ niệm tình yêu hot nhất 2022</Link>
                  <p className="time-content">07/01/2023</p>
                </div>
              </div>
              <span></span>
              <div className="news-wrapper">
                <div className="img-wrapper">
                  <img src="./imgs/6135b4d5-e52a-4109-828a-28bb15e41e08.webp" alt="" />
                </div>
                <div className="text-content">
                  <Link>Bật mí Top 3 quà tặng kỷ niệm tình yêu hot nhất 2022</Link>
                  <p className="time-content">07/01/2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-5">
            <h2 className="footer-title">
              VỀ CHÚNG TÔI
            </h2>
            <ul className="list-content">
              <li><Link>Tìm kiếm</Link></li>
              <li><Link>Giới thiệu</Link></li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 mb-5">
            <h2 className="footer-title">
             HỖ TRỢ
            </h2>
            <ul className="list-content">
              <li><Link>Điều khoản dịch vụ</Link></li>
              <li><Link>Hướng dẫn mua hàng</Link></li>
              <li><Link>Hướng dẫn thanh toán</Link></li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 mb-5">
            <h2 className="footer-title">
             CHÍNH SÁCH
            </h2>
            <ul className="list-content">
              <li><Link>Chính sách bảo mật</Link></li>
              <li><Link>Chính sách bảo hành</Link></li>
              <li><Link>Chính sách đổi trả</Link></li>
              <li><Link>Chính sách vận chuyển</Link></li>
            </ul>
          </div>
        </div>
        <div className="borderlind"></div>
        <div className="copyright text-center mt-3">
          <p><i className="fa-regular fa-copyright"></i> Bản quyền thuộc phạm quốc đại</p>
        </div>
      </div>
    </footer>
  );
}
