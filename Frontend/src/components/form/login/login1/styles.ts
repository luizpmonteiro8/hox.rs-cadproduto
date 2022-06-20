/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 350px;
    height: 500px;
    background: red;
    background: url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38')
      no-repeat center/ cover;
    background-color: #1e90ff;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
    overflow: hidden;

    &&& {
      input {
        width: 60%;
        background: #e0dede;
        justify-content: center;
        display: flex;
        margin: 20px auto;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 5px;
      }
      .buttonSignUp {
        background: #0000ff;
      }
    }

    .buttonSignUp,
    button {
      width: 60%;
      height: 40px;
      margin: 10px auto;
      justify-content: center;
      display: block;
      color: #fff;
      background: #1e90ff;
      font-size: 1em;
      font-weight: bold;
      margin-top: 20px;
      outline: none;
      border: none;
      border-radius: 5px;
      transition: 0.2s ease-in;
      cursor: pointer;
    }

    .buttonSignUp,
    button:hover {
      background: #87cefa;
    }

    label {
      color: #fff;
      font-size: 2.3em;
      justify-content: center;
      display: flex;
      margin: 60px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }

    #chk {
      display: none;
    }

    #chk:checked ~ .login {
      transform: translateY(-500px);
    }
    #chk:checked ~ .login label {
      transform: scale(1);
    }
    #chk:checked ~ .signup label {
      transform: scale(0.6);
    }
  `}
`;

export const SignUp = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
  `}
`;

export const Login = styled.div`
  ${({ theme }) => css`
    height: 460px;
    background: #fff;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 0.8s ease-in-out;

    label {
      color: #1e90ff;
      transform: scale(0.6);
    }
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css``}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0px;
    right: 0px;
  `}
`;
