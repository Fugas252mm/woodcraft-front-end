export function Header() {
  return (
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <a href="#" class="logo">
            <img
              src="./img/Woodcraft.svg"
              alt="Woodcraft logo"
              class="logo-img"
            />
          </a>
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__item">
                <a href="#" class="menu__link">
                  Наша продукція
                </a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">
                  Конструктор замовлення
                </a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">
                  Новинки
                </a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">
                  Контакт
                </a>
              </li>
            </ul>
          </nav>

          <div class="actions-content">
            <ul class="user-actions">
              <li class="user-actions__item">
                <div class="button">
                  <a
                    href="#"
                    class="user-actions__link open_pop_up"
                    id="open_pop_up"
                  >
                    <img
                      src="../src/img/icon/user-icon.png"
                      alt="user icon"
                      class="actions__icon"
                    />
                  </a>
                </div>
                <div class="pop_up" id="pop_up">
                  <div class="pop_up_container">
                    <div class="pop_up_body" id="pop_up_body">
                      <div class="nav-button">
                        <button class="btn white-btn" id="loginBtn">
                          Sign In
                        </button>
                        <button class="btn" id="registerBtn">
                          Sign Up
                        </button>
                      </div>

                      <div class="login-container" id="login">
                        <div class="top">
                          <span>
                            Don't have an account?{" "}
                            <a href="#" id="signUpss">
                              Sign Up
                            </a>
                          </span>
                          <header class="sign-up">Login</header>
                        </div>
                        <div class="input-box">
                          <input
                            type="text"
                            class="input-field"
                            placeholder="Username or Email"
                          />
                          <i class="bx bx-user"></i>
                        </div>
                        <div class="input-box">
                          <input
                            type="password"
                            class="input-field"
                            placeholder="Password"
                          />
                          <i class="bx bx-lock-alt"></i>
                        </div>
                        <div class="input-box">
                          <input type="submit" class="submit" value="Sign In" />
                        </div>
                        <div class="two-col">
                          <div class="one">
                            <input type="checkbox" id="login-check" />
                            <label for="login-check"> Remember Me</label>
                          </div>
                          <div class="two">
                            <label>
                              <a href="#">|Forgot password?</a>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="register-container" id="register">
                        <div class="top">
                          <span>
                            Have an account?{" "}
                            <a href="#" id="loginss">
                              Login
                            </a>
                          </span>
                          <header class="sign-up">Sign Up</header>
                        </div>

                        <div class="two-forms">
                          <div class="input-box">
                            <input
                              type="text"
                              class="input-field"
                              placeholder="Firstname"
                            />
                            <i class="bx bx-user"></i>
                          </div>
                          <div class="input-box">
                            <input
                              type="text"
                              class="input-field"
                              placeholder="Lastname"
                            />
                            <i class="bx bx-user"></i>
                          </div>
                          <div class="input-box">
                            <input
                              type="text"
                              class="input-field"
                              placeholder="Email"
                            />
                            <i class="bx bx-envelope"></i>
                          </div>
                          <div class="input-box">
                            <input
                              type="password"
                              class="input-field"
                              placeholder="Password"
                            />
                            <i class="bx bx-lock-alt"></i>
                          </div>
                          <div class="input-box">
                            <input
                              type="submit"
                              class="submit"
                              value="Register"
                            />
                          </div>
                          <div class="two-col">
                            <div class="one">
                              <input type="checkbox" id="register-check" />
                              <label for="register-check"> Remember Me</label>
                            </div>
                            <div class="two">
                              <label>
                                <a href="#">|Terms & conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span class="close_pop_up" id="close_pop_up"></span>
                    </div>
                  </div>
                </div>
              </li>

              <li class="user-actions__item">
                <a href="#" class="user-actions__link">
                  <img
                    src="./img/icon/shop-icon.png"
                    alt="shop icon"
                    class="actions__icon actions__icon-shop"
                  />
                </a>
              </li>
              <li class="user-actions__item">
                <div class="search">
                  <div class="icon"></div>
                  <div class="input">
                    <input type="text" placeholder="Пошук" id="mySearch" />
                  </div>
                  <span class="clear"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
