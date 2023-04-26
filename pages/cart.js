import Link from "next/link";
import { useEffect, useState } from "react";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
// import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { useMemo } from "react";
import axios from "axios";
import {
  removeFromBasket,
  plusItem,
  minusItem,
  setGetTotals,
} from "../slices/basketSlice";

import selectItems from "../slices/basketSlice";
const CartPage = () => {
  var items = useSelector((state) => state.basket);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  const dispatch = useDispatch();
  const [coupons, setCoupons] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [matchedcoupons, setMatchedCoupons] = useState("");
  const [toggle, setToggle] = useState(false);
  let cCode;
  if (typeof window !== 'undefined') {
    cCode=localStorage.getItem("couponCode");
  }
  // let cCode=localStorage.getItem("couponCode");
  let subTotal = useMemo(() => {
    return items.items.reduce(
      (total, val) => total + val.quantity * val.price,
      0
    );
  }, [items.items]);
  {
    cCode ? (subTotal = subTotal - cCode) : (subTotal = subTotal);
  }
  useEffect(() => {
    dispatch(
      setGetTotals(
        items.items.reduce((total, val) => total + val.quantity * val.price, 0)
      )
    );
    axios
      .get("http://localhost:5000/coupons")
      .then((res) => {
        setCoupons(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(coupons);
  const applyCoupon = () => {
    const applied = document.getElementById("coupon").value;
    console.log(applied);
    if (applied == "") {
      alert("Please enter coupon code");
    } else if (!coupons.find((e) => e.code == applied)) {
      alert("CouponCode is Invalid");
    } else if (coupons.find(({ code }) => code == applied)) {
      setMatchedCoupons(applied);
      setToggle(true);
    } else {
      alert("Something went wrong");
    }
  };
  for (var i = 0; i < coupons.length; i++) {
    if (coupons[i].code == matchedcoupons) {
      window.localStorage.setItem("couponCode", coupons[i].discount);
 
      document.getElementById("coupon").value = "";
      dispatch(setGetTotals(subTotal - coupons[i].discount));
   
    }
  }
  if (!initialRenderComplete) {
    return null;
  } else {
    return (
      <Layout>
        <div className="cart-area py-50 rpy-100">
          <div className="container">
            <div className="cart-item-wrap mb-35 wow fadeInUp delay-0-2s">
              {items.items.map((cart, i) => (
                <div className="cart-single-item" key={i}>
                  <button
                    type="button"
                    className="close"
                    onClick={() => dispatch(removeFromBasket(cart))}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="cart-img">
                    <img
                      src={`http://localhost:5000/${cart.images[0]}`}
                      alt="Product Image"
                    />
                  </div>
                  <h5 className="product-name">
                    {cart.name ? cart.name.slice(0, 20) : ""}
                  </h5>
                  <span className="product-price">{cart.price}</span>
                  <div className="quantity-input">
                    <button
                      className="quantity-down"
                      onClick={() => {
                        if (cart.quantity > 1) {
                          dispatch(minusItem(i));
                        }
                      }}
                    >
                      -
                    </button>
                    <input
                      className="quantity"
                      type="text"
                      defaultValue={cart.quantity}
                      value={cart.quantity}
                      name="quantity"
                    />
                    <button
                      className="quantity-up"
                      onClick={() => {
                        if (cart.quantity > 0) {
                          dispatch(plusItem(i));
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span className="product-total-price">
                    {cart.quantity * cart.price}
                  </span>
                </div>
              ))}
              {items.items.length <= 0 && (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <h2>Your Cart is Empty</h2>
                  <div style={{ display: "block", margin: "auto" }}>
                    <img
                      style={{
                        width: "150px",
                        height: "150px",
                        marginTop: "20px",
                      }}
                      src="assets/images/shopping-cart.png"
                      alt="Authro"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="row text-center text-lg-left align-items-center wow fadeInUp delay-0-2s">
              <div className="col-lg-6">
                <div className="discount-wrapper rmb-30">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="d-sm-flex justify-content-center justify-content-lg-start"
                  >
                    <input
                      type="text"
                      id="coupon"
                      placeholder="Coupon Code"
                      required=""
                    />
                    <button
                      className="theme-btn flex-none"
                      onClick={applyCoupon}
                    >
                      apply Coupon <i className="fas fa-angle-double-right" />
                    </button>
                    {/* <button className="theme-btn flex-none" onClick={applyCoupon}>
                    apply Coupon <i className="fas fa-angle-double-right" />
                  </button> */}
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="update-shopping text-lg-right">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      shopping <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  {/* <Link href="/shop-grid">
                  <a className="theme-btn">
                    update cart <i className="fas fa-angle-double-right" />
                  </a>
                </Link> */}
                </div>
              </div>
            </div>
            <div className="payment-cart-total pt-25 wow fadeInUp delay-0-2s">
              <div className="row justify-content-end">
                <div className="col-lg-5">
                  <div className="shoping-cart-total mt-45">
                    <h4 className="form-title m-25">Cart Totals</h4>
                    <table>
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td className="sub-total-price">
                            {items.items.reduce(
                              (val, item) => val + item.price * item.quantity,
                              0
                            )}
                            {/* {subTotal} */}
                          </td>
                        </tr>
                        <tr>
                          <td>Discount</td>
                          <td className="shipping-price">0</td>
                        </tr>
                        {/* <tr>
                        <td>Vat</td>
                        <td>₹{vat}</td>
                      </tr> */}
                        <tr>
                          <td>
                            <strong>Order Total</strong>
                          </td>
                          <td>
                            <strong className="total-price">
                              {/* {items.items.reduce(
                              (val, item) => val + item.price * item.quantity,
                              0
                            ) - 60} */}
                              {subTotal}
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Link href="/checkout">
                      <a className="theme-btn style-two mt-25 w-100">
                        Proceed to checkout
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Area End */}
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
  }
};
export default CartPage;
