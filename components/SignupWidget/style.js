import { css } from '@emotion/css';

export const container = css`
.row.loginRow {
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  .headingLog h1 {
    font-size: 36px;
    font-weight: 300;
    color: #8f5849;
    text-align: center;
    padding: 10px 10px;
  }
  
  .inputForm input {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    background-color: transparent;
    padding: 20px 12px 4px;
    outline: none;
  }
  
  .loginSection .formSection {
    width: 408px;
    margin-top: 24px;
    margin: auto;
    background: white;
    padding: 30px 20px;
    margin-top: 30px;
    border-radius: 10px;
  }
  
  .inputForm {
    position: relative;
    margin-bottom: 10px;
  }
  
  .inputForm label {
    font-size: 15px;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 12px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }
  
  .inputForm input:focus {
    border-color: #ef4f4f;
    box-shadow: 0 0 0 1px #ef4f4f;
  }
  
  .inputForm input:focus ~ label {
    font-size: 12px;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    padding-top: 6px;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  
  .inputForm.inpuBtn button {
    position: absolute;
    right: 0;
    top: 8px;
    background: transparent;
    border: none;
    right: 14px;
    font-size: 16px;
    color: #838383;
    padding: 6px;
    border-radius: 4px;
  }
  
  .inputForm.inpuBtn input {
    padding-right: 52px;
  }
  
  .inputForm.inpuBtn button:hover {
    background: #f7a7a726;
  }
  
  button.frgBtn {
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    display: inline-block;
    margin: 16px 0 24px 0;
    display: block;
    background: no-repeat;
    border: none;
    font-weight: 500;
    transition: all 0.2s ease;
    font-size: 14px;
  }
  
  button.frgBtn:hover {
    text-decoration: underline;
    color: #ef4f4f;
  }
  
  button.mainBtn {
    width: 100%;
    border-radius: 50px;
    height: 56px;
    background: #ef4f4f;
    font-size: 18px;
    font-weight: 500;
    border: none;
    color: white;
  }
  .tms {
    margin: 8px 0;
  }
  
  .tms p {
    color: rgba(0,0,0,0.6);
    font-size: 12px;
    text-align: center;
    margin-top: 30px;
  }
  
  .tms button {
    margin-top: 20px;
  }
  
  .tms p a {
    color: #ef4f4f;
    font-weight: 500;
  }
  
  p.dividr {
    position: relative;
    text-align: center;
    margin: 30px 0;
  }
  
  p.dividr span {
    background: white;
    position: relative;
    z-index: 2;
    padding: 0 20px;
  }
  
  p.dividr:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: #b7b7b7;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  button.loginGoog {
    border: 1px solid;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    height: 48px;
    border-radius: 50px;
    border: 1px solid #d9d9d8;
    background: white;
  }
  
  button.loginGoog svg {
    width: 21px;
  }
  
  .alrdy {
    text-align: center;
    margin-top: 12px;
    font-size: 16px;
  }
  
  .alrdy a {
    color: #ef4f4f;
    font-weight: 500;
  }
  
  .outTxt {
    text-align: center;
    padding: 20px 0;
  }
  
  .outTxt p {
    font-size: 14px;
  }
  
  .outTxt p a {
    color: #ef4f4f;
    font-weight: 500;
  }
`