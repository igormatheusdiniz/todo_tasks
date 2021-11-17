import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({ clickNotification }) {

  const [lateCount, setCountLate] = useState();
  const macaddress = isConnected;

  async function lateVerify() {

    await api.get(`/task/filter/late/${macaddress}`)
      .then(response => {
        setCountLate(response.data.length)
        console.log(response.data);
      })
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function sair(){
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="divider" />
        <Link to="/task">Nova Tarefa</Link>
        <span className="divider" />
        {!isConnected ? <Link to="/QRCode">Sincronizar Celular</Link> :  <button onClick={sair}>SAIR</button> }
        
        <span className="divider" />
        <button onClick={clickNotification}>
          <img src={bell} alt="Notificacao" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>

  )
}

export default Header;
