import "./subfooter.css";
import box from "./images/delivered-box.jpg";

export default function SubFooter() {
    return (
        <div 
            className="sub-footer"
            style={{
                backgroundImage: `url(${box})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <h3>Grow your business with us</h3>
                <p>With us, let's grow your business so that more people can be reached</p>

        </div>
    )
}