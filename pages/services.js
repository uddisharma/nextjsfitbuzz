import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import Layout from "../src/layout/Layout";
const Services = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Services"} /> */}
      <section className="who-we-are rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">Who We Are</span>
                  <h2>The Best Organic Foods Provider in Worlds</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus volupta accusantium
                  doloreue laudantium totam rem aperiam{" "}
                  <mark>eaquesa quae abillo inventore</mark> veritas architecto
                  beatae vitae dicta sunt explicabo voluptatem
                </p>
                <ul className="list-style-two pt-10 pb-45">
                  <li>Agriculture &amp; Foods</li>
                  <li>Organic Fruits &amp; Vegetables</li>
                  <li>Crispe Bread &amp; Cakes</li>
                </ul>
                <Link href="/about">
                  <a className="theme-btn style-two">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="who-we-are-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/who-we-are.png"
                  alt="Who We Are"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="who-we-are-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/who-we-are-1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/team/team-profile-bg.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Who We Are End */}
      {/* What We Provide Section Start */}
      <section className="what-we-provide-two rel z-1 pt-130 rpt-100 pb-115 rpb-55">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">What We Provide</span>
            <h2>Amazing Food Services</h2>
          </div>
          <div className="row justify-content-between align-items-center">
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
            <div className="col-xl-5 col-md-4">
              <div className="what-we-provide-images rmt-10 rmb-55 pr-0 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/services/what-we-provide-2.png"
                  alt="Service"
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
      {/* Client Logo Section Start */}
      <div className="client-logo-section-two rel z-2 text-center bg-light-green py-60">
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
      {/* Team Profile Section Start */}
      <section className="team-profile rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-65 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/team/team-profile-2.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Skills Experience</span>
                  <h2>We Are Professional &amp; Experience For Farming</h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis natus voluptatem accusantiu dolore
                  mque laudantium totam rem aperiam eaue abillo inventor
                  veritatis architecto beatae vitae dicta sunt explicabo epsam
                </p>
                <div className="circle-counter">
                  <div className="team-skill-item">
                    <ProgressBar value={76} color="#76a713" />
                    <h4>Agriculture and Farming</h4>
                  </div>
                  <div className="team-skill-item">
                    <ProgressBar value={83} extraCls={"two"} color="#ff7800" />
                    <h4>Vegetables and Fruits</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="team-profile-bg"
          src="assets/images/team/team-profile-bg.png"
          alt="bg"
        />
      </section>
      {/* Team Profile Section End */}
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
      {/* Feedback Section Start */}
      <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="assets/images/reviews/feedback-right.png"
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
    </Layout>
  );
};
export default Services;
