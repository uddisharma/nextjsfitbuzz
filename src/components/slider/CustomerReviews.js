import { Fragment, useState } from "react";
import Slider from "react-slick";
const CustomerReviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const props = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };
  return (
    <Fragment>
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title mb-50">
          <span className="sub-title mb-20">Customer Reviews</span>
          <h2>Valuable {`Customer’s`} Feedback </h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          style={{ backgroundSize: `${slideIndex}% 100%` }}
        >
          <span className="slider__label sr-only">50% completed</span>
        </div>

        <Slider {...props} className="feedback-active mt-20">
          <div className="feedback-item">
            <p>
            Fitbuzz apple cider vinegar effervescent tablets have been a game changer for my digestive health! The fizziness makes them easy to take and it helped with bloating and indigestion, I've noticed increased energy levels and improved skin complexion reducing cravings for sweets and maintaining my body weight. everyone should try this amazing product.

            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/Screenshot_1.png" alt="Authro" />
              <div className="title">
                <h4>Sakshi Sharma-  
</h4>
                {/* <span>CEO &amp; Founder</span> */}
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
            I've noticed a positive impact on my bone health since starting to take these effervescent tablets. The combination of calcium and vitamin D2 is crucial for bone strength, and these tablets make it easy to ensure I'm getting enough of both nutrients. Highly recommend them to anyone looking to support their bone health.

            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/Screenshot_3.png" alt="Authro" />
              <div className="title">
                <h4>Arsav Sood</h4>
                {/* <span>Co-Founder</span> */}
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
            The Fitbuzz melatonin-effervescent tablets are a game-changer for my sleep routine it dissolves quickly, taste great, and help me fall asleep faster and stay asleep throughout the night. I love how convenient and effective it is. I highly recommend these Fitbuzz melatonin-effervescent tablets

            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/Screenshot_2.png" alt="Authro" />
              <div className="title">
                <h4>Ruhi Chawla- 
</h4>
                {/* <span>CEO &amp; Founder</span> */}
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};
export default CustomerReviews;
