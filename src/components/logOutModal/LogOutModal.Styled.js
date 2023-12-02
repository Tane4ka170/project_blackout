import styled from 'styled-components';

export const StyledLogOutWrapper = styled.div`
  max-width: 335px;
  max-height: 260px;
  padding: 80px 29px;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    max-height: 266px;
    padding: 80px 105px;
  }
`;
export const StyledLogOutText = styled.p`
  color: rgba(250, 250, 250, 1);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-bottom: 40px;
`;
export const StyledLogOutButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;
export const StyledLogOutButton = styled.button`
  border-radius: 40px;
  background: rgba(41, 41, 43, 1);
  padding: 14px 44px;
  max-width: 139px;
  max-height: 47px;
  cursor: pointer;
  border: none;
  color: rgba(250, 250, 250, 1);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  transition: background-color 250ms ease-in-out;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 14px 44px;
    max-width: 142px;
    max-height: 47px;
  }

  &:hover {
    transform: scale(1.07);
    background: rgba(14, 243, 135, 1);
  }
`;
