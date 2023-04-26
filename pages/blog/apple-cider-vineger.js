import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/layout/Layout";
import { newsSlider } from "../../src/sliderProps";
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
                    <a href="#">Oct 25, 2022</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" />
                    <a href="#">Comments (8)</a>
                  </li>
                </ul>
                <h3 className="title">
                  Mits Apple Cider Vinegar (ACV) – Uses,types, Benefits, and
                  Side Effects | Fitbuzz
                </h3>
                <div className="image my-35">
                  <img src="/assets/images/news/blog-details.jpg" alt="Blog" />
                </div>
                <p>
                  Apple Cider Vinegar (ACV) is a type of vinegar made from
                  fermented apples. It has been around for centuries and is used
                  in cooking, as a natural remedy, and even as a beauty product.
                  But how exactly is ACV made? We will explore the process of
                  making this popular vinegar. The process begins with crushing
                  apples to extract the juice. The juice is then combined with
                  bacteria and yeast which ferments it into alcohol. This
                  alcohol is then further fermented by acetic acid-forming
                  bacteria which turns it into vinegar. The resulting liquid is
                  then pasteurised and filtered to remove any impurities before
                  being bottled up as Apple Cider Vinegar. Being a natural
                  source of antioxidants Apple Cider Vinegar (ACV) improves
                  digestion, and helps with weight loss. It can also be used in
                  cooking and cleaning due to its acidic nature. With its many
                  uses and potential health benefits, Apple Cider Vinegar is
                  becoming increasingly popular among health-conscious people.
                </p>
                <br />
                <h4>What Are the Different Types of Apple Cider Vinegar?</h4>
                <p>
                  Fermentation is the process by which apple cider vinegar is
                  produced. After a few weeks, the apple juice turns into
                  alcohol after the yeast in the mixture breaks down the sugar
                  in the apple juice. The alcohol is then converted to acetic
                  acid by natural microorganisms, giving vinegar its acetic
                  flavour and odour.
                </p>
                <ul className="list-style-one mt-25">
                  <li>
                    Raw apple cider vinegar is made from unpasteurized apples
                    and contains the “mother” or the natural bacteria that give
                    it its unique flavour.{" "}
                  </li>
                  <li>
                    Filtered apple cider vinegar is pasteurised to remove any
                    bacteria or sediment that can cause spoilage.
                  </li>
                  <li>
                    This apple cider vinegar is created from apples cultivated
                    organically, without the use of synthetic pesticides or
                    fertilisers. Typically, the bottle will have the word
                    "organic" on it.
                  </li>
                  {/* <li>Character Sets: The Ultimate Guide</li>
                  <li>How To Choose A Font — A Step-By-Step Guide!</li> */}
                </ul>
                {/* <blockquote>
                  Use Google CrUX To Analyze And Compare Performance Of JS
                  Frameworks
                </blockquote> */}
                <h4>Is Vinegar Good for Your Health or not?</h4>
                <p>
                  Antioxidants can also be found in some types of vinegar. More
                  antioxidants are still present in vinegar the darker the
                  vinegar is. Darker vinegars are typically less refined than
                  lighter varieties since the liquid's beneficial components
                  affect both flavour and colour.{" "}
                </p>
                <h4>Vinegar is an amazing source of</h4>
                <h5>Potassium</h5>
                <h5>Magnesium</h5>
                <h5>Calcium Phosphorus</h5>
                <h5>Help in weight loss :</h5>
                <p>
                  Apple Cider Vinegar (ACV) has been used for centuries as a
                  natural remedy for various health conditions, but recently it
                  has become popular for its potential to help with weight loss.
                  ACV is made by fermenting apples and is known to contain
                  several beneficial compounds such as acetic acid, which can
                  help reduce fat storage and appetite. In addition, ACV may
                  also help improve digestion and reduce water retention, which
                  can further aid in weight loss. According to one study,
                  drinking apple cider vinegar twice a day helped people in
                  losing a few extra pounds. However, the study was small and
                  brief, following 39 patients for 12 weeks.
                </p>{" "}
                <hr />
                <h5>Lower blood Sugar :</h5>
                <p>
                  {" "}
                  Apple cider vinegar has long been used to regulate blood sugar
                  levels. It is thought to work by slowing down the rate at
                  which food is digested, which helps keep blood sugar levels
                  stable. Recent studies have shown that apple cider vinegar can
                  help lower blood sugar levels in both pre-diabetic and
                  diabetic individuals. Remember that apple cider vinegar is not
                  a substitute for diabetes drugs or a healthy lifestyle. But it
                  should be safe to add to your treatment plan.{" "}
                </p>
                <hr />
                <h4>How Do You Use Apple Cider Vinegar?</h4>
                <p>
                  Apple cider vinegar's acetic acid may help reduce swelling and
                  enhance skin health, including minimising the visibility of
                  scars and acne. Acne and other skin disorders have been
                  treated naturally using apple cider vinegar.
                </p>
                <h5>Apple cider vinegar's skin benefits include:</h5>
                <p>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    -PH balance:
                  </span>{" "}
                  Because apple cider vinegar is acidic, it can assist in
                  balancing the skin's pH. As a pH imbalance can contribute to
                  the development of acne, this can be especially helpful for
                  people with acne-prone skin. Apple cider vinegar can help
                  balance the pH of the body when consumed, just as it can for
                  the skin when used topically.
                </p>
                <h5>Apple cider vinegar's skin benefits include:</h5>
                <p>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    -Fight Germs:
                  </span>{" "}
                  Apple cider vinegar has antibacterial qualities that can aid
                  in fighting against bacteria that cause skin problems like
                  acne.
                </p>
                <hr />
                <h5>Uses of apple cider vinegar for weight loss</h5>
                <p>
                  Apple cider vinegar has been used for centuries as a home
                  remedy for a variety of ailments. In recent years, it has
                  become popular as an aid to weight loss due to its ability to
                  suppress appetite, reduce water retention and increase
                  metabolism. Studies have shown that the acetic acid in apple
                  cider vinegar can help with weight loss by increasing satiety,
                  boosting metabolism. It is also believed to help with
                  digestion and detoxification, which can further contribute to
                  weight loss. While there are many potential benefits
                  associated with using apple cider vinegar for weight loss, it
                  is important to consult your doctor before starting any new
                  health regimen.
                </p>
                <hr />
                <h5>What Are the Risks of Apple Cider Vinegar?</h5>
                <p>
                  ACV consumption in excess or over an extended period of time
                  may also cause serious adverse effects, such as:
                </p>
                <p>
                  -Because vinegar is acidic, it can cause damage to the throat
                  or oesophagus. interaction with some drugs, including insulin
                  and diuretics, which can result in low potassium levels and
                  dangerously low blood sugar levels.
                </p>
                <p>
                  -Delayed gastric emptying, a disorder in which the stomach
                  empties its contents slowly (gastroparesis).
                </p>
                <p>
                  -When potassium levels in the body drop too low, a potentially
                  fatal condition known as hypokalemia develops.
                </p>
                <div className="tag-share mt-35 pt-20 pb-10 mb-55">
                  <div className="tags">
                    <h6>Popular Tags : </h6>
                    <Link href="/blog/apple-cider-vineger">
                      Mits Apple Cider Vinegar
                    </Link>
                    <Link href="/blog/melatonin-l-theanine">
                      melatonin and L-theanine
                    </Link>
                    <Link href="/blog/calcium-deficiency">
                      Calcium Deficiency
                    </Link>
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
                {/* <div className="next-prev-post mb-55">
                  <div className="prev-post wow fadeInLeft delay-0-2s">
                    <div className="image">
                      <img
                        src="../assets/images/news/prev-post.jpg"
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
                </div> */}
                {/* <hr /> */}
                {/* <div className="section-title mt-50 mb-40 text-center">
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
                </Slider> */}
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
                    <img src="/assets/images/widgets/about.jpg" alt="Author" />
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
                    src="/assets/images/widgets/about-bg.png"
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
                      <Link href="/blog-grid">Mits Apple Cider Vinegar</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Calcium Deficiency </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">melatonin and L-theanine</Link>
                    </li>
                    {/* <li>
                      <Link href="/blog-grid">Sea Foods</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Chiken Eggs</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Milk &amp; Meat</Link>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="widget widget-news wow fadeInUp delay-0-2s">
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
                </div> */}
                {/* <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
