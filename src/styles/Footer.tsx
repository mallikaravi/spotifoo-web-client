import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: var(--gray-dark);
    width: 100%;
    height: 10vh;
    position: fixed; 
    z-index: 1;
    align-items: center;

    box-shadow: 0px -1px 7px #16171aa0;
    
    .musicDiv {
        width: 400px;
        margin-top: -2px;
        cursor: pointer;
    }

    .playPause{
        margin-top: 3px;
    }
    .music {
        display: flex;
        color: #fff;
        align-items: center;
        margin-left: 5px;

        h1 {
            font-size: 18px;
            margin-bottom: 2px;
        }
        h3 {
            margin-top: 0px;
            font-size: 14px;
            color: #b5b5b5;
        }

        div {
            margin-left: 8px;
        }
        img {
            width: 70px;
            height: 65px;
        }
    }

    .player {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
        margin-top: 15px;


        button {
            border: none;
            outline: none;
            background-color: transparent;
            cursor: pointer;
        }

        .randomMusicsButton {
            position: relative;
            right: 25px;
        }
    }

    .inputButtons {
        display: flex;
        flex-direction: column;      
        align-items: center;
        
    }
    .buttons {
        display: flex;
        /*width: 225px;*/
        position: relative;
        bottom: 18px;
    }
    
    .progressBar {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        bottom: 15px;
        right: 10px;

        .Pduration {
            position: relative;
            left: 15px;
            color: #fff;
            font-size: 14px;
        }
        .PcurrentTime {
            position: relative;
            right: 10px;
            color: #fff;
            width: 35px;
            font-size: 14px;
        }
    }
    .currentProgress {
        --seek-before-width: 0px;

        appearance: none;
        border-radius: 10px;
        width: 380px;
        margin: auto;
        background-color: #494A4D;
        height: 5px;
        outline: none;

        ::-webkit-slider-thumb {
            appearance: none;
            height: 14px;
            width: 14px;
            background-color: #fff;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            position: relative;
            z-index: 3;
            box-sizing: border-box;
        }
        
        :active::-webkit-slider-thumb {
            transform: scale(1.2);
        }
    }

    @media only screen and (max-width: 820px) {
        .buttons {
            top: 0;
            right: 5%;
        }
        .progressBar {
            display: flex;
            align-items: center;
            width: 88vw;
            position: relative;
            bottom: 0px;
            right: -10%;
            
            input {
                margin: 0;
            }
    }

    @media only screen and (max-width: 575px) {
        .progressBar {
            right: 30px;

    }
        .buttons {
            width: 147px;
            top: 0px;
            right: 0;
            left: '0';
        }
    }
    
    `;
