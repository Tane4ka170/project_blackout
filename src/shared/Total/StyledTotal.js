import styled from "styled-components";

// base wrapper
export const StyledWrapper = styled.div`
  background-color: #171719;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  gap: 12px;
  justify-content: left;
  align-items: center;

    @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
      padding-top: 32px;
      padding-bottom: 32px;
      padding-left: 23px;
      padding-right: 23px;

      border-radius: 30px;

      width: 340px;
    }
`


// svg 
export const StyledSvgWrapper = styled.div`
  background-color: #0EF387;
  border-radius: 10px;

  width: 36px;
  height: 36px;

  position: relative;

    @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
      width: 43px;
      height: 43px;

      border-radius: 13px;
    }
`


export const StyledSvg = styled.svg`
  position: absolute;
  top: 9px;
  left: 9px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    top: 13px;
    left: 13px;
  }
`

// total info

export const StyledTotalWrapper = styled.div`
  height: 41px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    gap: 7px;
  }
`

export const StyledHeaders = styled.p`
  color: rgba(250, 250, 250, 0.50);
  text-transform: capitalize;

  font-size: 12px;
  font-weight: 400;

  margin: 0;

    @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    font-size: 16px;
  }
`


export const StyledMoney = styled.p`
  color: #FAFAFA;

  font-size: 18px;
  font-weight: 700;

  margin: 0;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    font-size: 24px;
  }
`


