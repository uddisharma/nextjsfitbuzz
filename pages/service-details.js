import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import Layout from "../src/layout/Layout";
const ServiceDetails = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Service Details"} /> */}
      <section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              <div className="service-details-content">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details1.jpg"
                    alt="Service"
                  />
                </div>
                <h3>Fruits &amp; Vegetables</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quasi atecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit asnatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <div className="row py-20">
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            Agriculture
                            <br /> Foods
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            {" "}
                            Vegetables
                            <br /> &amp; Fruits
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            {" "}
                            Farming
                            <br /> Products
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-5s">
                      <div className="icon">
                        <i className="flaticon-return-box" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            {" "}
                            Crisp Bread
                            <br /> &amp; Cake’s
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <h4>Healthy and Testy Foods</h4>
                <p>
                  Zemo enim ipsam voluptatem quia voluptas sit asnatur aut odit
                  aut fugit sed sequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam estquis
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                  sed quia non numquam eius tempora incidunt ut labore et dolore
                  magnam aliquam quaerat voluptatem.
                </p>
                <ul className="list-style-two pt-10">
                  <li>Agriculture &amp; Foods</li>
                  <li>Organic Fruits &amp; Vegetables</li>
                  <li>Crispe Bread &amp; Cakes</li>
                </ul>
                <div className="image pt-50 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details2.jpg"
                    alt="Service"
                  />
                </div>
                <h4>Why Need Organic Foods</h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moments blinded desire that they cannot
                  foresee the pain and trouble that are bound to ensueand equal
                  blame longs to those who fail in their duty through weakness{" "}
                </p>
                <blockquote>
                  Quis autem veleu mure reprehenderit quin voluptate velit esse
                  quam nihil molestiae consequatur illum dolorem eum fugiat quo
                  voluptas nulla pariatur
                </blockquote>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="service-sidebar mt-65">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Service Category"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Service Category</h4>
                  <ul>
                    <li>
                      <Link href="/service-details">Agriculture</Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        Fruits &amp; Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        Crispe Bread &amp; Cakes
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        Chiken Meat &amp; Eggs
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">Farming Products</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <div className="cta-widget-content text-white">
                    <span className="sub-title my-10">Contact Us</span>
                    <h2>Need any Helps</h2>
                    <img src="assets/images/shapes/wave-white.png" alt="Wave" />
                    <br />
                    <Link href="/contact">
                      <a className="theme-btn style-three bg-white mt-30">
                        Contact Us <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                    <img
                      className="bg"
                      src="assets/images/widgets/cta-widget.png"
                      alt="Flower"
                    />
                  </div>
                </div>
                <div className="widget widget-btns wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Download Now</h4>
                  <Link href="/contact">
                    <a className="theme-btn mb-10">
                      Download Pdf <i className="far fa-file-pdf" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="theme-btn style-two">
                      Download Doc <i className="far fa-file-word" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Section End */}
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
      {/* Video Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section py-130 rpy-100">
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
      {/* Feedback Section End */}
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
    </Layout>
  );
};
export default ServiceDetails;
