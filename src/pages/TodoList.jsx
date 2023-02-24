import React, { useState, useEffect } from 'react';
import iconeVazio from '../assets/icon.webp';
export const TodoList = () => {
    const listaStorage = localStorage.getItem('tarefas');

    const [tarefas, setTarefas] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState('');

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas])

    const adicionaItem = (e) => {
        e.preventDefault();
        if(novoItem === '') return;
        setTarefas([...tarefas, { text: novoItem, isCompleto: false }]);
        setNovoItem('');
        document.getElementById('input-tarefa').focus();
    }

    const checkedTarefa = (index) => {
        const newTarefas = [...tarefas];
        newTarefas[index].isCompleto = !newTarefas[index].isCompleto;
        setTarefas(newTarefas);
    }

    const deleteTarefa = (index) => {
        const newTarefas = [...tarefas];
        newTarefas.splice(index, 1);
        setTarefas(newTarefas);
    }

    const deleteAllTarefas = () => {
        setTarefas([]);
    }
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input
                    id="input-tarefa"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    type="text"
                    placeholder="Adicione uma tarefa"
                />
                <button type="submit" className="btn-add">Add</button>
            </form>
            <div className="listaTarefas" style={{textAlign: 'center'}}>
                {
                    tarefas.length < 1
                    ?
                        <img src={iconeVazio} alt=""/>
                        :
                        tarefas.map((tarefa, index) => (
                            <div key={index} className={tarefa.isCompleto ? "item completo" : "item"}>
                                <span onClick={() => checkedTarefa(index)}>{tarefa.text}</span>
                                <button onClick={() => deleteTarefa(index)} className="btn-del">Deletar</button>
                            </div>
                        ))
                }
                { tarefas.length > 0 && <div>
                    <button onClick={deleteAllTarefas} className="btn-del-all">Deletar All</button>
                </div>}
            </div>
        </div>
    );
};
