import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PageBanner from "../../src/components/PageBanner";
import Pagination from "../../src/components/Pagination";
import Layout from "../../src/layout/Layout";
const skinhealth = () => {
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
        `http://localhost:5000/products?sort=${sort}&page=${page}&limit=${limit}&keywords=skin`
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

  return (
    <Layout>
      <section className="shop-page rel z-1 rpt-35 pb-130 rpb-100">
        <div style={{ width: "90%", margin: "auto" }} className="">
          <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-8">
              <div className="shop-sidebar mt-50">
                {/* <div className="widget widget-search wow fadeInUp delay-0-2s">
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
                </div> */}
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Category
                  </h4>
                  <ul>
                  <li>
                      <Link href="/shop-left-sidebar">All Products</Link>{" "}
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link href="/product/skinhealth">Skin health</Link>{" "}
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link href="/product/boostimmunity">Boost Immunity</Link>{" "}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link href="/product/strongerbones">Stronger bone</Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link href="/product/goodsleep">Good sleep</Link>{" "}
                      <span>(9)</span>
                    </li>
                    <li>
                      <Link href="/product/weightmanagement">
                        Weight management
                      </Link>{" "}
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link href="/product/dailywellness">Daily Wellnesst</Link>{" "}
                      <span>(6)</span>
                    </li>
                  </ul>
                </div>

             
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Popular Tags
                  </h4>
                  <div className="tag-coulds">
                    <Link href="/shop-grid">Sleep</Link>
                    <Link href="/shop-grid">Weight</Link>
                    <Link href="/shop-grid">Wellness</Link>
                    <Link href="/shop-grid">Skin</Link>
                    <Link href="/shop-grid">Immunity</Link>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 mt-55">
              <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s"></div>

              <div className="row shop-left-sidebar-row">
                {products.length > 0 && (
                  products.map((e) => (
                    <Link key={e._id} href={`product/${e._id}`}>
                      <div
                        key={e._id}
                        style={{ cursor: "pointer" }}
                        className="col-xl-4 col-lg-6 col-md-4 col-sm-6"
                      >
                        <div className="product-item wow fadeInUp delay-0-2s">
                          <span className="offer">{e.discount}% Off</span>
                          <div className="image">
                            <img
                              style={{ height: "90%" }}
                              src={`http://localhost:5000/${e.images[0]}`}
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
                            <h5>{e.name}</h5>
                            <span className="price">
                              <del> ₹{e.mrp}</del>
                              <span> ₹{e.price}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) }
              </div>
              {products.length > 0 ? (
                <ul className="pagination flex-wrap justify-content-center pt-10">
                  <Pagination
                    paginationCls={".shop-left-sidebar-row .col-xl-4"}
                    defaultSort={4}
                  />
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default skinhealth;
