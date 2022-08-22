import "../../styles/login.css"
import facebook from "./logos/facebook.png"
import google from "./logos/google.png"
import linkedin from "./logos/linkedin.png"
import mordekaiserLeagueOfLegends from "./logos/mordekaiser-league-of-legends.gif"

import { Link } from "react-router-dom"


export function Login() {
    return (
        <div className="login">
            <main>
                <h1>Create Account</h1>

                <div className="social-media">
                    <a href="/">
                        <img src={google} alt="google" />
                    </a>

                    <a href="/">
                        <img src={facebook} alt="facebook" />
                    </a>

                    <a href="/" >
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>

                <div className="alternative">
                    <span>OR</span>
                </div>

                <form action="">

                    <label for="name">

                        <span>Name</span>
                        <input type="text" id="name" name="name" />

                    </label>

                    <label for="email">
                        <span>Email</span>
                        <input type="text" id="email" name="email" />

                    </label>

                    <label for="senha">
                        <span>Senha</span>
                        <input type="password" id="senha" name="senha" />

                    </label>

                    <input type="submit" value="Sign Up" />
                    <Link to="/">Todo List Pagina</Link>
                </form>
            </main>

            <section className="image">
                <img src={mordekaiserLeagueOfLegends} alt="mord" />
                    <div className="circle"></div>
            </section>
        </div>
    )
}
