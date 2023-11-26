import styled from "styled-components";

// base wrapper
export const StyledWrapper = styled.div`
  background-color: #171719;
  border-radius: 20px;
  padding: 20px 20px;



  display: flex;
  gap: 12px;
  justify-content: left;
  align-items: center;
`


// svg 
export const StyledSvgWrapper = styled.div`
  background-color: #0EF387;
  border-radius: 10px;

  width: 36px;
  height: 36px;

  position: relative;
`


export const StyledSvg = styled.svg`
  position: absolute;
  top: 9px;
  left: 9px;
`

// total info

export const StyledTotalWrapper = styled.div`
  height: 41px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledHeaders = styled.p`
  color: rgba(250, 250, 250, 0.50);
  text-transform: capitalize;

  font-size: 12px;
  font-weight: 400;

  margin: 0;
`


export const StyledMoney = styled.p`
  color: #FAFAFA;

  font-size: 18px;
  font-weight: 700;

  margin: 0;
`


