import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";
import AvailableSlider from "../src/components/AvailableSlider";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  const [isloaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("name");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const handlesort = (e) => {
    setSort(e.target.value);
    console.log(sort);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setIsLoaded(true);
    axios
      .get(
        `http://localhost:5000/products?sort=${sort}&page=${page}&limit=${limit}`
      )
      .then((response) => {
        setIsLoaded(false);
        setProducts(response.data.products);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, [sort, limit, page]);
  // console.log(products);\
  // const [shippingtoken, setShippingToken] = useState("");
  // useEffect(() => {
  //   axios
  //     .post("https://apiv2.shiprocket.in/v1/external/auth/login", {
  //       email: "mitskart@gmail.com",
  //       password: "123456",
  //     })
  //     .then((res) => {
  //       setShippingToken(res.data.token);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // if (setShippingToken) {
  //   window.localStorage.setItem("shiprockettoken", shippingtoken);
  // }

  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-50 rpt-100">
        <div className="section-title text-center mb-10">
          {/* <span className="sub-title mb-20">
              Popular Foods and Vegetables
            </span> */}
          <h2>Shop by Categories </h2>
        </div>
        <div className="">
          {/* <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">
                  Popular Foods and Vegetables
                </span>
                <h2>Quality Fruits &amp; Vegetables</h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire
                </p>
              </div>
            </div>
          </div> */}
          <div
            style={{
              width: "90%",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
            }}
            className="category-wrap"
          >
            <div className="category-item wow fadeInUp delay-0-3s">
              <div className="icon">
                <img src="assets/images/category/skincare.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Skin health</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <img src="assets/images/category/healthy.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Boost Immunity</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-5s">
              <div className="icon">
                <img src="assets/images/category/bone.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Stronger bone</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div
              style={{ flex: 1.5 }}
              className="category-item wow fadeInUp delay-0-6s"
            >
              <div className="icon">
                <img src="assets/images/category/weight.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Weight management</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
            <div className="category-item wow fadeInUp delay-0-7s">
              <div className="icon">
                <img src="assets/images/category/wellness.png" alt="Icon" />
              </div>
              <h5>
                <Link href="/services">Daily Wellness</Link>
              </h5>
              <img src="assets/images/category/arrow.png" alt="Arrow" />
            </div>
          </div>
        </div>
      </section>

      <section className="offer-banners-area">
        <div className="section-title text-center mb-20">
          {/* <span className="sub-title mb-20">
              Popular Foods and Vegetables
            </span> */}
          <h2>Best Sellers </h2>
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            margin: "auto",
            justifyContent: "center",
          }}
          className=""
        >
          <div className="row">
            <div className="col-xl-4 col-md-6">
              {/* <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Organic Vegetables</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>*/}
              <div style={{ position: "relative" }}>
                <img src="assets/images/offers/Apple.jpg" alt="Offer Banner" />
              </div>
              <div style={{ position: "absolute", top: "65%", left: "8%" }}>
                <Link href="/shop-grid">
                  <a style={{ height: "45px" }} className="theme-btn style-two">
                    Shop Now <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              {/* <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Fresh Organic Fruits</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div> */}
              <div style={{ position: "relative" }}>
                <img
                  src="assets/images/offers/Calcium.jpg"
                  alt="Offer Banner"
                />
              </div>
              <div style={{ position: "absolute", top: "65%", left: "8%" }}>
                <Link href="/shop-grid">
                  <a style={{ height: "45px" }} className="theme-btn style-two">
                    Shop Now <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/* <div className="offer-banner-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Ripe Strawberries</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div> */}
              <div style={{ position: "relative" }}>
                <img
                  src="assets/images/offers/Melatonin.jpg"
                  alt="Offer Banner"
                />
              </div>
              <div style={{ position: "absolute", top: "65%", left: "8%" }}>
                <Link href="/shop-grid">
                  <a style={{ height: "45px" }} className="theme-btn style-two">
                    Shop Now <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}
      {/* Product Section Start */}
      <section className="product-section pt-50 rpt-70 pb-130 rpb-100">
        <div className="container-fluid">
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">
              Popular Foods and Vegetables
            </span> */}
            <h2>Quality Products </h2>
          </div>
          <Slider {...productActive} className="product-active">
            {products ? (
              products.map((e) => (
                <Link href={`/product/${e._id}`}>
                  <div
                    style={{ cursor: "pointer" }}
                    className="product-item wow fadeInUp delay-0-2s"
                  >
                    <span className="offer">{e.discount}% Off</span>
                    <div className="image">
                      <img
                        style={{ height: "170%" }}
                        src={`http://localhost:5000/${e.images[0]}`}
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      {/* <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div> */}
                      <div style={{ marginTop: "60px" }}>
                        <h5>
                          <Link href="/product-details">
                            {e.name ? e.name.slice(0, 15) + "..." : ""}
                          </Link>
                        </h5>

                        <span className="price">
                          <del>₹{e.mrp}</del>
                          <span>₹{e.price}</span>
                        </span>
                      </div>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <>
                {" "}
                <div className="product-item wow fadeInUp delay-0-3s">
                  <div className="image">
                    <img
                      src="assets/images/products/product2.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/product-details">Fresh Carrots</Link>
                    </h5>
                    <span className="price">
                      <span>49.58</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-4s">
                  <span className="offer bg-red">sale</span>
                  <div className="image">
                    <img
                      src="assets/images/products/product3.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/product-details">Organic Brocolli</Link>
                    </h5>
                    <span className="price">
                      <del>25</del>
                      <span>18</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-5s">
                  <span className="offer">20 Off</span>
                  <div className="image">
                    <img
                      src="assets/images/products/product4.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/product-details">Chiken Egg</Link>
                    </h5>
                    <span className="price">
                      <del>55</del>
                      <span>36</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="assets/images/products/product5.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/product-details">Fresh Gooseberry</Link>
                    </h5>
                    <span className="price">
                      <span>205</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-7s">
                  <span className="offer">53 Off</span>
                  <div className="image">
                    <img
                      src="assets/images/products/product6.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/product-details">Fresh Croissants</Link>
                    </h5>
                    <span className="price">
                      <del>25</del>
                      <span>18</span>
                    </span>
                  </div>
                </div>
                <div className="product-item wow fadeInUp delay-0-8s">
                  <span className="offer">25 Off</span>
                  <div className="image">
                    <img
                      src="assets/images/products/product7.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/product-details">Chiken Egg’s</Link>
                    </h5>
                    <span className="price">
                      <del>25</del>
                      <span>18</span>
                    </span>
                  </div>
                </div>
              </>
            )}
          </Slider>
        </div>
      </section>
      {/* Product Section End */}
      {/* Video Area Start */}
      <div className="video-area">
        <div className="container">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/HmQOb0tvoLk?controls=0"
          ></iframe>
          {/* <div
          
            // className=" "
            style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
          >
          
            <i className="flaticon-leaf-1" />
            <span className="video-text">Watch Videos</span>
            <a
              href="https://www.youtube.com/watch?v=HmQOb0tvoLk"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div> */}
        </div>
      </div>
      {/* Video Area End */}
      {/* Special Offer Start */}

      <section style={{}} className="special-offer bg-lighter pt-250 pb-80">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="sub-title mb-20">Bubble up with FITBUZZ</span>
            <h2>Good nutrition with healthy goals</h2>
          </div>
          <p>
            Never have a dull day when it comes to your nutrition journey with
            FITBUZZ! Our products are designed to make it easy for you to
            prioritize your health and wellness. So why wait? Get your hands on
            FITBUZZ nutrition goodies today and experience the deliciousness and
            effectiveness yourself!
          </p>
          {/* <MunfimCountdown /> */}
          <div className="count-down-btns mt-10">
            <Link href="/shop-grid">
              <a className="theme-btn">
                Shop Now <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            <Link href="/about">
              <a className="theme-btn style-two">
                About Us <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />

        <img
          style={
            {
              // height: "400px",
              // transform: "rotate(-30deg)"
            }
          }
          className="special-offer-left  wow slideInLeft delay-0-10s"
          src="assets/images/Fitbuzz/left.png"
          alt="Offer"
        />
        <img
          style={
            {
              // transform: "rotate(-30deg)"
            }
          }
          className="special-offer-right  wow slideInRight delay-0-5s"
          src="assets/images/Fitbuzz/right.png"
          alt="Offer"
        />

        {/* <div className="special-offer-left  wow fadeInUp delay-0-5s">
          <img
            style={{
              height: "400px",
              transform: "rotate(30deg)"
            }}
            src="assets/images/Fitbuzz/apple.png"
            alt="Offer"
          />
          <img
            style={{
              height: "400px",
              transform: "rotate(30deg)"
             
            }}
            src="assets/images/Fitbuzz/apple.png"
            alt="Offer"
          />
        </div>
        <div className="special-offer-right wow fadeInUp delay-0-5s">
          <img
            style={{
              height: "400px",
              transform: "rotate(-30deg)"
            }}
            src="assets/images/Fitbuzz/apple.png"
            alt="Offer"
          />
          <img
            style={{
              height: "400px",
              transform: "rotate(-30deg)",
            
            
            }}
            src="assets/images/Fitbuzz/apple.png"
            alt="Offer"
          />
        </div> */}
        {/* <img
          style={{ height: "400px", transform: "rotate(-30deg)" }}
          className="special-offer-right"
          src="assets/images/Fitbuzz/fitbuzz.png"
          alt="Offer"
        /> */}
      </section>
      {/* Special Offer End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Supports</span>
                  <h3>Get Our Quality Foods</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
      <section className="gallery-area pt-130 rpt-100">
        <PhotoGallery />
      </section>
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-50 rpt-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/Girlimage.jpg"
                  alt="Feedback"
                />
                <img
                  style={{ height: "500px", width: "600px" }}
                  className="last-image wow slideInRight delay-0-10s"
                  src="assets/images/reviews/apple.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="assets/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section pt-30 rpt-100 pb-0 rpb-40">
        <div
          style={{
            width: "90%",
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            //  backgroundColor:'#fdf4d7'
          }}
          className="row"
        >
          <div className="col-xl-4 col-md-6">
            <div
              style={{ backgroundColor: "#fdf4d7" }}
              className="about-feature-item wow fadeInUp delay-0-5s"
            >
              <span className="number">1</span>
              <div className="icon">
                {/* <i
                  style={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                  }}
                  className="flaticon-offer"
                /> */}
                <img
                  style={{ height: "90px", display: "block", margin: "auto" }}
                  src="https://cdn-icons-png.flaticon.com/512/6213/6213156.png"
                />
              </div>
              <h4 style={{ textAlign: "center" }}>
                <Link href="/service-details">Free Shipping</Link>
              </h4>
              <p style={{ color: "black", textAlign: "center" }}>
                On order above ₹ 699
              </p>
              <img
                style={{ display: "block", margin: "auto" }}
                src="assets/images/about/arrow.png"
                alt="Arrow"
              />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ backgroundColor: "#fdf4d7" }}
              className="about-feature-item wow fadeInUp delay-0-6s"
            >
              <span className="number">2</span>
              <div className="icon">
                {/* <i
                  style={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                  }}
                  className="flaticon-return-box"
                /> */}
                <img
                  style={{ height: "90px", display: "block", margin: "auto" }}
                  src="https://cdn-icons-png.flaticon.com/512/670/670910.png"
                />
              </div>
              <h4 style={{ textAlign: "center" }}>
                <Link href="/service-details" style={{ color: "white" }}>
                  Easy Return
                </Link>
              </h4>
              <p style={{ color: "black", textAlign: "center" }}>
                15 days return policy
              </p>
              <img
                style={{ display: "block", margin: "auto" }}
                src="assets/images/about/arrow.png"
                alt="Arrow"
              />
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ backgroundColor: "#fdf4d7" }}
              className="about-feature-item wow fadeInUp delay-0-7s"
            >
              <span className="number">3</span>
              <div className="icon">
                {/* <i
                  style={{
                    display: "block",
                    margin: "auto",
                    textAlign: "center",
                  }}
                  className="flaticon-delivery-truck"
                /> */}
                <img
                  style={{ height: "90px", display: "block", margin: "auto" }}
                  src="https://cdn-icons-png.flaticon.com/512/3745/3745355.png"
                />
              </div>
              <h4 style={{ textAlign: "center" }}>
                <Link href="/service-details">Secure Payments</Link>
              </h4>
              <p style={{ color: "black", textAlign: "center" }}>
                Your payment is processed securely
              </p>
              <img
                style={{ display: "block", margin: "auto" }}
                src="assets/images/about/arrow.png"
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="news-section pt-70 rpt-100 pb-0 rpb-40">
        <div className="section-title text-center mb-60">
          {/* <span className="sub-title mb-20">
              Popular Foods and Vegetables
            </span> */}
          <h2>We are Available at </h2>
        </div>
        <AvailableSlider />
      </section>
      {/* Feedback Section End */}
      {/* News Section Start */}
      <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Read Article Tips</span>
            <h2>Latest Blogs</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> Oct
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Apple Cider Vinegar</span>
                  <h4>
                    <Link href="/blog/apple-cider-vineger">
                      Mits Apple Cider Vinegar (ACV) – Uses,types, Benefits, and
                      Side Effects | Fitbuzz
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news2.jpg" alt="News" />
                  <span className="date">
                    <b>19</b> Dec
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Melatonin and L-theanine</span>
                  <h4>
                    <Link href="/blog-details">
                      Poor sleep affects Indians, with over 37% of adult Indians
                      having difficulties falling asleep, 
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news3.jpg" alt="News" />
                  <span className="date">
                    <b>11</b> Jan
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Calcium Deficiency</span>
                  <h4>
                    <Link href="/blog-details">
                      Calcium is an essential mineral that plays a critical role
                      in our body's health and well-being.
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-four.png"
            alt="Leaf"
          />
        </div>
      </section>
      {/* News Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center  py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default Index;
