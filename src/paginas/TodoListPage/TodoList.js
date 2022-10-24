import "../../styles/todoList.css"
import Header from "../../componentes/Header"
import HeaderTodoList from "./componentes/HeaderTodoList"
import { DotsThree } from "phosphor-react"
import { useState } from "react"

export function TodoList(
    {
        usuario
    }
) {

    const title = "Homepage"

    const [mostrarCaixinha, setMostrarCaixinha] = useState(false)

    const [text, setText] = useState('')
    
    const [select, setSelect] = useState('')


    function AbrirCriarCaixinha(caixinha) {
        setMostrarCaixinha(!caixinha)
    }

    function CriarCaixinha(e) {
        e.preventDefault()

        alert(text)

    }

    return (
        <>
            <Header />

            <HeaderTodoList title={title} AbrirCriarCaixinha={AbrirCriarCaixinha} mostrarCaixinha={mostrarCaixinha} />

            {!mostrarCaixinha && (
                <>
                    <main className="caixaMaior ">
                        <div className="caixaMaior01 ">
                            <h1 className="titulo">Progresso</h1>

                            <div className="caixinha">
                                <header className="headerDaCaixinha">
                                    <div className="andamento">
                                        <span>Andamento</span>
                                    </div>
                                    <div className="tresPontinhos">
                                        <DotsThree size={22} />
                                    </div>
                                </header>

                                <p className="caixinhaTexto">Konsep hero title yang</p>
                            </div>

                            <div className="caixinha">
                                <header className="headerDaCaixinha">
                                    <div className="andamento">
                                        <span>Andamento</span>
                                    </div>
                                    <div className="tresPontinhos">
                                        <DotsThree size={22} />
                                    </div>
                                </header>

                                <p className="caixinhaTexto">Konsep hero title yang</p>
                            </div>

                            <div className="caixinha">
                                <header className="headerDaCaixinha">
                                    <div className="andamento">
                                        <span>Andamento</span>
                                    </div>
                                    <div className="tresPontinhos">
                                        <DotsThree size={22} />
                                    </div>
                                </header>

                                <p className="caixinhaTexto">Konsep hero title yang</p>
                            </div>
                        </div>

                        <div className="caixaMaior02 ">

                            <h1 className="titulo">Finalizado</h1>

                            <div className="caixinha">
                                <header className="headerDaCaixinha">
                                    <div className="finalizado">
                                        <span>Finalizado</span>
                                    </div>
                                    <div className="tresPontinhos">
                                        <DotsThree size={22} />
                                    </div>
                                </header>

                                <p className="caixinhaTexto">Konsep hero title yang</p>
                            </div>

                            <div className="caixinha">
                                <header className="headerDaCaixinha">
                                    <div className="finalizado">
                                        <span>Finalizado</span>
                                    </div>
                                    <div className="tresPontinhos">
                                        <DotsThree size={22} />
                                    </div>
                                </header>

                                <p className="caixinhaTexto">Konsep hero title yang</p>
                            </div>

                            <div className="caixinha">
                                <header className="headerDaCaixinha">
                                    <div className="finalizado">
                                        <span>Finalizado</span>
                                    </div>
                                    <div className="tresPontinhos">
                                        <DotsThree size={22} />
                                    </div>
                                </header>

                                <p className="caixinhaTexto">Konsep hero title yang</p>
                            </div>
                        </div>

                        <div className="caixinhaCircle"></div>
                    </main>
                </>
            )}

            {mostrarCaixinha && (
                <>
                    <main className="criarCaixinha ">
                        <div className="caixaMaior01 ">
                            <h1 className="titulo">Criar caixinha</h1>
                        </div>

                        <form className="form" onSubmit={CriarCaixinha}>

                            <label htmlFor="texto">
                                <span>Texto</span>

                                <input
                                    type="text"
                                    name="texto"
                                    id="texto"
                                    placeholder={`No que voçê está pensando, ${usuario?.name}`}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </label>

                            <label htmlFor="select">
                                <span>Selecione o status</span>

                                <select>
                                    <option value="andamento">Andamento</option>
                                    <option value="finalizado">Finalizado</option>
                                </select>
                            </label>


                            <button>Criar caixinha</button>

                        </form>
                    </main>
                </>
            )}


        </>
    )
}

