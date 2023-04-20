import "./deliv-type.css";
import Products from "./products";
import Listing from "./listing";

export default function DelivTypes() {
    const prod = Products.map(item => {
        return <Listing
            key={item.id}
            name={item.Name}
            time={item.time}
            img={item.image}
        />
    })

    return (
        <div className="deliv-types">
            <h3>Products we ship</h3>
            <div className="products-wrap">
                {prod}
            </div>
        </div>
    )
}