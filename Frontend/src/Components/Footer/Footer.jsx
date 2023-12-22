import React from "react";
import email from "../../assets/email.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import i_pay from "../../assets/i_pay.png";
import g_pay from "../../assets/g_pay.png";
const Footer = () => {
  return (
    <footer className="Footer-main-container">
      <div className="container-1">
        <div className="conatiner-1-text">
          <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        </div>

        <div className="container-1-contents">
          <div className="email-con">
            <img src={email} alt="email" className="email-icon" />
            <input
              type="text"
              className="email-input"
              placeholder="Enter your email address"
            />
          </div>
          <div className="subscribe-btn-con">
            <button className="subscribe-btn">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-sub-con">
          <div className="container-2-content-1">
            <div>
              <span className=" container-logo">SHOP.CO</span>
            </div>
            <div className="desp">
              <p>
                We have clothes that suits your style and which you are proud to
                wear. From women to men.
              </p>
            </div>
            <div className="social-media-logos">
              <div className="twitter social-logo">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="facebook social-logo">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="instagram social-logo">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="github social-logo">
                <img src={github} alt="github" />
              </div>
            </div>
          </div>
          <div className="container-2-content">
            <div className="container-2-content-title">
              <span>COMPANY</span>
            </div>
            <ul className="container-2-content-elements">
              <li className="container-2-content-element">About </li>
              <li className="container-2-content-element">Features</li>
              <li className="container-2-content-element">Works</li>
              <li className="container-2-content-element">Career</li>
            </ul>
          </div>
          <div className="container-2-content ">
            <div className="container-2-content-title">
              <span>HELP</span>
            </div>

            <ul className="container-2-content-elements">
              <li className="container-2-content-element">Customer Support</li>
              <li className="container-2-content-element">Delivery Details</li>
              <li className="container-2-content-element">
                Terms & Conditions
              </li>
              <li className="container-2-content-element">Privacy Policy</li>
            </ul>
          </div>
          <div className="container-2-content">
            <div className="container-2-content-title">
              <span>FAQ</span>
            </div>

            <ul className="container-2-content-elements">
              <li className="container-2-content-element">Account </li>
              <li className="container-2-content-element">Manage Deliveries</li>
              <li className="container-2-content-element">Orders</li>
              <li className="container-2-content-element">Payments</li>
            </ul>
          </div>
          <div className="container-2-content">
            <div className="container-2-content-title">
              <span>RESOURCES</span>
            </div>

            <ul className="container-2-content-elements">
              <li className="container-2-content-element">Free eBooks</li>
              <li className="container-2-content-element">
                Development Tutorial
              </li>
              <li className="container-2-content-element">How to - Blog</li>
              <li className="container-2-content-element">Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="container-3">
          <div className="container-3-content">
            <span className="container-3-content-text">
              Shop.co © 2000-2023, All Rights Reserved
            </span>
          </div>
          <div className="payment-logos">
            <div className="visa">
              <img src={visa} alt="logo" />
            </div>
            <div className="visa">
              <img src={mastercard} alt="logo" />
            </div>
            <div className="visa">
              <img src={paypal} alt="logo" />
            </div>
            <div className="visa">
              <img src={i_pay} alt="logo" />
            </div>
            <div className="visa">
              <img src={g_pay} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
