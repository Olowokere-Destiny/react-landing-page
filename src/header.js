import mark from "./images/mark.png"
import backgroundImage from "./images/header-img.jpg";

export default function Header() {

    function openMenu() {
        document.getElementById("menuBar").style.display = "block";
    }

    function closeMenu() {
        document.getElementById("menuBar").style.display = "none";
    }
    
    return (
        <div className="header" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div>
                <div className="description">
                    <div><h2 className="swift">Swift-Express <img src={mark} className="mark" /></h2></div>
                    <div className="nav-links">
                        <p>Home</p>
                        <p>Services</p>
                        <p>FAQs</p>
                        <p>About Us</p>
                    </div>
                    <div className="sign-in">SIGN IN</div>
                    <i
                        className="fa fa-ellipsis-v menu-btn"
                        onClick={openMenu}
                    >
                    </i>
                </div>          
                    <div className="menu" id="menuBar">
                    <i className="fa fa-times" onClick={closeMenu}></i>
                        <ul>
                            <li>Home</li>
                            <li>FAQs</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Sign In</li>
                        </ul>
                    </div>
                </div>

                <div className="mini-ad">
                    <h2>Fastest, safest and best delivery for your goods</h2>
                    <p>The best choice for the delivery of your package that require speed, security during delivery </p>
                </div>
        </div>
    )
}