import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
const BlogGrid = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Blog Grid"} /> */}
      <section className="news-page-section rel z-1 py-50 rpy-100">
        <div className="container">
          <div className="row justify-content-center blog-grid">
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
                    <b>28</b> July
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
                    <b>30</b> July
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
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news4.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
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
                  <img src="assets/images/news/news5.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
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
                  <img src="assets/images/news/news6.jpg" alt="News" />
                  <span className="date">
                    <b>09</b> Sep
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
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news7.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
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
                  <img src="assets/images/news/news8.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
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
                  <img src="assets/images/news/news9.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Sep
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
          <ul className="pagination justify-content-center flex-wrap">
            <Pagination
              paginationCls={".blog-grid .col-xl-4"}
              defaultSort={6}
            />
          </ul>
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
            className="leaf-left"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="litchi"
            src="assets/images/shapes/litchi.png"
            alt="Litchi"
          />
        </div>
      </section>
    </Layout>
  );
};
export default BlogGrid;
