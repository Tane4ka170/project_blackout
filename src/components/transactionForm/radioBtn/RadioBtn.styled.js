import styled from "styled-components";

// wrapper
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
`

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 8px;

  align-items: center;
`

// input
export const StyledLabel = styled.label`
  color: #FAFAFA;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;

  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const StyledInput = styled.input`
  appearance: none;
  border-radius: 10px;
  width: 19px;
  height: 19px;
  outline: 2px solid rgba(250, 250, 250, 0.20);

  transition: border 350ms, outline 350ms, background-color 350ms ease-in-out;

  &:checked {
    border: 3px solid #171719;
    outline: 2px solid #4DC274;
    background-color: #4DC274;
  }
`
