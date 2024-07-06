import React, { useEffect, useState } from "react";
import logo from '../../img/Woodcraft.svg';
import shopIcon from '../../img/icon/shop-icon.png'
import userIcon from '../../img/icon/user-icon.png'
import NavBar, { NavListItem } from "../navbar";



const TEMP_HARDCODED_NAVLIST: NavListItem[] = [
  {
    path: "/products",
    label: "Hаша продукція"
  },
  {
    path: "/constructor",
    label: "Конструктор замовлення"
  },
  {
    path: "/new",
    label: "Новинки"
  },
  {
    path: "/contacts",
    label: "Контакти"
  }
]

function Header() {
  const [navList, setNaVList] = useState(TEMP_HARDCODED_NAVLIST);

  // TODO::
  useEffect(() => {
    //const navList = await axios.get(...)
    //setNavList
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="logo">
            <img
              src={logo}
              alt="Woodcraft logo"
              className="logo-img"
            />
          </a>

          <NavBar navList={navList} />

          <div className="actions-content">
            <ul className="user-actions">
              <li className="user-actions__item">
                <div className="button">
                  <a
                    href="#"
                    className="user-actions__link open_pop_up"
                    id="open_pop_up"
                  >
                    <img
                      src={userIcon}
                      alt="user icon"
                      className="actions__icon"
                    />
                  </a>
                </div>
                <div className="pop_up" id="pop_up">
                  <div className="pop_up_container">
                    <div className="pop_up_body" id="pop_up_body">
                      <div className="nav-button">
                        <button className="btn white-btn" id="loginBtn">
                          Sign In
                        </button>
                        <button className="btn" id="registerBtn">
                          Sign Up
                        </button>
                      </div>

                      <div className="login-container" id="login">
                        <div className="top">
                          <span>
                            Don't have an account?{" "}
                            <a href="#" id="signUpss">
                              Sign Up
                            </a>
                          </span>
                          <header className="sign-up">Login</header>
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            className="input-field"
                            placeholder="Username or Email"
                          />
                          <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                          <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                          />
                          <i className="bx bx-lock-alt"></i>
                        </div>
                        <div className="input-box">
                          <input type="submit" className="submit" value="Sign In" />
                        </div>
                        <div className="two-col">
                          <div className="one">
                            <input type="checkbox" id="login-check" />
                            <label htmlFor="login-check"> Remember Me</label>
                          </div>
                          <div className="two">
                            <label>
                              <a href="#">|Forgot password?</a>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="register-container" id="register">
                        <div className="top">
                          <span>
                            Have an account?{" "}
                            <a href="#" id="loginss">
                              Login
                            </a>
                          </span>
                          <header className="sign-up">Sign Up</header>
                        </div>

                        <div className="two-forms">
                          <div className="input-box">
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Firstname"
                            />
                            <i className="bx bx-user"></i>
                          </div>
                          <div className="input-box">
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Lastname"
                            />
                            <i className="bx bx-user"></i>
                          </div>
                          <div className="input-box">
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Email"
                            />
                            <i className="bx bx-envelope"></i>
                          </div>
                          <div className="input-box">
                            <input
                              type="password"
                              className="input-field"
                              placeholder="Password"
                            />
                            <i className="bx bx-lock-alt"></i>
                          </div>
                          <div className="input-box">
                            <input
                              type="submit"
                              className="submit"
                              value="Register"
                            />
                          </div>
                          <div className="two-col">
                            <div className="one">
                              <input type="checkbox" id="register-check" />
                              <label htmlFor="register-check"> Remember Me</label>
                            </div>
                            <div className="two">
                              <label>
                                <a href="#">|Terms & conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="close_pop_up" id="close_pop_up"></span>
                    </div>
                  </div>
                </div>
              </li>

              <li className="user-actions__item">
                <a href="#" className="user-actions__link">
                  <img
                    src={shopIcon}
                    alt="shop icon"
                    className="actions__icon actions__icon-shop"
                  />
                </a>
              </li>

              <li className="user-actions__item">
                <div className="search">
                  <div className="icon"></div>
                  <div className="input">
                    <input type="text" placeholder="Пошук" id="mySearch" />
                  </div>
                  <span className="clear"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
