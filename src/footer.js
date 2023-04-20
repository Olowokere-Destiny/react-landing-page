import "./footer.css";
export default function Footer() {
  const year = new Date().getFullYear();

    return (
      <div className="foot-container">
        <div className="footer">
          <div className="desc">
            <h5>Swift-Express <i className="fa-sharp fa-solid fa-check"></i></h5>
            <p>The best choice for the<br />delivery of your package</p>
          </div>

          <div className="links">
            <div>
              <ul>
                <b><li>Menu</li></b>
                <li>Home</li>
                <li>Services</li>
                <li>FAQs</li>
                <li>About Us</li>
              </ul>
            </div>

            <div>
              <ul>
                <b><li>Help</li></b>
                <li>How we work</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
          <div className="copyright">
            <small>&copy;{year} Olowokere Destiny</small>
          </div>
      </div>
    )
}