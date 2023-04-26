import ClientLogoSlider from "../src/components/ClientLogoSlider";
import Counter from "../src/components/Counter";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import Layout from "../src/layout/Layout";
const Farmers = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"Expert Farmers"} /> */}
      <section className="team-page-area pt-50 rpt-100 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section>
      {/* Team Area End */}
      {/* Counter Area Start */}
      <div className="counter-area rel z-2 bg-light-green text-white pt-60 pb-25">
        <div className="container">
          <div className="counter-wrap">
            <div className="counter-item">
              <span
                className="count-text k-plus"
                data-speed={3000}
                data-stop={35}
              >
                <Counter end={35} />
              </span>
              <span>Saticfied Customer</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text k-plus"
                data-speed={3000}
                data-stop={48}
              >
                <Counter end={48} />
              </span>
              <span>Sale Products</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={23}
              >
                <Counter end={23} />
              </span>
              <span>Years Experience</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={67}
              >
                <Counter end={67} />
              </span>
              <span>Team Members</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={38}
              >
                <Counter end={38} />
              </span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area End */}
      {/* Team Profile Section Start */}
      <section className="team-profile rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-65 wow fadeInLeft delay-0-2s">
                <img src="assets/images/team/team-profile.jpg" alt="Profile" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
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
                    <ProgressBar color={"#76a713"} value={"76"} />
                    <h4>Agriculture and Farming</h4>
                  </div>
                  <div className="team-skill-item">
                    <ProgressBar
                      color={"#ff7800"}
                      value={"83"}
                      extraCls={"two"}
                    />
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
      {/* Feedback Section Start */}
      <section className="feedback-section pt-130 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">Customer Reviews</span>
            <h2>Valuable Customer’s Feedback</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
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
export default Farmers;
