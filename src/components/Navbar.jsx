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
                <NavLink href={<Homepage />} end>
                  MENU
                </NavLink>
                <span></span>
              </li>
              <li>
                <NavLink end>SHOP</NavLink>
                <span></span>
              </li>
              <li className="nav-item-lv1">
                <NavLink end>GIFTS <i className="fa-solid fa-chevron-down"></i>
                </NavLink>
                <span></span>
                <ul className="list-menu-child">
                  <li><Link>Quà tặng năm mới</Link></li>
                  <li><Link>Quà tặng Valantine</Link></li>
                  <li><Link>Quà tặng Sinh nhật</Link></li>
                  <li><Link>Quà tặng cặp đôi</Link></li>
                  <li><Link>Ngày kỷ niệm</Link></li>
                </ul>
              </li>
             
              <li className="nav-item-lv1">
                <NavLink end>ABOUT US <i className="fa-solid fa-chevron-down"></i></NavLink>
                <span></span>
              </li>
              <li className="nav-item-lv1">
                <NavLink end>BLOG</NavLink>
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
