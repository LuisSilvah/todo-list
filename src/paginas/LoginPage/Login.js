import "../../styles/login.css"
import facebook from "./logos/facebook.png"
import google from "./logos/google.png"
import linkedin from "./logos/linkedin.png"
import mordekaiserLeagueOfLegends from "./logos/mordekaiser-league-of-legends.gif"
import jsonUsuario from "../../db_usuario.json"

import { useState } from "react"

export function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [hasError, setHasError] = useState(false)
    const [hasIncompleto, setHasIncompleto] = useState(false)


    const nameToLowerCase = name.toLocaleLowerCase()
    const db_usuarios = jsonUsuario.usuario

    function SignIn(e) {
        e.preventDefault()

        const procuraUsuario = db_usuarios.find((usuarios) => usuarios.email === email)

        // Verifica se digitou o nome, email, e senha

        if (name && email && password) {
            if (
                procuraUsuario?.email === email &&
                procuraUsuario?.senha === password
            ) {
                const usuario = {
                    name: name,
                    email: email,
                    senha: password,
                    autenticado: true
                }

                localStorage.setItem("usuario", JSON.stringify(usuario))
                localStorage.setItem("autenticado", true)

                window.location.replace("/")

                setHasError(false)
                setHasIncompleto(false)

            } else {
                setHasIncompleto(true)
            }
        } else {
            setHasError(true)
        }

    }




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

                <form
                    action=""
                    onSubmit={SignIn}
                >
                    <label htmlFor="name">

                        <span>Name</span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            value={nameToLowerCase}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </label>

                    <label htmlFor="email">
                        <span>Email</span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </label>

                    <label htmlFor="senha">
                        <span>Senha</span>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="*******"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>


                    {hasIncompleto && (
                        <div>
                            <span>Usuario errado</span>
                        </div>
                    )}

                    {hasError && (
                        <div>
                            <span>Preencha todos os dados</span>
                        </div>
                    )}

                    <input
                        type="submit"
                        value="Sign in"
                    />
                </form>



            </main>

            <section className="image">
                <img src={mordekaiserLeagueOfLegends} alt="mord" />
                <div className="circle"></div>
            </section>
        </div>
    )
}
