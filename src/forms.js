import "./forms.css"
import delivery from "./images/delivery-box.jpg";
export default function Forms(props) {

    return (
        <div className="forms">
            <div className="inputs">
            <input
                onChange={props.formUpdate} 
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                onChange={props.formUpdate} 
                type="text"
                name="address"
                placeholder="Address"
            />
            <button onClick={props.sendForm}>Send</button>
            </div>
            <img src={delivery} />
        </div>
    )
}