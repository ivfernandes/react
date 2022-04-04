import React from "react";
import Botao from "../botao";

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <br/>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você vai estudar hoje?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="titulo">Tempo</label>
                    <br/>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao/>
            </form>
            
        );
    }
}

export default Form;