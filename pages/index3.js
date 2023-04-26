import Link from "next/link";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Slider from "react-slick";
import { HomeSlider3 } from "../src/components/HomeSlider";
import { clientLogo } from "../src/sliderProps";

const TrendyProducts = dynamic(
  () => import("../src/components/istotope/TrendyProducts"),
  {
    ssr: false,
  }
);
const PopularProducts = dynamic(
  () => import("../src/components/istotope/PopularProducts"),
  {
    ssr: false,
  }
);
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);

const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <section className="slider-section slider-three">
        <div className="slider-three-active">
          <HomeSlider3 />
        </div>
      </section>
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <section className="feature-three-area pb-40">
        <div className="container-fluid">
          <div className="feature-three-inner">
            <div className="feature-two-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-delivery-man" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/service-details">Free Shipping</Link>
                </h4>
                <p>Over $90 For Free Shipping</p>
              </div>
            </div>
            <div className="feature-two-item wow fadeInDown delay-0-4s">
              <div className="icon">
                <i className="flaticon-offer" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/service-details">Return Policy</Link>
                </h4>
                <p>Dedicated Support</p>
              </div>
            </div>
            <div className="feature-two-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon-24-hours" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/service-details">Online Support</Link>
                </h4>
                <p>24/7 Hours Online Support</p>
              </div>
            </div>
            <div className="feature-two-item wow fadeInDown delay-0-8s">
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
              <div className="content">
                <h4>
                  <Link href="/service-details">Smart Discount</Link>
                </h4>
                <p>Every Product We Provide Discount</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Area End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-two pb-20">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg4.jpg)",
                }}
              >
                <div className="content mb-0 ml-auto">
                  <span className="sub-title">100% Fresh</span>
                  <h3>Vegetables</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg5.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">25% Off</span>
                  <h3>Fast Delivery</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg6.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">100% Fresh</span>
                  <h3>Organic Fruits</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}
      {/* Product Category Area Start */}
      <section className="product-category-area pb-30">
        <div className="container-fluid">
          <div className="product-category-inner">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product28.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Organic Fruits</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-3s">
                  <div className="image">
                    <img
                      src="assets/images/products/product29.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Vegetables</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/products/product30.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Fresh Nuts</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-5s">
                  <div className="image">
                    <img
                      src="assets/images/products/product31.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Tomatoes</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="assets/images/products/product32.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Chicken Eggs</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-7s">
                  <div className="image">
                    <img
                      src="assets/images/products/product33.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Fresh Orange</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Category Area End */}
      {/* Shop Area Start */}
      <section className="shop-area-three rel z-1 py-50">
        <div className="container-fluid">
          <PopularProducts />
        </div>
      </section>
      {/* Shop Area End */}
      {/* Special Offer Start */}
      <section className="special-offer-three">
        <div className="container-fluid">
          <div
            className="special-offer-three-inner rel z-1 bgs-cover py-80"
            style={{
              backgroundImage: "url(assets/images/offers/offer-bg.jpg)",
            }}
          >
            <div className="special-offer-content text-center wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-20">35% Off for Fruits</span>
                <h2>Special Deal Of This Week</h2>
              </div>
              <p>
                On the other hand we denounce with righteous indignation and
                dislike men who are beguiled and demoralized by the charms
              </p>
              <MunfimCountdown />
              <div className="count-down-btns mt-10">
                <Link href="/shop-grid">
                  <a className="theme-btn">
                    Shop Now <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/about">
                  <a className="theme-btn style-three">
                    use code <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <img
              className="offer-bg"
              src="assets/images/offers/special-offer-bg-two.png"
              alt="Offer BG"
            />
          </div>
        </div>
      </section>
      {/* Special Offer End */}
      {/* Shop Area Start */}
      <section className="shop-area-four rel z-1 pt-80 pb-50">
        <div className="container-fluid">
          <TrendyProducts />
        </div>
      </section>
      {/* Shop Area End */}
      {/* Client Logo Area Start */}
      <div className="client-logo-area-two text-center mb-80">
        <div className="container-fluid">
          <div className="bg-lighter-two overflow-hidden rel z-1 px-sm-4 px-2">
            <Slider {...clientLogo} className="client-logo-wrap py-60">
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-1.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-2.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-3.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-4.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-5.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-6.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-1.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-2.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-3.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-4.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-5.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-6.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
            </Slider>
            <div className="client-logo-shapes">
              <img
                className="shape-one"
                src="assets/images/shapes/cl-shape-two1.png"
                alt="Shape"
              />
              <img
                className="shape-two"
                src="assets/images/shapes/cl-shape-two2.png"
                alt="Shape"
              />
              <img
                className="shape-three"
                src="assets/images/shapes/cl-shape-two3.png"
                alt="Shape"
              />
              <img
                className="shape-four"
                src="assets/images/shapes/cl-shape-two4.png"
                alt="Shape"
              />
              <img
                className="shape-five"
                src="assets/images/shapes/cl-shape-two5.png"
                alt="Shape"
              />
              <img
                className="shape-six"
                src="assets/images/shapes/cl-shape-two6.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index3;
