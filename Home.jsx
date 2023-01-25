import style from "./page.module.css"
import img from "./logo.png"
const Home = () => {
    return (
        <div id={style.homebox}>
            <div id={style.firstbox}>
                <article>
                    <div>
                        <div id={style.firsttext}>
                            <img src={img} alt="Rubixe" />
                            <h1>TECH</h1>
                            <h2><span>FOR</span> TEENS</h2>
                        </div>
                        <div id={style.secondtext}>
                            <p>CARVING FUTURE</p>
                            <p>TECHNOLOGY PROFESSIONALS</p>
                            <p>OUT OF YOUNG MINDS</p>
                        </div>
                    </div>
                </article>
            </div>

            <div id={style.secondbox}>
                <span>
                    <h2>WHO WE ARE</h2>
                    <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
                    <p>At Rubixe™, we make your business more efficient, more predictable and more effective, turning complex challenges into solutions by leveraging disruptive technologies, providing a strategic competitive advantage. We serve clients in most industries including Banking & Finance, Retail, e-commerce, healthcare, logistics et., We have the capability to deliver solutions to clients of all sizes across the globe.</p>
                </span>
                <div>

                </div>
                <pre>

                </pre>
            </div>

            <div id={style.thirdbox}>
                <span>
                    <h2>WHERE WE STARTED</h2>
                    <p>We started in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in delivering enterprise-level solutions in the field of Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). and BlockChain Technology. </p>
                </span>
            </div>

            <div id={style.forthbox}>
                <h2>TECH FOR TEENS - A RUBIXE ® INITIATIVE</h2>
                <span>
                    <div>
                        <div id={style.box1}>
                            <div>
                                <h2>01</h2>
                            </div>
                            <i class="fa-solid fa-desktop"></i>
                            <p>Introducing AI to childern in an age appropriate manner.</p>
                        </div>
                        <div id={style.box2}>
                            <div>
                                <h2>02</h2>
                            </div>
                            <i class="fa-solid fa-microchip"></i>
                            <p>Gain awareness on AI and build an Interactive story around it</p>
                        </div>
                        <div id={style.box3}>
                            <div>
                                <h2>03</h2>
                            </div>
                            <i class="fa-solid fa-head-side-virus"></i>
                            <p>Acquire programming skills in a user-friendly format</p>
                        </div>
                        <div id={style.box4}>
                            <div>
                                <h2>04</h2>

                            </div>
                            <i class="fa-solid fa-user-gear"></i>
                            <p>Exposure to mini projects on diverse topics</p>

                        </div>
                        <div id={style.box5}>
                            <div>
                                <h2>05</h2>
                            </div>
                            <i class="fa-solid fa-person-chalkboard"></i>
                            <p>Train the teachers programme</p>
                        </div>
                    </div>
                </span>

            </div>

            <div id={style.fifthbox}>
                <div>
                    <span>
                        <h1>GET IN TOUCH</h1>
                        <p>Please register the form and we will get back to you soon.</p>
                    </span>
                    <form id={style.form}>
                        <label>Name *</label>
                        <input type="text" placeholder="Please Write Your Name" required />
                        <br />
                        <label>Email *</label>
                        <input type="email" placeholder="Please Write Your Email" required />
                        <br />
                        <label>Mobile Number *</label>
                        <input type="number" placeholder="Please Write Your Mobile Number" required />
                        <br />
                        <button>Register Now</button>
                    </form>
                </div>
            </div>

            <div id={style.sixthbox}>
                <span id={style.aboutus}>
                    <p>ABOUT US</p>
                    <span>
                        <p> Rubixe™ is a global technology company specializing in disruptive </p>
                        <p>technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process </p>
                        <p> Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission  </p>
                        <p>to enable businesses to leverage the full potential of disruptive</p>
                        <p> technologies to stay competitive in the market.</p>
                    </span>
                </span>

                <div id={style.menus}>
                    <p>MENUS</p>
                    <span>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>Career</p>
                    </span>
                </div>


                <div id={style.learnmore}>
                    <p>LEARN MORE</p>
                    <span>
                        <p>About</p>
                        <p>Contact Us</p>
                    </span>
                </div>

                <div id={style.address}>
                    <p>ADDRESS</p>
                    <span>
                        <p>Novel Tech Park, 1st Floor, Hosur Rd,
                            Kudlu gate, Bengaluru, Karnataka</p>
                        <p>560068</p>
                        <p>Phone: 0804-717-8999</p>
                        <p>Email: hi@rubixe.com</p>
                        <article>
                            <p>SOCIAL MEDIA</p>
                            <pre id={style.icon}>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </pre>
                        </article>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Home