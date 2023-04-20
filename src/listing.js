
export default function Listing(props) {
    return (
        <div className="single-list">
            <img src={props.img} alt="image" />
            <h4>{props.name}</h4>
            <p>{props.time}</p>
        </div>
    )
}