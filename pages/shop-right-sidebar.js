import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
const ShopRightSidebar = () => {
  return (
    <Layout>
      <PageBanner pageName={"Shop Right Sidebar"} />
      <section className="shop-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 mt-55">
              <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s">
                <div className="products-dropdown">
                  <select>
                    <option value="default" selected="">
                      Best Selling
                    </option>
                    <option value="new">Latest</option>
                    <option value="old">Oldest</option>
                    <option value="hight-to-low">High To Low</option>
                    <option value="low-to-high">Low To High</option>
                  </select>
                </div>
                <ul className="grid-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-border-all" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row shop-right-sidebar-row">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product1.png"
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
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
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/products/product8.png"
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
                        <Link href="/product-details">Oragic Orange</Link>
                      </h5>
                      <span className="price">
                        <span>85</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <div className="image">
                      <img
                        src="assets/images/products/product9.png"
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
                        <Link href="/product-details">Fresh Croissants </Link>
                      </h5>
                      <span className="price">
                        <span>299</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product10.png"
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/products/product11.png"
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
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer bg-red">sale</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product12.png"
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
                </div>
              </div>
              <ul className="pagination flex-wrap justify-content-center pt-10">
                <Pagination
                  paginationCls={".shop-right-sidebar-row .col-xl-4"}
                  defaultSort={6}
                />
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-8">
              <div className="shop-sidebar mt-65">
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
                      <Link href="/shop-grid">Organic Fruits</Link>{" "}
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Fresh Vegetables</Link>{" "}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Crisp Bread &amp; Cake</Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Sea Foods</Link> <span>(9)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Chiken Eggs</Link>{" "}
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">Milk &amp; Meat</Link>{" "}
                      <span>(6)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Filter By Pricing
                  </h4>
                  <ul>
                    <li>
                      <Link href="/shop-grid">$05 - $10</Link>{" "}
                      <span>(159)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">$12 - $25</Link>{" "}
                      <span>(240)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">$50 - $100</Link>{" "}
                      <span>(183)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">$120 - $300</Link>{" "}
                      <span>(324)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">$500 - $1000</Link>{" "}
                      <span>(95)</span>
                    </li>
                    <li>
                      <Link href="/shop-grid">$1050 - $1500</Link>{" "}
                      <span>(289)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-products wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Best Seller
                  </h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product1.png"
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
                          <Link href="/product-details">Orange Juice</Link>
                        </h5>
                        <span className="price">29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product2.png"
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
                          <Link href="/product-details">Orange Fruits</Link>
                        </h5>
                        <span className="price">29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product3.png"
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
                          <Link href="/product-details">Fresh Broccoli</Link>
                        </h5>
                        <span className="price">29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product4.png"
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
                          <Link href="/product-details">Bread Grains</Link>
                        </h5>
                        <span className="price">43.58</span>
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
                    <Link href="/shop-grid">Farming</Link>
                    <Link href="/shop-grid">Organic</Link>
                    <Link href="/shop-grid">Vegetables</Link>
                    <Link href="/shop-grid">Fresh Food</Link>
                    <Link href="/shop-grid">Fruits</Link>
                    <Link href="/shop-grid">Sea Foods</Link>
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
export default ShopRightSidebar;
