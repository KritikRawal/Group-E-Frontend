import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Household_logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={3} mdCol={1} smCol={1} gap={30}>
          <div>
            <div className="footer__title">About us</div>
            <p className="footer__logo">
              <Link to="/">
                <img src={logo} alt="#" style={{ width: "80%" }} />
              </Link>
            </p>
            <p className="footer__content">
              A complete Household solution for you and your loved ones.
              
            </p>
          </div>

          <div >
            <div className="footer__title">CONTACT US</div>
            <div className="footer__content" style={{ marginBottom: "2rem" }}>
              <p className="footer__content__info">
                <i class="bx bx-map"></i>
                <span>Kathmandu, Nepal</span>
              </p>
              <a className="footer__content__info" href="...">
                <i class="bx bx-phone"></i>
                <span>01-556678</span>
              </a>
              <a
                className="footer__content__info"
                href="mailto:Abc123@donga.edu.vn"
              >
                <i class="bx bx-mail-send"></i>
                <span>furni123@gmail.com</span>
              </a>

              <p className="footer__content__info">
                <i class="bx bx-time-five"></i>
                <span>Opens Monday to Friday</span>
              </p>
            </div>

            <div className="footer__icon__info">
              <div className="icon_facebook">
                <a href="https://www.facebook.com/">
                  
                  <button>
                    <i class="bx bxl-facebook-circle"></i>
                  </button>
                </a>
              </div>
              <a href="https://www.twitter.com/">
                <button>
                  <i class="bx bxl-twitter"></i>
                </button>
              </a>
              <a href="https://www.instagram.com/">
                <button>
                  <i class="bx bxl-instagram"></i>
                </button>
              </a>
              <a href="https://www.youtube.com/">
                <button>
                  <i class="bx bxl-youtube"></i>
                </button>
              </a>
            </div>
          </div>

          <div>
            <div className="footer__title">FAQs</div>
            <div className="footer__content"></div>
            <h4>1. How long does it take for delivery?</h4>
            <h4>2. How can i track my order?</h4>
            <h4>3. What methods of payment are accepted?</h4>
            <h4>4. What is the return policy</h4>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
