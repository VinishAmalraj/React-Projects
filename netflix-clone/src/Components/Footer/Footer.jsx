import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer-Contect">
        <p>
          Questions? Call <a href="tel:+000-000-000-0000">000-000-000-0000</a>
        </p>
        <div className="Foot-details">
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="">FAQ</a>
                </td>
                <td>
                  <a href="">Help Centre</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">Terms of Use</a>
                </td>
                <td>
                  <a href="">Privacy</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">Cookie Preference</a>
                </td>
                <td>
                  <a href="">Corporate Information</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Footer;
