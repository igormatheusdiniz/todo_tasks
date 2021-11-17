import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import Qr from 'qrcode.react';

import { Link,Redirect } from 'react-router-dom';

import * as S from './styles'

function QRCode() {

    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function saveMac(){
        if (!mac){
            alert('Você precisa vincular um aparelho!');
        }else{
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/"/>}
            <Header />
            <S.QRCode>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>suas atividades serão sincronizadas com as do celular!</p>
                <S.QRCodeArea>
                    <Qr value='getmacaddress' size={350}/> 
                </S.QRCodeArea>
            </S.QRCode>
            <S.Validation>
                <span>Digite o código que apareceu no seu celular</span>
                <input type="text" onChange={e=> setMac(e.target.value)} value={mac}></input>
                <button onClick={saveMac}>SINCRONIZAR</button>
            </S.Validation>
            <Footer />
        </S.Container>
    )
}

export default QRCode;
