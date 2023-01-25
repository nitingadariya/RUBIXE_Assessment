import { Link } from "react-router-dom"
import style from "./page.module.css"
const Menu = () => {
    return (
        <ol id={style.MenuBlock}>
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link>SERVICE</Link></li>
            <li><Link>PRODUCT</Link></li>
            <li><Link>AI INTERNSHIP</Link></li>
            <li><Link>CAREER</Link></li>
            <li><Link>BLOG</Link></li>
            <li><Link>ABOUT</Link></li>
            <li><Link>CONTACT US</Link></li>
        </ol>
    )
}
export default Menu