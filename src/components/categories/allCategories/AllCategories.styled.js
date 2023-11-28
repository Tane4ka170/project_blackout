import styled from 'styled-components';

export const CategoriesDiv = styled.div`
  @media (max-width: 767px) {
    max-width: 335px;
    max-height: 400px;
  }

  width: 500px;
  max-height: 461px;
  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #171719;
  padding: 40px 0;
  position: relative;
`;

export const TransactionType = styled.h2`
  text-transform: capitalize;
  @media (max-width: 767px) {
    font-size: 24px;
    margin-left: 20px;
  }

  color: #fafafa;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  margin-left: 40px;
`;

export const AllCategoriesP = styled.p`
  @media (max-width: 767px) {
    font-size: 12px;
    margin-left: 20px;
  }

  color: rgba(250, 250, 250, 0.4);
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 10px;
  margin-left: 40px;
`;

export const CategoriesList = styled.ul`
  max-height: 150px;
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
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  text-align: center;
`;
