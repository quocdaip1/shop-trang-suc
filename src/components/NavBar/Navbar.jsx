import { NavLink, Link, useLocation } from "react-router-dom";
import { useNavigate,useHref } from "react-router-dom";
import "../../style/Navbar.css";
export default function () {
  const navigate = useNavigate();

  const navigateToPageAllProduct = (event) => {
    event.preventDefault();
    navigate("/collection/all");
  };

  const navigateToPageProduct = (event) => {
    event.stopPropagation();
    const nameProduct = event.currentTarget.dataset.name;
    navigate(`/${nameProduct}`);
  };

  const showMenuMobile = (event) => {
    console.log(event)
  };

  return (
    <div className="container-fluid container-xxl position-relavtive">
      <div className="navBar d-flex justify-content-between">
        <div className="nav-responsive d-lg-none">
          <div className="icon-wrapper button-menu-mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
          <ul className="list-menu-mobile">
            <div className="box-title">Danh mục sản phẩm</div>
            <li className="nav-item-lv1">
              <NavLink className="link" to="/">
                MENU
              </NavLink>
            </li>
            <li className="nav-item-lv1">
              <NavLink
                className="link"
                to="/collection"
                onClick={navigateToPageAllProduct}
              >
                SHOP
              </NavLink>
              <i className="fa-solid fa-plus" onClick={showMenuMobile}></i>{" "}
              <ul className="list-menu-child">
                <li
                  className="nav-item-lv2"
                  data-name="dây-chuyền"
                  onClick={navigateToPageProduct}
                >
                  <Link className="link-lv2@media only screen and (max-width: 600px)">
                    Dây chuyền
                  </Link>
                </li>
                <li
                  className="nav-item-lv2"
                  data-name="Vòng-tay"
                  onClick={navigateToPageProduct}
                >
                  <Link className="link-lv2" name="day_chuyen">
                    Vòng tay
                  </Link>
                </li>
                <li
                  className="nav-item-lv2"
                  data-name="Hoa-tai"
                  onClick={navigateToPageProduct}
                >
                  <Link className="link-lv2" name="day_chuyen">
                    Hoa tai
                  </Link>
                </li>
                <li
                  className="nav-item-lv2"
                  data-name="Nhẫn"
                  onClick={navigateToPageProduct}
                >
                  <Link className="link-lv2" name="day_chuyen">
                    Nhẫn
                  </Link>
                </li>
                <li className="nav-item-lv2">
                  <Link className="link-lv2" name="day_chuyen">
                    Bộ trang sức
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item-lv1">
              <NavLink className="link">GIFTS</NavLink>
              <i className="fa-solid fa-plus"></i>{" "}
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
              <i className="fa-solid fa-plus"></i>{" "}
              <ul className="list-menu-child">
                <li className="nav-item-lv2">
                  <Link className="link-lv2">Về chúng tôi</Link>
                </li>
                <li className="nav-item-lv2">
                  <Link className="link-lv2">Chính sách </Link>
                  <i className="fa-solid fa-plus"></i>{" "}
                  <ul className="list-menu-child-2">
                    <li className="nav-item-lv3">
                      <Link className="link-lv3">Chính sách bảo hành</Link>
                    </li>
                    <li className="nav-item-lv3">
                      <Link className="link-lv3">Chính sách đổi trả</Link>
                    </li>
                    <li className="nav-item-lv3">
                      <Link className="link-lv3">Chính sách vận chuyển</Link>
                    </li>
                    <li className="nav-item-lv3">
                      <Link className="link-lv3">Chính sách bảo mật</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-lv2">
                  <Link className="link-lv2">Hỗ trợ</Link>
                  <i className="fa-solid fa-plus"></i>
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
          <div className="icon-wrapper button-search-mobile">
            <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </div>
        </div>
        <div className="logo-wrapper ">
          <img src="./imgs/logo.webp" alt="" />
        </div>
        <div className="nav-midder">
          <div className="up">
            <div className="hotline-wrapper">
              <h4 className="hotline">
                <i className="fa-solid fa-phone"></i>HOTLINE:
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
                <li className="nav-item-lv1" onClick={navigateToPageAllProduct}>
                  <NavLink className="link" to="/collection">
                    SHOP
                  </NavLink>
                  <i className="fa-solid fa-chevron-down"></i>
                  <ul className="list-menu-child">
                    <li
                      className="nav-item-lv2"
                      data-name="dây-chuyền"
                      onClick={navigateToPageProduct}
                    >
                      <Link className="link-lv2@media only screen and (max-width: 600px)">
                        Dây chuyền
                      </Link>
                    </li>
                    <li
                      className="nav-item-lv2"
                      data-name="Vòng-tay"
                      onClick={navigateToPageProduct}
                    >
                      <Link className="link-lv2" name="day_chuyen">
                        Vòng tay
                      </Link>
                    </li>
                    <li
                      className="nav-item-lv2"
                      data-name="Hoa-tai"
                      onClick={navigateToPageProduct}
                    >
                      <Link className="link-lv2" name="day_chuyen">
                        Hoa tai
                      </Link>
                    </li>
                    <li
                      className="nav-item-lv2"
                      data-name="Nhẫn"
                      onClick={navigateToPageProduct}
                    >
                      <Link className="link-lv2" name="day_chuyen">
                        Nhẫn
                      </Link>
                    </li>
                    <li className="nav-item-lv2">
                      <Link className="link-lv2" name="day_chuyen">
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
