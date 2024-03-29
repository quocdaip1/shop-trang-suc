import { useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { loadingPage } from "../../axios";

import "../../style/Navbar.css";
import { lazyload } from "../../utils";
export default function () {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [listMenu, setListMenu] = useState([
    {
      id: 1,
      nameMenu: "SHOP",
      active: false,
      items: [
        {
          id: 1.1,
          nameItem: "Dây chuyền",
          nameUrl: "Day-chuyen",
          nameProduct: "necklet",
        },
        {
          id: 1.2,
          nameItem: "Vòng tay",
          nameUrl: "Vong-tay",
          nameProduct: "bracelet",
        },
        {
          id: 1.3,
          nameItem: "Hoa tai",
          nameUrl: "Hoa-tai",
          nameProduct: "eardrop",
        },
        { id: 1.4, nameItem: "Nhẫn", nameUrl: "Nhan", nameProduct: "ring" },
        {
          id: 1.5,
          nameItem: "Bộ trang sức",
          nameUrl: "Day-chuyen",
          nameProduct: "braclet",
        },
      ],
      nameUrl: "all",
      nameProduct: "all",
    },
    {
      id: 2,
      nameMenu: "GIFTS",
      active: false,
      items: [
        { id: 2.1, nameItem: "Quà tặng năm mới" },
        { id: 2.2, nameItem: "Quà tặng Valantine" },
        { id: 2.3, nameItem: "Quà tặng sinh nhật" },
        { id: 2.4, nameItem: "Quà tặng cặp đôi" },
        { id: 2.5, nameItem: "Ngày kỉ niệm" },
      ],
    },
    {
      id: 3,
      nameMenu: "ABOUT US",
      active: false,
      items: [
        { id: 3.1, nameItem: "Về chúng tôi" },
        {
          id: 3.2,
          active: false,
          nameItem: "Chính sách",
          items: [
            { id: 3.21, nameItem: "Chính sách bảo hành" },
            { id: 3.22, nameItem: "Chính sách đổi trả" },
            { id: 3.23, nameItem: "Chính sách vận chuyển" },
            { id: 3.24, nameItem: "Chính sách bảo mật" },
          ],
        },
        {
          id: 3.3,
          active: false,
          nameItem: "Hỗ trợ",
          items: [
            { id: 3.31, nameItem: "Hướng dẫn mua hàng" },
            { id: 3.32, nameItem: "Hướng dẫn bảo hành" },
          ],
        },
        { id: 3.4, nameItem: "Contact" },
      ],
    },
  ]);
  const moveSellPage = (event) => {
    event.stopPropagation();
    const nameUrl = event.currentTarget.dataset.name;
    const nameProduct = event.target.name;
    if (nameUrl) {
        navigate(`/${nameUrl}`, { state: { category: nameProduct } });
        lazyload();
    }
  };

  const handleOMenuMobile = () => {
    setIsActive(!isActive);
  };

  const handleMenuChildren = (event,ItemID, menuID) => {
    event.stopPropagation();
    const newListMenu = listMenu.map((menu) => {
      if (menu.id === menuID) {
        //nếu menu đó có item
        const newItems = menu.items.map((item) => {
          return {
            ...item,
            active: item.id === ItemID,
          };
        });
        return {
          ...menu,
          items: newItems,
        };
      } else {
        return {
          ...menu,
          active: menu.id === ItemID,
        };
      }
    });
    setListMenu(newListMenu);
  };

  return (
    <div className="container-fluid container-xxl position-relavtive">
      <div className="navBar d-flex justify-content-between">
        <div className="nav-responsive d-lg-none">
          <div
            className="icon-wrapper button-menu-mobile"
            onClick={handleOMenuMobile}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <ul
            className={
              isActive ? "menuAnimation list-menu-mobile" : "list-menu-mobile"
            }
          >
            <div className="box-title">
              Danh mục sản phẩm
              <div
                className="icon-wrapper button-close-menu me-3"
                onClick={handleOMenuMobile}
              >
                <i className="fa-solid fa-x"></i>
              </div>
            </div>
            <li className="nav-item-lv1">
              <NavLink className="link" to="/">
                MENU
              </NavLink>
            </li>
            {listMenu.map((menu) => {
              return (
                <li
                  key={menu.id}
                  className="nav-item-lv1"
                  onClick={moveSellPage}
                  data-name={menu.nameUrl}
                >
                  <NavLink
                    name={menu.nameProduct}
                    className="link"
                    to="/collection/all"
                  >
                    {menu.nameMenu}
                  </NavLink>
                  <div
                    className="icon-wrapper button-listmenu"
                    onClick={(e) => handleMenuChildren(e,menu.id, null)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <ul
                    className={
                      menu.active
                        ? "list-menu-child d-block"
                        : "list-menu-child"
                    }
                  >
                    {menu.items.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="nav-item-lv2"
                          onClick={moveSellPage}
                          data-name={item.nameUrl}
                        >
                          <Link name={item.nameProduct} className="link-lv2">
                            {item.nameItem}
                          </Link>
                          {item.items ? (
                            <div
                              className="icon-wrapper button-listmenu"
                              onClick={(e) =>
                                handleMenuChildren(e,item.id, menu.id)
                              }
                            >
                              <i className="fa-solid fa-plus"></i>
                            </div>
                          ) : null}
                          <ul
                            className={`list-menu-child-2 ${
                              item.active ? "d-block" : ""
                            }`}
                          >
                            {item.items
                              ? item.items.map((item) => {
                                  return (
                                    <li key={item.id} className="nav-item-lv3">
                                      <Link className="link-lv3">
                                        {item.nameItem}
                                      </Link>
                                    </li>
                                  );
                                })
                              : null}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
            <li className="nav-item-lv1">
              <NavLink className="link">BLOG</NavLink>
            </li>
          </ul>
          {/* end-listmoblie */}
          <div className="icon-wrapper button-search-mobile">
            <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </div>
        </div>
        <div className="logo-wrapper ">
          <img src="../imgs/logo.webp" alt="" />
        </div>
        <div className="nav-midder">
          <div className="up">
            <div className="hotline-wrapper">
              <h4 className="hotline">
                <i className="fa-solid fa-phone"></i>HOTLINE
                <a href="#">081 612 9868</a>
              </h4>
            </div>
            <div className="search-wrapper">
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
                  <NavLink className="link" to="/">
                    MENU
                  </NavLink>
                </li>
                <li
                  className="nav-item-lv1"
                  onClick={moveSellPage}
                  data-name="all"
                >
                  <NavLink className="link">SHOP</NavLink>
                  <i className="fa-solid fa-chevron-down"></i>
                  <ul className="list-menu-child">
                    <li
                      className="nav-item-lv2"
                      data-name="day-chuyen"
                      onClick={moveSellPage}
                    >
                      <Link name="necklace" className="link-lv2">
                        Dây chuyền
                      </Link>
                    </li>
                    <li
                      className="nav-item-lv2"
                      data-name="vong-tay"
                      onClick={moveSellPage}
                    >
                      <Link name="bracelet" className="link-lv2">
                        Vòng tay
                      </Link>
                    </li>
                    <li
                      className="nav-item-lv2"
                      data-name="Hoa-tai"
                      onClick={moveSellPage}
                    >
                      <Link name="eardrop" className="link-lv2">
                        Hoa tai
                      </Link>
                    </li>
                    <li
                      className="nav-item-lv2"
                      data-name="nhan"
                      onClick={moveSellPage}
                    >
                      <Link name="ring" className="link-lv2">
                        Nhẫn
                      </Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link name="" className="link-lv2">
                        Bộ trang sức
                      </Link>
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
          <ul className="list-acction-account">
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
