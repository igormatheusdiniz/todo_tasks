import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import FilterCard from '../../Components/FilterCard';
import TaskCard from '../../Components/TaskCard';
import isConnected from '../../utils/isConnected';

import {Link, Redirect} from 'react-router-dom';

import * as S from './styles'

function Home() {
  
  const macaddress = isConnected;
  const [filterActived, setFilterActived] = useState();
  const [tasks, setTasks] = useState([]); //nesse caso vai precisar manipular os campos do objeto por iso passa o array vazio
  const [redirect, setRedirect] = useState(false);
  

  async function loadTasks(){

    if(!isConnected){
      setRedirect(true);
    }

    await api.get(`/task/filter/${filterActived}/${macaddress}`)
    .then(response => {
      setTasks(response.data)
      console.log(response.data);
    })
  }

  function Notification(){
    setFilterActived('late');
  }

  useEffect(() => {
    loadTasks();
}, [filterActived]);

  return (
  <S.Container>

    {redirect && <Redirect to="/QRCode"/>}
    <Header  clickNotification={Notification}/>

    <S.FilterArea>
      <button type="button" onClick={() => setFilterActived("all")}>
        <FilterCard title="Todos"   actived={filterActived=='all'} />
      </button>
      <button type="button" onClick={() => setFilterActived("today")}>
        <FilterCard title="Hoje"    actived={filterActived=='today'} />
      </button>
      <button type="button" onClick={() => setFilterActived("week")}>
        <FilterCard title="Semana"  actived={filterActived=='week'} />
      </button>
      <button type="button" onClick={() => setFilterActived("month")}>
        <FilterCard title="Mês"     actived={filterActived=='month'} />
      </button>
      <button type="button"onClick={() => setFilterActived("year")}>
      <FilterCard title="Ano"     actived={filterActived=='year'} />
      </button>
    </S.FilterArea>

    <S.Division>
      <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS': 'TAREFAS'}</h3>
    </S.Division>

    <S.Content>
      
    {
      tasks.map( t => (
        <Link to={`/task/${t._id}`}>
        <TaskCard type={t.type} title={t.tittle} when={t.when} done={t.done}/>
        </Link>
      ))      
    }
    </S.Content>

    <Footer/>
  </S.Container>
  )
}

export default Home;
