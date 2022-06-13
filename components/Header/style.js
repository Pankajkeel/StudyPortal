import { css } from '@emotion/css';

export const container = css`
.headMain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0px;
  }
  
  .logoKeel img {
    width: 145px;
  }
  
  .navMainListing {
    display: flex;
    align-items: center;
  }
  
  .navList ul {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
    text-align: center;
    margin-right: 30px;
  }
  
  .joinBtn {
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-left: 1px solid #b7b3b3;
    margin-right: 10px;
  }
  
  .joinBtn button {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  
  .joinBtn button:hover {
    background: #f7a7a726;
  }
  
  .SgnIn button {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 50px;
    transition: all 0.2s ease;
    border: 1px solid #ef4f4f;
  }
  
  .SgnIn button:hover {
    background: #f7a7a726;
  }
  
  .navList ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: #00000099;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .navList ul li p {
    font-size: 14px;
    font-weight: 500;
  }
  
  .navList ul li:hover {
    color: #ef4f4f;
  }
`