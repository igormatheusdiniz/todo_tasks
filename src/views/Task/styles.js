import styled from 'styled-components';

export const Container = styled.div`
    widht: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Form = styled.div`
    width:50%;
    height:500px;
    
    
`

export const TypeIcons = styled.div`

    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;

    .inative {
        opacity:0.5;
    }

    button {
        background: none;
        border: none;
    }

    img {
        widht : 50px;
        height : 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity:0.5;
        }

    }

`

export const Input = styled.div`
    widht: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;

    span {
        color: #707070;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 25px;
    }

    input {
        border: none;
        border-bottom: 2px solid #EE6B26;
        padding:10px;
        margin-bottom: 10px;
        opacity:0.5;
        
    }
    
`
export const TextArea = styled.div`
    widht: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;

    span {
        color: #707070;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 25px;
    }

    textArea {
        
        padding:10px;
        border: 2px solid #EE6B26;
        border-radius: 10px;
        margin-bottom:10px;
        
    }
    
`
export const Options = styled.div`
    widht:100%;
    display:flex;
    justify-content: space-between;
    margin: 50px 0px;
    

    button {
        font-weight: bold;
        color: #20295F;
        font-size:20px;
        border: none;
        background:none;
        cursor: pointer;
        align-items: center;

        &:hover {
            opacity:0.5;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-size:20px;
        font-weight: bold;

    }
`
export const Save = styled.div`
    width:100%;
    display:flex;
    justify-content: center;

    button {
        width:95%;
        height:40px;
        text-align: center;
        background: #EE6B26;
        color:#fff;
        border:none;
        border-radius:25px;
        cursor: pointer;
        font-weight: bold;
        
        font-size: 20px;

        &:hover{
            opacity:0.7;
        }
        
    } 

`