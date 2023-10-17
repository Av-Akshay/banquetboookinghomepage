import React from "react";
import { BanquetBooking, Download } from "../images";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_about">
          <img src={BanquetBooking} alt="Banquet" />
          <p>
            BAnquetBooking is committed towards building on organization central
            on the higest standard of transparency and corporate
          </p>
          <img src={Download} alt="Download" />
        </div>

        <div className="footer_links">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>About Us</li>
            <li>Team / Career</li>
            <li>News Blog</li>
            <li>Support</li>
            <li>Frames</li>
            <li>Circle</li>
            <li>Press Kit</li>
          </ul>
        </div>

        <div className="footer_conditions">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy </li>
            <li>Guest Policy </li>
            <li>Responsible Disclosure </li>
          </ul>
        </div>

        <div className="footer_submit">
          <h3>NEWS LETTER</h3>

          <form action="#">
            <label> Subscribe To Our NewsLetter</label>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="your e-mail" />
            <input className="submit" type="Submit" defaultValue="SubScribe" />
          </form>
        </div>
      </div>

      <div className="footer_bottom_section">
        <p>
          Copyright ⓒ {new Date().getUTCFullYear()} Banquet Booking. All right
          reserved Designed by GreenusysTechnology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
