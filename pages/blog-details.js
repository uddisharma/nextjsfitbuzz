import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { newsSlider } from "../src/sliderProps";
const BlogDetails = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Blog Details"} /> */}
      <section className="news-details-page rel z-1 pt-50 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              <div className="blog-details-content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">Mar 25, 2022</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" />
                    <a href="#">Comments (5k)</a>
                  </li>
                </ul>
                <h3 className="title">
                  Unicode UTF8 &amp; Character Sets The Sltimate Guide Systems
                  Vegetables &amp; Foods
                </h3>
                <div className="image my-35">
                  <img src="assets/images/news/blog-details.jpg" alt="Blog" />
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  cones sequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui do lorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
                <br />
                <h4>Ultimate Digital Clean-Up Checklist Are You Prepared</h4>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam estqui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam
                </p>
                <ul className="list-style-one mt-25">
                  <li>The Complete Guide To Switching From HTTP To HTTPS</li>
                  <li>
                    Ultimate Digital Clean-Up Checklist: Are You Prepared For
                    The New Year?
                  </li>
                  <li>
                    How To Roll Out New Features Without Hurting Loyal Users
                  </li>
                  <li>Character Sets: The Ultimate Guide</li>
                  <li>How To Choose A Font — A Step-By-Step Guide!</li>
                </ul>
                <blockquote>
                  Use Google CrUX To Analyze And Compare Performance Of JS
                  Frameworks
                </blockquote>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful son agains there anyone who loves or pursues
                  or desires to obtain pain{" "}
                </p>
                <div className="tag-share mt-35 pt-20 pb-10 mb-55">
                  <div className="tags">
                    <h6>Popular Tags : </h6>
                    <Link href="/blog-grid">Organic Food</Link>
                    <Link href="/blog-grid">Vegetables</Link>
                    <Link href="/blog-grid">Fruits</Link>
                  </div>
                  <div className="social-style-one">
                    <h6>Share Projects : </h6>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-youtube" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-instagram" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="next-prev-post mb-55">
                  <div className="prev-post wow fadeInLeft delay-0-2s">
                    <div className="image">
                      <img src="assets/images/news/prev-post.jpg" alt="News" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Design And Buildsc Newsletter Mind
                        </Link>
                      </h6>
                      <span className="name">By Westfield</span>
                    </div>
                  </div>
                  <Link href="/blog-grid">
                    <a className="show-all">
                      <i className="far fa-ellipsis-h" />
                      <i className="far fa-ellipsis-h" />
                      <i className="far fa-ellipsis-h" />
                    </a>
                  </Link>
                  <div className="next-post wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img src="assets/images/news/next-post.jpg" alt="News" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Universal Principles User Experience
                        </Link>
                      </h6>
                      <span className="name">By Braswell</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="section-title mt-50 mb-40 text-center">
                  <h3>Related News</h3>
                </div>
                <Slider {...newsSlider} className="news-slider mb-60">
                  <div className="news-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/news/news-slider1.jpg"
                        alt="News"
                      />
                      <span className="date">
                        <b>25</b> July
                      </span>
                    </div>
                    <div className="content">
                      <span className="sub-title">Vegetable</span>
                      <h4>
                        <Link href="/blog-details">
                          Unicode UTF8 Character Sets They Sltimate Guide
                          Systems
                        </Link>
                      </h4>
                      <Link href="/blog-details">
                        <a className="read-more">
                          Read More <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="news-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/news/news-slider2.jpg"
                        alt="News"
                      />
                      <span className="date">
                        <b>26</b> July
                      </span>
                    </div>
                    <div className="content">
                      <span className="sub-title">Agriculture</span>
                      <h4>
                        <Link href="/blog-details">
                          Resilience, Flexibility And Immedia Working With
                          Headless
                        </Link>
                      </h4>
                      <Link href="/blog-details">
                        <a className="read-more">
                          Read More <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="news-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/news/news-slider1.jpg"
                        alt="News"
                      />
                      <span className="date">
                        <b>25</b> July
                      </span>
                    </div>
                    <div className="content">
                      <span className="sub-title">Vegetable</span>
                      <h4>
                        <Link href="/blog-details">
                          Unicode UTF8 Character Sets They Sltimate Guide
                          Systems
                        </Link>
                      </h4>
                      <Link href="/blog-details">
                        <a className="read-more">
                          Read More <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="news-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/news/news-slider2.jpg"
                        alt="News"
                      />
                      <span className="date">
                        <b>26</b> July
                      </span>
                    </div>
                    <div className="content">
                      <span className="sub-title">Agriculture</span>
                      <h4>
                        <Link href="/blog-details">
                          Resilience, Flexibility And Immedia Working With
                          Headless
                        </Link>
                      </h4>
                      <Link href="/blog-details">
                        <a className="read-more">
                          Read More <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </Slider>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="comment-form"
                  className="comment-form pt-45 wow fadeInUp delay-0-2s"
                  name="comment-form"
                  action="#"
                  method="post"
                >
                  <div className="section-title mb-35">
                    <span className="sub-title mb-15">Send Message</span>
                    <h3>Leave a Comments</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="blog-email"
                          name="blog-email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="website"
                          name="website"
                          className="form-control"
                          defaultValue=""
                          placeholder="Website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Comments"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn style-two">
                          Send Comments
                          <i className="fas fa-angle-double-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="blog-sidebar mt-65">
                <div className="widget widget-about wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/widgets/about.jpg" alt="Author" />
                  </div>
                  <h4>Somalia D. Silva</h4>
                  <span className="sub-title">CO-Founder</span>
                  <p>
                    Amet consecte adipiscing elitse doeiusmod tempor incididunt
                    labre et dolore magna aliqua lacus{" "}
                  </p>
                  <div className="social-style-one">
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-youtube" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-instagram" />
                      </a>
                    </Link>
                  </div>
                  <img
                    src="assets/images/widgets/about-bg.png"
                    alt="BG"
                    className="bg"
                  />
                </div>
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Category
                  </h4>
                  <ul>
                    <li>
                      <Link href="/blog-grid">Organic Fruits</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Fresh Vegetables</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Crisp Bread &amp; Cake</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Sea Foods</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Chiken Eggs</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Milk &amp; Meat</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Recent News
                  </h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget3.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/blog-details">
                            Design And Buildsc Newsletter Mind
                          </Link>
                        </h6>
                        <span className="name">By Westfield</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget1.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/blog-details">
                            Universal Principles User Experience
                          </Link>
                        </h6>
                        <span className="name">By Braswell</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget2.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/blog-details">
                            Roll Out New Featuc Without Hurting
                          </Link>
                        </h6>
                        <span className="name">By Mendonca</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Popular Tags
                  </h4>
                  <div className="tag-coulds">
                    <Link href="/blog-grid">Farming</Link>
                    <Link href="/blog-grid">Organic</Link>
                    <Link href="/blog-grid">Vegetables</Link>
                    <Link href="/blog-grid">Fresh Food</Link>
                    <Link href="/blog-grid">Fruits</Link>
                    <Link href="/blog-grid">Sea Foods</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
