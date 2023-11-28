import styled from 'styled-components';

export const StyledLi = styled.li`
  @media (max-width: 767px) {
    padding-left: 20px;
  }

  position: relative;
  padding: 12px 0px;
  padding-left: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  p {
    @media (max-width: 767px) {
      font-size: 14px;
    }

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
    transition: opacity 0.3s ease;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    transition: opacity 0.3s ease;
  }

  &:hover div {
    opacity: 1;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    @keyframes wiggle {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: rotateZ(10deg);
      }
      50% {
        transform: translateX(0);
      }
      75% {
        transform: rotateZ(-10deg);
      }
      100% {
        transform: translateX(0);
      }
    }
    &:hover {
      animation: wiggle 0.5s ease infinite;
    }
  }
`;
