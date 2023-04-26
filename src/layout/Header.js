import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { sidebarToggle } from "../utils";
import { Blog, Contact, Home, PagesDasktop, Portfolio, Shop } from "./Menus";
import MobileMenu from "./MobileMenu";
import axios from "axios";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { setuserLogin } from "../../slices/userloginSlice";
const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const UserAccount = () => {
  const user = useSelector((state) => state.user);
  // const [logout, setLogout] = useState(user.IsLogin || false);
  const logout = typeof window !== "undefined" ? false : user.IsLogin;
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(setuserLogin(false));
    location.reload();
  };
  return (
    <Fragment>
      <button onClick={() => setToggle(!toggle)} className="user">
        <i className="far fa-user-circle" />
      </button>
      {/* <button className="far fa-search" onClick={() => setToggle(!toggle)} /> */}
      {/* <div className={`${toggle ? "" : "hide"}`}>
      <span className="sub-title">35% Off Foods</span>
      </div> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        {/* {logout == false ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <Link href="/user/profile">Account</Link>
            <a
              onClick={() => {
                handlelogout();
              }}
              href="#"
            >
              Logout
            </a>
          </div>
        )} */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link href="/user/profile">Account</Link>
          <a
            onClick={() => {
              handlelogout();
            }}
            href="#"
          >
            Logout
          </a>
        </div>
      </form>
    </Fragment>
  );
};

const LoginLog = () => {
  const user = useSelector((state) => state.user);
  // const [logout, setLogout] = useState(user.IsLogin || false);
  const logout = typeof window !== "undefined" ? false : user.IsLogin;
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(setuserLogin(false));

    console.log(user);
  };
  return (
    <Fragment>
      <button onClick={() => setToggle(!toggle)} className="user">
        <i className="far fa-user-circle" />
      </button>

      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </form>
    </Fragment>
  );
};

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);
  // const [isloaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [sort, setSort] = useState("name");
  // const [limit, setLimit] = useState(3);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   setIsLoaded(true);
  //   axios
  //     .get(
  //       `http://localhost:5000/products?sort=${sort}&page=${page}&limit=${limit}`
  //     )
  //     .then((response) => {
  //       setIsLoaded(false);
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       setError(true);
  //       console.log(error);
  //     });
  // }, [sort, limit, page]);
  // console.log(products);
  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};

const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <li className="dropdown">
      <Link href="/">Home</Link>
      <Link href="/">
        <ul>
          <Home />
        </ul>
      </Link>
      {/* <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>
    <li className="dropdown">
      <Link href="/shop-left-sidebar">Shop</Link>
      {/* <Link href="/shop-left-sidebar">shop</Link>
      <ul>
        <Shop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>
    <li className="dropdown">
      <a href="#">pages</a>
      <ul>
        <PagesDasktop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    {/* <li className="dropdown">
      <a href="#">portfolio</a>
      <ul>
        <Portfolio />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    <li className="dropdown">
      <Link href="/blog-grid">blogs</Link>
      {/* <ul>
        <Blog />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>

    <Contact />
  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link href="/">
            <a>
              <img
                style={{ width: "150px", height: "40px" }}
                src="assets/images/logos/logo.png"
                alt="Logo"
                title="Logo"
              />
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  border: "2px solid black",
                }}
                src="/assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logoss"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => {
  var items = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  const [usertoken, setUserToken] = useState(false);
  useEffect(() => {
    setUserToken(user.IsLogin);
  }, []);
  const [toggle, setToggle] = useState(false);
  // console.log(items.items.length);
  var cartcount = typeof window !== "undefined" ? 0 : items.items.length;

  return (
    <header className="main-header">
      <div className="header-top-wrap bg-light-green text-white py-10">
        <div className="container-fluid">
          <div className="header-top">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="top-left">
                  <ul>
                    <li>
                      <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                      <a href="mailto:aakriti@mitskart.com">
                        aakriti@mitskart.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <b>Working Hours :</b>{" "}
                      Monday - Saturday, 10 am - 06 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="top-right text-lg-right">
                  <ul>
                    <li>
                      <i className="far fa-phone" /> <b>Call :</b>{" "}
                      <a href="callto:7814699271">7814699271</a>
                    </li>
                    <li>
                      <div className="social-style-one">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      style={{ width: "150px", height: "40px" }}
                      src="/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <Nav />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-icons">
              {/* Nav Search */}
              <div className="nav-search py-15">
                <SearchBtn />
              </div>
              <Link href="/cart">
                <button className="cart">
                  <i className="far fa-shopping-basket" />
                  {/* <span>{cartcount}</span> */}
                </button>
              </Link>
              {/* <Link href="/user/profile">
                <button className="user">
                  <i className="far fa-user-circle" />
                </button>
              </Link> */}
              {usertoken ? (
                <div
                  style={{ marginLeft: "35px" }}
                  className="nav-search py-15"
                >
                  <UserAccount />
                </div>
              ) : (
                <div
                  style={{ marginLeft: "35px" }}
                  className="nav-search py-15"
                >
                  <LoginLog />
                </div>
              )}

              <Link href="/contact">
                <a className="theme-btn">
                  Consultations <i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar" onClick={() => sidebarToggle()}>
                <button>
                  <i className="far fa-ellipsis-h" />
                  <i className="far fa-ellipsis-h" />
                  <i className="far fa-ellipsis-h" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header1 = () => {
  var items = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  const [usertoken, setUserToken] = useState(false);
  useEffect(() => {
    setUserToken(user.IsLogin);
  }, []);

  const logout = typeof window !== "undefined" ? false : user.IsLogin;
  var cartcount = typeof window !== "undefined" ? 0 : items.items.length;
  return (
    <header className="main-header menu-absolute">
      <div className="header-top-wrap bg-light-green text-white py-10">
        <div className="container-fluid">
          <div className="header-top">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="top-left">
                  <ul>
                    <li>
                      <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                      <a href="mailto:aakriti@mitskart.com">
                        aakriti@mitskart.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <b>Working Hours :</b>{" "}
                      Monday - Saturday, 10 am - 06 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="top-right text-lg-right">
                  <ul>
                    <li>
                      <i className="far fa-phone" /> <b>Call :</b>{" "}
                      <a href="callto:7814699271">7814699271</a>
                    </li>
                    <li>
                      <div className="social-style-one">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      style={{ width: "150px", height: "40px" }}
                      src="/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <Nav />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-icons">
              {/* Nav Search */}
              <div className="nav-search py-15">
                <SearchBtn />
              </div>
              <Link href="/cart">
                <button className="cart">
                  <i className="far fa-shopping-basket" />
                  {/* <span>{cartcount}</span> */}
                </button>
              </Link>
              {/* <Link href="/user/profile">
                <button className="user">
                  <i className="far fa-user-circle" />
                </button>
              </Link> */}
              {usertoken ? (
                <div
                  style={{ marginLeft: "35px" }}
                  className="nav-search py-15"
                >
                  <UserAccount />
                </div>
              ) : (
                <div
                  style={{ marginLeft: "35px" }}
                  className="nav-search py-15"
                >
                  <LoginLog />
                </div>
              )}

              <Link href="/contact">
                <a className="theme-btn">
                  Consultations <i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar" onClick={() => sidebarToggle()}>
                <button>
                  <i className="far fa-ellipsis-h" />
                  <i className="far fa-ellipsis-h" />
                  <i className="far fa-ellipsis-h" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
const Header2 = () => {
  var items = useSelector((state) => state.basket);
  var cartcount = typeof window !== "undefined" ? 0 : items.items.length;
  return (
    <header className="main-header header-two">
      <div className="header-top-wrap">
        <div className="container">
          <div className="header-top bg-light-green text-white py-10">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="top-left">
                  <ul>
                    <li>
                      <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                      <a href="mailto:aakriti@mitskart.com">
                        aakriti@mitskart.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="top-right text-lg-right">
                  <ul>
                    <li>
                      <i className="far fa-phone" /> <b>Call :</b>{" "}
                      <a href="callto:7814699271">7814699271</a>
                    </li>
                    <li>
                      <div className="social-style-one">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container rel clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                    <img
                      src="assets/images/logos/logo-white.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <Nav />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-icons">
              {/* Nav Search */}
              <div className="nav-search py-15">
                <button className="far fa-search" />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="hide"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton far fa-search"
                  />
                </form>
              </div>
              <button className="cart">
                <i className="far fa-shopping-basket" />
              </button>
              {/* menu sidbar */}
              <div className="menu-sidebar" onClick={() => sidebarToggle()}>
                <button>
                  <i className="far fa-ellipsis-h" />
                  <i className="far fa-ellipsis-h" />
                  <i className="far fa-ellipsis-h" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
const Header3 = () => {
  var items = useSelector((state) => state.basket);
  var cartcount = typeof window !== "undefined" ? 0 : items.items.length;
  return (
    <header className="main-header header-three menu-absolute">
      <div className="header-top-wrap bgc-primary py-10">
        <div className="container-fluid">
          <div className="header-top px-0">
            <ul>
              <li>25% OFF Upcoming Product</li>
              <li>100% Fresh &amp; natural foods</li>
              <li>free shipping over $99</li>
              <li>money back guarantee</li>
              <li>cash on delivery</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-middle py-15">
        <div className="container-fluid">
          <div className="header-middle-inner">
            <div className="menu-middle-left">
              <select name="currentcy" id="currentcy">
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EURO">EURO</option>
              </select>

              <select name="language" id="language">
                <option value="English">English</option>
                <option value="Bengali">Bengali</option>
                <option value="Arabic">Arabic</option>
              </select>

              <div className="follower">
                <i className="fab fa-facebook" />
                <a href="#">250k+ Followers</a>
              </div>
            </div>
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo-two.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            {/* Menu Button */}
            <div className="menu-icons">
              {/* Nav Search */}
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="nav-search"
              >
                <input
                  type="text"
                  placeholder="Search here"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
              <button className="cart">
                <i className="far fa-shopping-basket" />
                {/* <span>{cartcount}</span> */}
              </button>
              <Link href="/user/profile">
                <button className="user">
                  <i className="far fa-user-circle" />
                </button>
              </Link>
              <button className="heart">
                <i className="far fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper px-0">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <Nav />
              {/* Main Menu End*/}
            </div>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
