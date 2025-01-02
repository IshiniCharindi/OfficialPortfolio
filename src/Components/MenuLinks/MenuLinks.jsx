import { Link } from "react-router-dom";

const MenuLinks = (props) => {
    return(
        <div>
            <Link  to={props.src}>{props.text}</Link>
        </div>
    )
}

export default MenuLinks;