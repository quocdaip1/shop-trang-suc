import { NavLink, Link } from "react-router-dom";
import { useRef } from "react";
import "../../style/Navbar.css";
export default function () {
  const spanRef = useRef(null);

  const isActive = () => {
    console.log("ss");
  };
  return (
    <div className="container">
      <div className="navBar d-flex justify-content-between">
        <div className="logo-wrapper ">
          <img src="./imgs/logo.webp" alt="" />
        </div>
        <div className="nav-midder">
          <div className="up d-flex justify-content-between">
            <div className="hotline-wrapper d-flex justify-content-center">
              <h4>
                <i className="fa-solid fa-phone"></i>HOTLINE:
                <a href="#">081 612 9868</a>
              </h4>
            </div>
            <div className="search-wrapper d-flex justify-content-center">
              <input
                className="input-search"
                type="text"
                placeholder="Tìm Sản Phẩm... "
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="down">
            <nav>
              <ul className="list-menu d-flex justify-content-space-aroud">
                <li className="nav-item-lv1" onClick={isActive}>
                  <NavLink className="link" to="/">
                    MENU
                  </NavLink>
                </li>
                <li className="nav-item-lv1" onClick={isActive}>
                  <NavLink className="link" to="/SellPage">
                    SHOP
                  </NavLink>
                  <i className="fa-solid fa-chevron-down"></i>
                  <ul className="list-menu-child">
                    <li className="nav-item-lv2">
                      <Link>Dây chuyền</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link>Vòng tay</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link>Hoa tai</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link>Nhẫn</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link>Bộ trang sức</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-lv1">
                  <NavLink className="link">GIFTS</NavLink>
                  <i className="fa-solid fa-chevron-down"></i>
                  <ul className="list-menu-child">
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Quà tặng năm mới</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Quà tặng Valantine</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Quà tặng Sinh nhật</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Quà tặng cặp đôi</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Ngày kỷ niệm</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item-lv1">
                  <NavLink className="link">ABOUT US</NavLink>
                  <i className="fa-solid fa-chevron-down"></i>
                  <ul className="list-menu-child">
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Về chúng tôi</Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Chính sách </Link>
                      <i className="fa-solid fa-chevron-right"></i>
                      <ul className="list-menu-child-2">
                        <li className="nav-item-lv3">
                          <Link className="link-lv3">Chính sách bảo hành</Link>
                        </li>
                        <li className="nav-item-lv3">
                          <Link className="link-lv3">Chính sách đổi trả</Link>
                        </li>
                        <li className="nav-item-lv3">
                          <Link className="link-lv3">
                            Chính sách vận chuyển
                          </Link>
                        </li>
                        <li className="nav-item-lv3">
                          <Link className="link-lv3">Chính sách bảo mật</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Hỗ trợ</Link>
                      <i className="fa-solid fa-chevron-right"></i>

                      <ul className="list-menu-child-2">
                        <li className="nav-item-lv3">
                          <Link className="link-lv3">Hướng dẫn mua hàng</Link>
                        </li>
                        <li className="nav-item-lv3">
                          <Link className="link-lv3">Hướng dẫn thanh toán</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-lv1">
                  <NavLink className="link">BLOG</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="acction-account">
          <ul className="list-acction-account d-flex">
            <li>
              <div className="icon-wrapper">
                <a href="#">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </div>
              <p>Yêu thích</p>
            </li>
            <li>
              <div className="icon-wrapper">
                <a href="#">
                  <i className="fa-regular fa-user"></i>
                </a>
              </div>
              <p>Tài Khoản</p>
            </li>
            <li>
              <div className="icon-wrapper">
                <a href="#">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </div>
              <p>Giỏ Hàng</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
