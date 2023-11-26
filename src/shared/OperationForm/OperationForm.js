import styled from "styled-components";

export const StyledFormWrapper = styled.form`
  width: 335px;

  border-radius: 30px;
  background-color: #171719;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 28px 20px;
  box-sizing: border-box;
`

export const StyledBtn = styled.button`
text-align: center;
color: #0C0D0D;
font-size: 16px;
font-weight: 400;
letter-spacing: -0.02em;

margin-right: auto;
padding: 14px 44px;
border-radius: 40px;
border: none;

background-color: #0EF387;
transition: background-color 250ms ease-in-out;


&:hover {
  background-color: #0EBB69;
}
`

export const StyledInputsWrapper = styled.div`
position: relative;
`

export const StyledErrorMsg = styled.p`
position: absolute;
left: 18px;

margin: 0;

font-size: 10px;
font-weight: 400;
color: #E74A3B;
`