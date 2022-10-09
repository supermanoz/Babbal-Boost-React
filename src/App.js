
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import './components/FontawesomeIcons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ReachCalc from './components/ReachCalc';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function App() {
  useEffect(()=>{
    Aos.init({});
  });
  return (
  <div className="App">
  <body>
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-lg-between">

      <a href="index.php"><img src={require("./assets/img/logo/logo.png")} width="60"/></a>&nbsp;
      <h1 className="logo me-auto me-lg-0"><a href="index.php">Babal Boost<span>.</span></a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#analyze">Analyze</a></li>
          <li className="dropdown"><a href="#services"><span>Services</span><FontAwesomeIcon icon="chevron-down"/></a>
            <ul>
              <li><a href="">Post Boost</a></li>
              <li><a href="">Game Topup</a></li>
              <li><a href="">Gift Card</a></li>
              <li><a href="">OTT Platform</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="" className="get-started-btn scrollto">Boost Now</a>

    </div>
  </header>

  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>Digital Marketing<span>.</span></h1>
          <small style={{ color:'#A2EEF2' }}>In Nepal, For Nepal</small>
          <h2>Facebook, Instagram Posts Boosting at rate as low as Rs. 149 and many more.</h2>
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <FontAwesomeIcon icon="rocket"/>
            <h3><a href="">Posts Boosting</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <FontAwesomeIcon icon="coins"/>
            <h3><a href="">Games Topup</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <FontAwesomeIcon icon="credit-card"/>
            <h3><a href="">Gift Cards</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <FontAwesomeIcon icon="play-circle" style={{color:'#ffffeb',fontSize: '1.8em'}}/>
            <h3><a href="">OTT Platform</a></h3>
          </div>
        </div>
      </div>

    </div>
  </section>

  <main id="main">

    {/* About Section */}
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="row">
          <div className="col-lg-5 order-1 order-lg-2 mx-4" data-aos="fade-left" data-aos-delay="100">
            <img src={require('./assets/img/about.jpg')}className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0 order-2 order-lg-1 content mx-4" data-aos="fade-right" data-aos-delay="100">
            <h3>Your business is growing but not fast enough. </h3>
            <br/>
            <p className="fst-italic">
              You struggle to find a way to capture every last lead and sale available online. As a result, you feel frustrated and stuck.You know there are better solutions. The competition is passing you by, executing the most up-to-the-minute marketing strategies for far more leads, and far more sales.It’s time to go beyond your in-house or vendor-driven marketing to “capture it all.”
            </p>
            <p>Here, in Babal-Boost, we believe no stones should be left unturned. Since 2018, our vision has been to serve as a powerful extension of your own marketing department, with no overhead or long-term contract, managed by our team of experts delivering you digital supremacy.</p>
              <p>That vision has become a reality. It is the reason why more senior leaders of mid-sized firms choose Babal-Boost as their outsourced strategic marketing team for unprecedented power to grow and capture all available opportunities for leads and sales.</p>
              <p style={{color:'#006992'}}><em><i className="ri-check-double-line"></i> Business Owners Love Us, Marketing Officers Love Us And So Will You!</em></p>
            </div>
          </div>
        </div>
    </section>

    {/* Feature Section */}
    <section id="analyze" className="features">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Analytical Tool &amp; Pro Tips</h2>
        </div>
        <div className="row">
          <div className="col-lg-8" data-aos="fade-right">
            <div className="section-title"><p>Reach Calculator</p></div>
            <div className="container-fluid padding">
              <div className="row padding">
                <div className="col">
                  <ReachCalc/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="100">
            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
              <FontAwesomeIcon icon="video" className="icon"/>
              <h4>Increase the Ad Duration</h4>
              <p>Ads that run for at least 4 days tend to get better results.</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <FontAwesomeIcon icon="cube" className="icon"/>
              <h4>Choose Target Group Wisely</h4>
              <p>You can't sell a wedding gown to a 60-years-old grandpa.  </p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
             <FontAwesomeIcon icon="shield" className="icon"/>
              <h4>Focus on Quality</h4>
              <p>Deliver quality to your products so that you earn some loyal customers.</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <FontAwesomeIcon icon="money-bill" className="icon"/>
              <h4>Offer at Lower Price</h4>
              <p>A lower price product tends to attract more customers and hence will compensate for itself.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* CTA Section */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3 style={{textShadow:'1px 1px 15px #C3B2AF'}}>Users Want To Talk About Your Brand, Give Them A Reason</h3>
          <p> The man who stops advertising to save money is like the man who stops the clock to save time.<br/>Think smart, act smarter, be smartest.</p>
          <a className="cta-btn" href="">Reach Customers</a>
        </div>

      </div>
    </section>

    {/* Service Section */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon="rocket"/></div>
              <h4><a href="">Posts Boosting</a></h4>
              <p>We do boosting of google, facebook or instagram posts at the lowest possible rate.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon="gamepad"/></div>
              <h4><a href="">Games Topup</a></h4>
              <p>Free fire topup, PUBG mobile UC topup, Mobile Legends Diamond Topup and many more.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon="credit-card"/></div>
              <h4><a href="">Gift Cards</a></h4>
              <p>Fortnite V-Bucks, Razer Gold, iTunes Gift Cards, Steam Gift Cards, Google Play Gift Cards etc. </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><FontAwesomeIcon icon="play-circle" style={{color:'black',fontSize:'1.8em'}}/></div>
              <h4><a href="">Over-The-Top Platforms</a></h4>
              <p>Netflix, Amazon Prime Video, Hulu, Apple TV+, Disney Plus, HBO Now, Peacock, iTunes, Spotify and other accounts available at best prices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  {/* Count Section */}
  <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Best At What We Do</h2>
        </div>
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
            <div className="content d-flex flex-column justify-content-center">
              <h3>100% Satisfaction Guaranteed</h3>
              <p>
                We do not seek a one-time-customer. We believe in quality and work ethics to meet our client's expectations at rate one thinks, is <em>too good to be true</em>.
              </p>
              <div className="row">
                <div className="col-md-12 d-md-flex align-items-md-stretch">
                  <div className="count-box"  data-aos="zoom-in" data-aos-delay="150">
                    <FontAwesomeIcon icon="clock" className="icon"/>
                    <span>3</span>
                    <p><strong>Years of experience,</strong> our team has been working for more than three years in digital marketing field.</p>
                  </div>
                </div>

                <div className="col-md-12 d-md-flex align-items-md-stretch">
                  <div className="count-box"  data-aos="zoom-in" data-aos-delay="150">
                    <FontAwesomeIcon icon="smile" className="icon"/>
                    <span>40</span>
                    <p><strong>Happy Clients,</strong> plus all non-business owners with whom we're getting oppurtunities to work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
  <section id="contact" className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="200">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div>
          <iframe style={{border:'0', width: '100%', height: '170px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7064.276573140893!2d85.3336259!3d27.7130163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1971009588ad%3A0x413d72dbcbe936fe!2sSiphal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1635143255472!5m2!1sen!2snp" frameborder="0" allowfullscreen loading="lazy"></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <span className="icon"><FontAwesomeIcon icon="location"/></span>
                <h4>Location:</h4>
                <p>Chabahil, Siphal, Kathmandu 44600, Nepal</p>
              </div>

              <div className="email">
                <a href="mailto:babalboost@gmail.com">
                <span className="icon"><FontAwesomeIcon icon="envelope"/></span>
                  <h4>Email:</h4>
                  <p>babalboost@gmail.com</p>
                </a>
              </div>

              <div className="phone">
                <a href="tel:9823009659">
                <span className="icon"><FontAwesomeIcon icon="phone"/></span>
                  <h4>Call:</h4>
                  <p>+977 982-300-9659</p>
                </a>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form  style={{color:'#757575'}} action="#" method="post">
              <div className="form-group m-2">
                  <input type="text" name="name" className="form-control" placeholder="Name" required/>
              </div>
              <div className="form-group m-2">
                  <input type="email" name="email" className="form-control" placeholder="Email" required/>
              </div>
              <div className="form-group m-2">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group m-2">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="padding m-2"><button type="submit" className="btn btn-md btn-primary">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>

    </main>

  {/* Footer Section */}
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Babbal Boost<span>.</span></h3>
              <p>
                Chabahil, Siphal <br/>
                Kathmandu 44600, Nepal<br/>
                <strong>Phone:</strong> <a href="tel:9823009659">+977 982-300-9659</a><br/>
                <strong>Email:</strong> <a href="mailto:babalboost@gmail.com">babalboost@gmail.com</a><br/>
              </p>
              <div className="social-links mt-3">
                <a href="https://www.facebook.com/babalboost" className="facebook"><FaFacebook/></a>
                <a href="https://www.instagram.com/babal_boost" className="instagram"><FaInstagram/></a>
                <a href="" className="whatsapp"><FaWhatsapp/></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="#hero">Home</a></li>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="#about">About us</a></li>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="#services">Services</a></li>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="">Admin</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="">Facebook, Instagram, Google Boosting</a></li>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="">Gift Cards</a></li>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="">Games Topup</a></li>
              <li><FontAwesomeIcon icon="chevron-right"/> <a href="">OTT Platform</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter to get updated.</p>
            <form action="#" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; <strong><span>Babal Boost</span></strong>.
        <br/>All Rights Reserved
      </div>
    </div>
  </footer>




    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="assets/vendor/purecounter/purecounter.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  </body>
  </div>
  );
}

export default App;
