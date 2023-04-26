import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import { HomeSlider2 } from "../src/components/HomeSlider";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { categoryActive, productActiveTwo } from "../src/sliderProps";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index2 = () => {
  return (
    <Layout header={2}>
      <section
        className="slider-section slider-two"
        style={{ background: "url(assets/images/slider/slider-two-bg.jpg)" }}
      >
        <div className="slider-two-active">
          <HomeSlider2 />
        </div>
        <div className="slide-shapes">
          <img
            className="leaf-one"
            src="assets/images/slider/leaf-3.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/slider/leaf-2.png"
            alt="Leaf"
          />
        </div>
      </section>
      {/* Slider Section End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-left.jpg"
                  alt="About"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Why Choose Us</span>
                  <h2>Special Care For Our Every Food &amp; Vegetable Lover</h2>
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike mens who are so beguiled and demoralized by the charms
                  of pleasur of the moment so blinded by desire that they cannot
                  foresee the pain and trouble
                </p>
                <Link href="/about">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <div className="about-features mt-70">
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-6s">
                        <span className="number">1</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>
                        <h4>
                          <Link href="/service-details">Discount Options</Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-7s">
                        <span className="number">2</span>
                        <div className="icon">
                          <i className="flaticon-return-box" />
                        </div>
                        <h4>
                          <Link href="/service-details">
                            Best Return Policy
                          </Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-8s">
                        <span className="number">3</span>
                        <div className="icon">
                          <i className="flaticon-24-hours" />
                        </div>
                        <h4>
                          <Link href="/service-details">Online Support</Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* About Section End */}
      {/* Category Section Start */}
      <section className="category-section-two pt-100 rpt-70 pb-20">
        <div className="container">
          <div className="row align-items-end pb-35">
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
          </div>
          <Slider {...categoryActive} className="category-active">
            <div className="category-item-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/category/category1.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Orange</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-3s">
              <div className="image">
                <img
                  src="assets/images/category/category2.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Red Tomato</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/category/category3.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Bomb Corn</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-5s">
              <div className="image">
                <img
                  src="assets/images/category/category4.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Green Lemon</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/category/category5.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Beetroot</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-7s">
              <div className="image">
                <img
                  src="assets/images/category/category6.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Sugar pea</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-8s">
              <div className="image">
                <img
                  src="assets/images/category/category1.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Orange</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-9s">
              <div className="image">
                <img
                  src="assets/images/category/category2.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Red Tomato</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/category/category3.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Bomb Corn</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-3s">
              <div className="image">
                <img
                  src="assets/images/category/category4.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Green Lemon</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/category/category5.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Beetroot</Link>
              </h5>
            </div>
            <div className="category-item-two wow fadeInUp delay-0-5s">
              <div className="image">
                <img
                  src="assets/images/category/category6.png"
                  alt="Category"
                />
              </div>
              <h5>
                <Link href="/service-details">Sugar pea</Link>
              </h5>
            </div>
          </Slider>
        </div>
      </section>
      {/* Category Section End */}
      {/* Image Section Start */}
      <div className="client-top-image">
        <img
          className="w-100"
          src="assets/images/background/client-top.png"
          alt="Client Top"
        />
      </div>
      {/* Image Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
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
      {/* Client Logo Section End */}
      {/* Product Section Start */}
      <section className="product-section-two rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Popular Products</span>
            <h2>Best Foods For Family</h2>
          </div>
          <Slider {...productActiveTwo} className="product-active-two">
            <div className="product-item wow fadeInUp delay-0-2s">
              <span className="offer">53 Off</span>
              <div className="image">
                <img src="assets/images/products/product1.png" alt="Product" />
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
            <div className="product-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/products/product2.png" alt="Product" />
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
            <div className="product-item wow fadeInUp delay-0-6s">
              <span className="offer bg-red">sale</span>
              <div className="image">
                <img src="assets/images/products/product3.png" alt="Product" />
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
            <div className="product-item wow fadeInUp delay-0-8s">
              <span className="offer">20 Off</span>
              <div className="image">
                <img src="assets/images/products/product4.png" alt="Product" />
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
            <div className="product-item wow fadeInUp delay-1-0s">
              <div className="image">
                <img src="assets/images/products/product5.png" alt="Product" />
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
          </Slider>
        </div>
        <div className="product-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/product-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/product-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Product Section End */}
      {/* About Section Start */}
      <section className="about-section-three rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <span className="sub-title mb-20">About Company</span>
                  <h2>Organic &amp; Helathy Foods Provider Farming</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Agriculture &amp; Foods
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Vegetables &amp; Fruits
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolore mque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo enim epsam{" "}
                </p>
                <div className="about-btn-number pt-5">
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <a href="callto:+012(345)678" className="number">
                    <i className="far fa-phone" /> <b>+012 (345) 678</b>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-three.png"
                  alt="About"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-three.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg1.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Organic Vegetables</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg2.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Fresh Organic Fruits</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item color-three wow fadeInUp delay-0-6s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg3.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Ripe Strawberries</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
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
      {/* Team Area Start */}
      <section className="team-area pt-100 rpt-70 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section>
      {/* Team Area End */}
      {/* Special Offer Start */}
      <section
        className="special-offer-two bgs-cover rel z-1 py-100 rpt-80"
        style={{
          backgroundImage: "url(assets/images/background/special-offer-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="special-offer-left text-center rmb-35 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/offers/special-offer-left.png"
                  alt="Offer"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="special-offer-content text-center wow fadeInUp delay-0-4s">
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
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      use code <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="shape-one"
          src="assets/images/shapes/special-offer1.png"
          alt="Shape"
        />
        <img
          className="shape-two"
          src="assets/images/shapes/special-offer2.png"
          alt="Shape"
        />
      </section>
      {/* Special Offer End */}
      {/* What We Provide Section Start */}
      <section className="what-we-provide rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">What We Provide</span>
            <h2>Amazing Food Services</h2>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-4">
              <div className="what-we-provide-left wow fadeInUp delay-0-2s">
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon1.png" alt="Icon" />
                  </div>
                  <h4>
                    <Link href="/service-details">Healthy Food</Link>
                  </h4>
                  <p>On the other hand we denouce with righteous indignation</p>
                </div>
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon2.png" alt="Icon" />
                  </div>
                  <h4>
                    <Link href="/service-details">Fresh Vegetables</Link>
                  </h4>
                  <p>On the other hand we denouce with righteous indignation</p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-4 align-self-center">
              <div className="what-we-provide-images rmt-10 rmb-55 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/services/what-we-provide.png"
                  alt="Service"
                />
                <img
                  className="offer"
                  src="assets/images/services/offer.png"
                  alt="Offer"
                />
                <img
                  className="bg"
                  src="assets/images/services/service-center-bg.png"
                  alt="Backgroound"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="what-we-provide-right wow fadeInUp delay-0-6s">
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon3.png" alt="Icon" />
                  </div>
                  <h4>
                    <Link href="/service-details">Organic Fruits</Link>
                  </h4>
                  <p>On the other hand we denouce with righteous indignation</p>
                </div>
                <div className="ww-provide-item">
                  <div className="icon">
                    <img src="assets/images/services/icon4.png" alt="Icon" />
                  </div>
                  <h4>
                    <Link href="/service-details">Natural Products</Link>
                  </h4>
                  <p>On the other hand we denouce with righteous indignation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ww-provide-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/ww-provide1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/ww-provide2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/ww-provide3.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* What We Provide Section End */}
      {/* Gallery Area Start */}
      <section className="gallery-area-two pt-130 rpt-60">
        <PhotoGallery />
      </section>
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-100 rpt-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Customer Reviews</span>
            <h2>Valuable Customer’s Feedback</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section>
      {/* Feedback Section End */}
      {/* News Section Start */}
      <section className="news-section-two pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-8">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Read Article Tips</span>
                <h2>Latest News &amp; Blog</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-right">
              <div className="more-news-btn mb-25">
                <Link href="/blog-grid">
                  <a className="theme-btn style-two">
                    View More News <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
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
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
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
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
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
      </section>
      {/* News Section End */}
      {/* Video Area Start */}
      <div className="cta-video-area">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div
              className="video-cta-inner content-part text-white overlay wow fadeInUp delay-0-2s"
              style={{
                backgroundImage: "url(assets/images/video/cta-video-left.jpg)",
              }}
            >
              <div className="content">
                <div className="section-title mb-30">
                  <span className="sub-title mb-20">Need Any Supports</span>
                  <h2>Get Our Quality Foods</h2>
                </div>
                <Link href="/contact">
                  <a className="theme-btn style-two">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="video-cta-inner video-part text-white overlay wow fadeInUp delay-0-4s"
              style={{
                backgroundImage: "url(assets/images/video/cta-video-right.jpg)",
              }}
            >
              <div className="content">
                <i className="flaticon-leaf-1" />
                <span className="video-text">Watch Videos</span>
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index2;
