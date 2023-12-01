import styled from 'styled-components';

// section
export const StyledSection = styled.section`
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 66px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 80px;
    margin-top: 59px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;

    display: flex;
    gap: 44px;
    margin-top: 59px;
  }
`;

// headers
export const StyledHeadersWrapper = styled.div`
  width: 335px;
  margin-bottom: 40px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 500px;
  }

  @media only screen and (min-width: 1440px) {
    width: 630px;
  }
`;

export const StyledHeaders = styled.h1`
  margin-bottom: 20px;

  color: #fafafa;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.02em;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    margin-bottom: 15px;

    font-size: 38px;
  }
`;

export const StyledText = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02em;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1440px) {
    width: 570px;
  }
`;

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

  @media only screen and (min-width: 1440px) {
    width: 630px;

    gap: 24px;
    flex-direction: row;
  }
`;

export const StyledMain = styled.main`
  width: 630px;
  width: 335px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    gap: 0px;
  }
`;

export const StyledWrapper = styled.div`
  width: 630px;
`;
