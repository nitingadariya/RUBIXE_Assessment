import style from "./page.module.css"
import img from "./FullLogo.png"
const Logo = () => {
    return (
        <div id={style.img}>
            <img src={img} alt="Rubixe Logo"></img>
        </div>
    )
}
export default Logo