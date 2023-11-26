import styled from "styled-components";

// section
export const StyledSection = styled.section`
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 80px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 80px;
  }
  
`

// headers
export const StyledHeadersWrapper = styled.div`
width: 335px;
margin-bottom: 40px;

@media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 500px;
  }
`

export const StyledHeaders = styled.h1`
  margin-bottom: 20px;

  color: #FAFAFA;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.02em;
  line-height: normal;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    margin-bottom: 15px;

    font-size: 38px;
  }
`

export const StyledText = styled.p`
color: rgba(250, 250, 250, 0.40);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.02em;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    margin-bottom: 15px;
    
    font-size: 16px;
  }
`

// total expense & income

export const StyledTotalUl = styled.ul`
  width: 335px;
  padding: 0;

  display: flex;
  gap: 12px;
  flex-direction: column;

  list-style: none;

  margin-bottom: 40px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 701px;

    flex-direction: row;

    gap: 0;
    justify-content: space-between;
  }
`

export const StyledMain = styled.main`
  /* width: 335px; */

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`