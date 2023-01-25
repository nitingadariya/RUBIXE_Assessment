import Logo from "./Logo"
import Menu from "./Menu"
import style from "./page.module.css"

const Navbar = () => {
    return (
        <div id={style.nav}>
            <article>
                <div><Logo /></div>
                <div><Menu /></div>
            </article>
        </div>
    )
}
export default Navbar