import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../../src/components/PageBanner";
// import '../../src/components/images.js'
import { addItemToCart, addToBasket } from "../../slices/basketSlice";
import Layout from "../../src/layout/Layout";
import { productActiveTwo } from "../../src/sliderProps";
import { useRouter } from "next/router";
// import store from "../../Store";
// import '../../public/assets/css/style.css'
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [products, setProducts] = useState([]);
  const [isData, setIsData] = useState(false);
  const [isloaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [sort, setSort] = useState("name");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const router = useRouter();
  // console.log(show);
  const Id = router.query;
  // console.log(Id);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (typeof window === "object") {
    document.addEventListener("DOMContentLoaded", function () {
      alert("Finished loading");
    });
  }
  useEffect(()=>{
    let thumbnails = document.getElementsByClassName("thumbnail");
    let activeImages = document.getElementsByClassName("active");
  
    for (var i = 0; i < thumbnails.length; i++) {
    
      thumbnails[i].addEventListener("click", function () {
        if (show == true) {
          console.log(document.getElementById("featureddiv"));
          document.getElementById("featureddiv").style.display = "none";
        } else {
          if (activeImages.length > 0) {
            activeImages[0].classList.remove("active");
          }
  
          this.classList.add("active");
          document.getElementById("featured").style.display = "block";
          document.getElementById("featured").src = this.src;
        
        }
      });
    }
  
  },[])
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${Id.id}`)
      .then((response) => {
        setProducts(response.data.products);
        setIsData(true);
        // console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setIsLoaded(true);
    axios
      .get(
        `http://localhost:5000/products?sort=${sort}&page=${page}&limit=${limit}`
      )
      .then((response) => {
        setIsLoaded(false);
        setData(response.data.products);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, [sort, limit, page]);
  // console.log("products", products);

  const videoUrl = `https://www.youtube.com/embed/${products.video}?autoplay=1&mute=1`;
  useEffect(()=>{
    const youtubeVideo = document.createElement("iframe");
    youtubeVideo.src = videoUrl;
    youtubeVideo.classList = "ytdimension";
  },[])
  // console.log(youtubeVideo);
  const playvideo = () => {
    // console.log('play video')
    document.getElementById("featured").style.display = "none";
    document.getElementById("featured").style.display = "none";
    document.getElementById("featureddiv").append(youtubeVideo);
    setShow(true);
  };
  const handleaddtocart = () => {
    dispatch(addToBasket(products));
    setAdded(true);
  };
  if (!initialRenderComplete) {
    return null;
  } else {
    return (
      <Layout>
        {/* <PageBanner pageName={"Product Details"} /> */}
        <section className="product-details-area pt-50 rpt-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {isData && (
                <div id="content-wrapper">
                  <div class="column">
                    <div id="featureddiv"></div>
                    {products.images[0] ? (
                      <img
                        id="featured"
                        src={`http://localhost:5000/${products.images[0]}`}
                      />
                    ) : (
                      ""
                    )}
                    <div id="slide-wrapper">
                      <div id="slider">
                        {products.images[0] ? (
                          <img
                            class="thumbnail active"
                            src={`http://localhost:5000/${products.images[0]}`}
                          />
                        ) : (
                          ""
                        )}
                        {products.images[1] ? (
                          <img
                            class="thumbnail active"
                            src={`http://localhost:5000/${products.images[1]}`}
                          />
                        ) : (
                          ""
                        )}
                        {products.images[2] ? (
                          <img
                            class="thumbnail active"
                            src={`http://localhost:5000/${products.images[2]}`}
                          />
                        ) : (
                          ""
                        )}
                        {products.images[3] ? (
                          <img
                            class="thumbnail active"
                            src={`http://localhost:5000/${products.images[3]}`}
                          />
                        ) : (
                          ""
                        )}
                        {products.images[4] ? (
                          <img
                            class="thumbnail active"
                            src={`http://localhost:5000/${products.images[4]}`}
                          />
                        ) : (
                          ""
                        )}
                        <button
                          style={{ position: "relative" }}
                          onClick={playvideo}
                        >
                          <img
                            class="thumbnails"
                            src="/assets/images/offers/Melatonin.jpg"
                          />
                          <i
                            style={{
                              position: "absolute",
                              top: "45%",
                              left: "45%",
                            }}
                            className="fas fa-play"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-xl-5 col-lg-6">
                <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                  <div className="off-ratting mb-15">
                    <span className="off">
                      {products ? products.discount : ""} Off
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="section-title mb-20">
                    <h2>{products ? products.name : ""}</h2>
                  </div>

                  <span className="price mb-20">{products.price}</span>
                  <hr />

                  {products.stock == 0 ? (
                    <>
                      <button className="theme-btn">
                        Out Of Stock <i className="fas fa-angle-double-right" />
                      </button>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "20px",
                          marginTop: "30px",
                        }}
                      >
                        <input
                          style={{ flex: "6", height: "50px" }}
                          type="email"
                          placeholder="your email address"
                          autoComplete="email"
                          required=""
                        />
                        <button
                          style={{
                            flex: "4",
                            height: "50px",
                            background: "#76a713",
                          }}
                          className="theme-btn"
                        >
                          Notify me !{" "}
                          <i className="fas fa-angle-double-right" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={handleaddtocart}
                      type="submit"
                      className="theme-btn"
                    >
                      Add to Cart <i className="fas fa-angle-double-right" />
                    </button>
                  )}

                  <hr />
                  <ul className="category-tags pt-10">
                    <li>
                      <b>Category</b>
                      <span>:</span>
                      <a href="#">{products ? products.category : ""}</a>
                    </li>
                    <li>
                      <b>Tags</b>
                      <span>:</span>
                      <a href="#">{products.keywords}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Tab.Container defaultActiveKey={"details"}>
              <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
                <li>
                  <Nav.Link
                    eventKey={"details"}
                    href="#details"
                    data-toggle="tab"
                  >
                    Description
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    eventKey={"information"}
                    href="#information"
                    data-toggle="tab"
                  >
                    Additional information
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    eventKey={"review"}
                    href="#review"
                    data-toggle="tab"
                  >
                    Review (03)
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
                <Tab.Pane className="tab-pane" eventKey="details">
                  <p>{products ? products.description : ""}</p>
                  <ul className="list-style-one">
                    <li>
                      Boost Immunity: Loaded with lots of minerals and vitamins
                      Fitbuzz Multivitamins and Multimineral help the body to
                      combat any infection.
                    </li>
                    <li>
                      Antioxidant-Rich: The rich antioxidant properties of
                      Fitbuzz Multivitamin & Multimineral protect the body from
                      free radical damage and remove oxidative stress.
                    </li>
                    <li>
                      Quick Absorption: When dissolved in water, it is easy to
                      consume and quickly and effectively absorbed without
                      harming the stomach lining.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane className="tab-pane" eventKey="information">
                  <p>{products ? products.description : ""}</p>
                  <ul className="list-style-one mt-25 mb-25">
                    <li>
                      Boost Immunity: Loaded with lots of minerals and vitamins
                      Fitbuzz Multivitamins and Multimineral help the body to
                      combat any infection.
                    </li>
                    <li>
                      Antioxidant-Rich: The rich antioxidant properties of
                      Fitbuzz Multivitamin & Multimineral protect the body from
                      free radical damage and remove oxidative stress.
                    </li>
                    <li>
                      Quick Absorption: When dissolved in water, it is easy to
                      consume and quickly and effectively absorbed without
                      harming the stomach lining.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane className="tab-pane" eventKey="review">
                  <ul className="comment-list">
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            src="/assets/images/reviews/Screenshot_3.png"
                            alt="Author"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="name-date">
                            <h6>Rohit Negi</h6>
                            <span className="comment-date">25 Mar 2023</span>
                            <div className="ratting">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            I have been using this product for a month now and
                            have noticed a significant improvement in my energy
                            levels and digestion. The taste is pleasant, and the
                            ingredients are all-natural, which is important to
                            me. Overall, I highly recommend this product to
                            anyone looking to improve their overall health and
                            well-being.
                          </p>
                          <a href="#" className="reply-link">
                            Reply <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment-body">
                            <div className="author-thumb">
                              <img
                                src="/assets/images/reviews/Screenshot_2.png"
                                alt="Author"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="name-date">
                                <h6>Vandana Sharma</h6>
                                <span className="comment-date">
                                  12 Mar 2023
                                </span>
                                <div className="ratting">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <p>
                                I have been taking this for the past month and
                                have noticed a significant increase in my energy
                                levels and overall well-being. The combination
                                of vitamins and minerals in this supplement
                                seems to be just what my body needed. I highly
                                recommend giving Vitality Max a try for anyone
                                looking to boost their health.
                              </p>
                              <a href="#" className="reply-link">
                                Reply{" "}
                                <i className="fas fa-long-arrow-alt-right" />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-body">
                        <div className="author-thumb">
                          <img
                            src="/assets/images/reviews/Screenshot_1.png"
                            alt="Author"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="name-date">
                            <h6>Priya Malik</h6>
                            <span className="comment-date">19 Feb 2023</span>
                            <div className="ratting">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p>
                            I recently tried this product, and I must say, I was
                            impressed. Not only did it provide me with the
                            stress that I was looking for, but it also tasted
                            great. I would highly recommend this product to
                            anyone looking for a natural solution to his
                            concerns.
                          </p>
                          <a href="#" className="reply-link">
                            Reply <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </section>
        {/* Product Details End */}
        {/* Revidew Form Area Start */}
        <div className="review-form-area pt-65">
          <div className="container">
            <form
              onSubmit={(e) => e.preventDefault()}
              id="review-form"
              className="review-form wow fadeInUp delay-0-2s"
              name="comment-form"
              action="#"
              method="post"
            >
              <div className="section-title mb-15">
                <h3>Leave a Comments</h3>
              </div>
              <div className="ratting mb-40">
                <span>Your Rating</span>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="row">
                <div className="col-md-4">
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
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
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
                      placeholder="Write Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <button type="submit" className="theme-btn">
                      Send Reviews
                      <i className="fas fa-angle-double-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Revidew Form Area End */}
        {/* Related Products Start */}
        <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
          <div className="container">
            <div className="section-title text-center mb-60">
              <h3>Related Products</h3>
            </div>
            <Slider {...productActiveTwo} className="product-active-two">
              {data.map((e) => (
                <Link href={`/product/${e._id}`}>
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
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
                      <h5>
                        <Link href="/product-details">
                          {e.name ? e.name : ""}
                        </Link>
                      </h5>
                      <span className="price">
                        <span>₹{e.price}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </section>
      </Layout>
    );
  }
};
export default ProductDetails;
