import { NavLink,Link } from "react-router-dom";
import Homepage from "../pages/HomePage/Homepage";
import "../style/Navbar.css";
export default function () {
  return (
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
              <li className="nav-item-lv1">
                <NavLink className="link" href={<Homepage />} end>
                  MENU
                </NavLink>
                <span></span>
              </li>
              <li className="nav-item-lv1">
                <NavLink className="link" end>SHOP</NavLink>
                <span></span>
              </li>
              <li className="nav-item-lv1">
                <NavLink className="link" end>GIFTS <i className="fa-solid fa-chevron-down"></i>
                </NavLink>
                <span></span>
                <ul className="list-menu-child">
                  <li className="nav-item-lv2"><Link>Quà tặng năm mới</Link></li>
                  <li className="nav-item-lv2"><Link>Quà tặng Valantine</Link></li>
                  <li className="nav-item-lv2"><Link>Quà tặng Sinh nhật</Link></li>
                  <li className="nav-item-lv2"><Link>Quà tặng cặp đôi</Link></li>
                  <li className="nav-item-lv2"><Link>Ngày kỷ niệm</Link></li>
                </ul>
              </li>
             
              <li className="nav-item-lv1">
                <NavLink className="link" end>ABOUT US <i className="fa-solid fa-chevron-down"></i></NavLink>
                <span></span>
                <ul className="list-menu-child">
                  <li className="nav-item-lv2"><Link>Về chúng tôi</Link></li>
                  <li className="nav-item-lv2"><Link>Chính sách</Link></li>
                  <li className="nav-item-lv2"><Link>Hỗ trợ</Link></li>
                  <li className="nav-item-lv2"><Link>Contact</Link></li>
                </ul>
              </li>
              <li className="nav-item-lv1">
                <NavLink className="link" end>BLOG</NavLink>
                <span></span>
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
  );
}
