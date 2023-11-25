import styled from 'styled-components';

export const StyledLi = styled.li`
  position: relative;
  padding: 12px 0px;
  padding-left: 40px;

  p {
    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* margin-right: 40px; */
  }

  div {
    opacity: 0;
    position: absolute;
  }

  &:hover {
    div {
      opacity: 0;
      transition: opacity 0.3s ease;
      top: 50%;
      left: 80%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }
    background: rgba(0, 0, 0, 0.2);
  }
  button {
    background: rgba(0, 0, 0, 0);
    padding: 0;
  }

  &:hover div {
    opacity: 1;
  }
`;
