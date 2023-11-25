import styled from 'styled-components';

export const CategoriesDiv = styled.div`
  width: 500px;
  height: 461px;
  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #171719;
`;

export const TransactionType = styled.h2`
  color: #fafafa;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  margin-left: 40px;
  margin-top: 40px;
`;

export const AllCategoriesP = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 10px;
  margin-left: 40px;
`;

export const CategoriesList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 28px;

  &::-webkit-scrollbar {
    height: 131px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444446;
    border-radius: 12px;
  }
`;

export const CategoriesPlugP = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  margin-left: 40px;
`;

export const SubmitForm = styled.form`
  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
  position: relative;

  input {
    box-sizing: border-box;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 18px;
    border-radius: 12px;
    background: #171719;
    color: rgba(250, 250, 250, 0.4);
    font-size: 16px;
    font-style: normal;
    line-height: 1.5;
    border: 1px solid rgba(250, 250, 250, 0.2);
  }

  button {
    position: absolute;
    right: 0%;
    bottom: 0%;
    border-radius: 12px;
    background: #0ef387;
    padding: 15px 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0c0d0d;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.02em;
  }
`;

export const InputTitleP = styled.p`
  color: #0ef387;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02em;
`;
