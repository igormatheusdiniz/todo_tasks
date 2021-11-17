import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import * as S from './styles';
import { format } from 'date-fns';
import { Redirect } from 'react-router-dom';
import isConnected from '../../utils/isConnected';

import typeIcons from '../../utils/typeIcons';
import { set } from 'date-fns';

function Task({ match }) {

    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [tittle, setTittle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [done, setDone] = useState(false);
    const [macaddress, setMacAddress] = useState(isConnected);
    const [redirectQRcode, setRedirectQRcode] = useState(false);


    async function loadTask() {
        
        if(!isConnected){
            setRedirectQRcode(true);
        }

        await api.get(`/task/filter/${match.params.id}`)
            .then(response => {
                setType(response.data.type)
                setTittle(response.data.tittle)
                setDone(response.data.done)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:mm'))
            })
    }

    async function deleteTask(){
        const res = window.confirm('Deseja realmente remover a tarefa?');
        if(res){
            await api.delete(`task/${match.params.id}`)
            .then(response => {
                setRedirect(true);
                alert('Tarefa excluída com sucesso')
            })
        }
        
    }

    async function save() {

        if(!tittle){
            return alert("Você precisa informar um título");
        }
        else if (!description){
            return alert("Você precisa adicionar uma descrição");
        }
        else if (!type){
            return alert("Você precisa selecionar um tipo");
        }
        else if (!date){
            return alert("Você precisa selecionar um dia");
        }
        else if (!hour){
            return alert("Você precisa selecionar um horario");
        }
        else{
            if (match.params.id) {
                await api.put(`/task/${match.params.id}`,{
                    macaddress,
                    done,
                    type,
                    tittle,
                    description,
                    when: `${date}T${hour}:00.000`
                })
                .then(response => {
                    setRedirect(true);
                    alert("Tarefa atualizada com sucesso");
                })

            }
            else {
                await api.post(`/task`,
                    {
                        macaddress,
                        type,
                        tittle,
                        description,
                        when: `${date}T${hour}:00.000`
                    })
                    .then(response => {
                        setRedirect(true);
                        alert("Tarefa cadastrada com sucesso");
                    })
            }
        }
    }

    useEffect(() => {
        loadTask();
    }, []);

    return (
        <S.Container>
            {redirect && <Redirect to="/"/>}
            {redirectQRcode && <Redirect to="/QRCode"/>}
            <Header />
            <S.Form>
                <S.TypeIcons>
                    {
                        typeIcons.map((icon, index) => (
                            index > 0 &&
                            <button type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="Tipo da tarefa"
                                    className={type && type != index && 'inative'} />
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Digite o título da tarefa"
                        onChange={e => setTittle(e.target.value)} value={tittle}></input>
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Descrição da tarefa"
                        onChange={e => setDescription(e.target.value)} value={description}
                    />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Digite o título da tarefa"
                        onChange={e => setDate(e.target.value)} value={date}
                    ></input>
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Digite o título da tarefa"
                        onChange={e => setHour(e.target.value)} value={hour}
                    ></input>
                </S.Input>

                <S.Options>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                        <span>CONCLUÍDO</span>
                    </div>

                    {match.params.id && <button type="button" onClick={deleteTask}>EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type="button" onClick={save} >SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}

export default Task;
