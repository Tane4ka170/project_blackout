import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: rgba(250, 250, 250, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  padding: 40px 0 40px 20px;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: -0.56px;
    padding-left: 40px;
  }
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSvgWrap = styled.div`
  border-radius: 50%;
  background-color: rgba(12, 13, 13, 0.5);
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledLoader = styled.div`
  border-radius: 50%;
  background-color: transparent;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const GrayButton = styled.button`
  color: rgba(250, 250, 250, 1);
  background-color: rgba(41, 41, 43, 1);
  border-radius: 40px;
  cursor: pointer;
  border: none;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  width: fit-content;
  padding: 8px 16px;

  &:hover,
  &:focus {
    color: rgba(250, 250, 250, 0.5);
    transition: background-color 250ms ease-in-out;
  }
`;

export const StyledInputUpd = styled.input`
  display: none;
`;

export const StyledLabelUpd = styled.label`
  display: inline-block;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  background-color: rgba(41, 41, 43, 1);
  color: rgba(250, 250, 250, 1);
  border: none;
  border-radius: 40px;
  width: fit-content;

  &:hover,
  &:focus {
    color: rgba(250, 250, 250, 0.5);
  }
`;

export const StyledBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 20px;

  @media only screen and (min-width: 768px) {
    margin: 20px 40px;
  }
`;

export const StyledSelect = styled.div`
  color: rgba(250, 250, 250, 1);
  background-color: rgba(23, 23, 25, 1);
  padding: 12px 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  width: 98px;
  height: 43px;
  border-radius: 12px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  cursor: pointer;
  position: relative;

  @media only screen and (min-width: 768px) {
    padding: 15px 14px;
    width: 122px;
    height: 49px;
  }

  &:hover {
    border: 1px solid rgba(14, 243, 135, 1);
    transition: background-color 250ms ease-in-out;
  }

  .svg-arrow {
    position: absolute;
    top: 28%;
    left: 70%;
    transform: rotate(180deg);
    transition: 250ms ease-in-out;

    @media only screen and (min-width: 768px) {
      top: 30%;
      left: 75%;
    }
  }

  &.select-open .svg-arrow {
    transform: rotate(0);
    transition: 250ms ease-in-out;
  }

  .select-options {
    color: rgba(250, 250, 250, 0.4);
    background-color: rgba(12, 13, 13, 1);
    padding: 10px 14px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    width: 98px;
    border-radius: 12px;
    border: 1px solid rgba(250, 250, 250, 0.4);
    cursor: pointer;
    position: absolute;
    left: 0;

    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      &:hover,
      &:focus {
        color: rgba(250, 250, 250, 1);
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 10px 14px;
      width: 122px;
      top: 110%;
    }
  }
`;

export const StyledInputName = styled.input`
  color: rgba(250, 250, 250, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 12px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  background-color: rgba(23, 23, 25, 1);
  padding: 10px 14px;
  box-sizing: border-box;
  width: 188px;

  &::placeholder {
    color: rgba(250, 250, 250, 1);
  }

  &:focus {
    border-color: rgba(14, 243, 135, 1);
    outline: none;
    transition: background-color 250ms ease-in-out;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 18px;
    width: 290px;
  }
`;

export const StyledSaveBtn = styled.button`
  color: rgba(12, 13, 13, 1);
  background-color: rgba(14, 243, 135, 1);
  border-radius: 40px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  margin: 0 20px 60px 20px;
  text-align: center;
  width: 295px;

  padding-top: 14px;
  padding-bottom: 14px;

  @media only screen and (min-width: 768px) {
    margin-left: 40px;
    width: 420px;
  }

  &:hover,
  &:focus {
    background-color: rgba(14, 187, 105, 1);
    transition: background-color 250ms ease-in-out;
  }
`;
