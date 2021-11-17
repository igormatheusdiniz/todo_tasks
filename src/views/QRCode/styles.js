import styled from "styled-components";

export const Container = styled.div`
    widht: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const QRCode = styled.div`
    widht:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    h1 {
        color: #EE6B26;
        font-size:35px;
    }

    p {
        color: #20295F;
    }

`

export const QRCodeArea = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

`

export const Validation = styled.div`
    width:50%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
    span{
        font-weight: bold;
        color: #20295F;
    }

    input {
        margin-top: 10px;
        width: 45%;
        font-size: 18px;
        padding:10px;
        text-align: center;
    }

    button {
        width: 50%;
        font-size: 18px;
        background: #EE6B26;
        color:#fff;
        border:none;
        border-radius:25px;
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
        margin-top:10px;

        &:hover{
            opacity: 0.5;
        }
    }

`