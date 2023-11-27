import styled from 'styled-components';
// import { Input } from 'antd';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #e0e0e0;
  }
`;

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;
export const RememberBox = styled.span`
  color: rgba(250, 250, 250, 0.4);
`;
export const LogIn = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  background: #0c0d0d;
  &:hover {
    border-radius: 40px;
    border: 1px solid #0ef387;
  }
`;
export const WrapBts = styled.div`
  margin-top: 122px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    margin-top: 112px;
  }

  @media (min-width: 1440px) {
    margin-top: 112px;
  }
`;
