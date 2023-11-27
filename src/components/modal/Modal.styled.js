import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: rgba(23, 23, 25, 1);
  border: 1px solid rgba(250, 250, 250, 0.1);
  overflow: hidden;
  width: 500px;
  border-radius: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 1200;
`;
