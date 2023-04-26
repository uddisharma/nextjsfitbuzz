import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactUs = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Contact Us"} />{" "} */}
      <section className="contact-info-area rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="section-title contact-title mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Get in Touch</span>
            <h3>Need Consultations ?</h3>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/contact/icon1.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <span>57 Main Street, 2nd Block 3rd Floor, New York</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <img src="assets/images/contact/icon2.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Email Us</h4>
                  <a href="mailto:organicfarm@mail.net">organicfarm@mail.net</a>
                  <br />
                  <a href="mailto:support@info.com">support@info.com</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/contact/icon3.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Phone Us</h4>
                  <a href="callto:+000(111)345678">+000 (111) 345 678</a>
                  <br />
                  <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="leafs"
            src="assets/images/shapes/contact-leafs.png"
            alt="Leafs"
          />
          <img
            className="pumpkin"
            src="assets/images/shapes/pumpkin.png"
            alt="pumpkin"
          />
        </div>
      </section>
      {/* Contact Info End */}
      {/* Contact From Start */}
      <section className="contact-form-area rel z-1 pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="contactForm"
                className="contact-form rmb-65 wow fadeInLeft delay-0-2s"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="section-title contact-title mb-55">
                  <span className="sub-title mb-15">Contact With Us</span>
                  <h3>Send Us Message</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Full Name"
                        required=""
                        data-error="Please enter your name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        defaultValue=""
                        placeholder="Phone Number"
                        required=""
                        data-error="Please enter your Phone Number"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Email Address"
                        required=""
                        data-error="Please enter your Adderss"
                      />
                      <div className="help-block with-errors" />
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
                        data-error="Please enter your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn style-two">
                        Send Message
                        <i className="fas fa-angle-double-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInRight delay-0-4s">
                <img
                  src="/assets/images/contactus.png"
                  alt="Contact From"
                />
                <img
                style={{opacity:"0.3"}}
                  className="bg"
                  src="assets/images/contact/contact-right-bg.png"
                  alt="Contact From BG"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="leaf"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="shape"
            src="assets/images/shapes/contact-shape.png"
            alt="Shape"
          />
          <img
            className="two-leaf"
            src="assets/images/shapes/two-lear.png"
            alt="Leaf"
          />
        </div>
      </section>
    </Layout>
  );
};
export default ContactUs;
