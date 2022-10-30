import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-right: 10px;
  height: 100%;
`;

export const Btn = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #3a07f6;
  border: none;
  z-index: 1;
  width: 80px;
  height: 26px;
  border-radius: 3px;
  color: #fff;

  :after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: rgb(0, 172, 238);
    border-radius: 3px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  :hover {
    color: #fff;
  }

  :hover:after {
    left: 0;
    width: 100%;
  }

  :active {
    top: 2px;
  }
`;

export const BtnText = styled.span`
  margin-left: 5px;
  font-weight: 700;
  color: #fff;
`;
