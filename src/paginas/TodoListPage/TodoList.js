import "../../styles/todoList.css"
import Header from "../../componentes/Header"
import HeaderTodoList from "./componentes/HeaderTodoList"
import { DotsThree } from "phosphor-react"

export function TodoList() {
    return (
        <>
            <Header />

            <HeaderTodoList />

            <main className="caixaMaior ">
                <div className="caixaMaior01 ">
                    <h1 className="titulo">Progresso</h1>

                    <div className="caixinha ">
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
    )
}

