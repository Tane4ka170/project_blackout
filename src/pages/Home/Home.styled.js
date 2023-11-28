import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Img = styled.img`
  width: 335px;
  height: 381px;
  object-fit: cover;
  border-radius: 20px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 704px;
    height: 482px;
    object-fit: cover;
  }

  @media (min-width: 1440px) {
    width: 611px;
    height: 568px;
    object-fit: cover;
  }
`;
export const Text = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  max-width: 335px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 16px;
    letter-spacing: -0.32px;
    max-width: 533px;
  }

  @media (min-width: 1440px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 16px;
    letter-spacing: -0.32px;
    max-width: 533px;
  }
`;
export const TextDown = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin: 0;
`;
export const H1 = styled.h1`
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.8px;
    text-transform: uppercase;
  }

  @media (min-width: 1440px) {
    mcolor: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.8px;
    text-transform: uppercase;
  }
`;
export const H2 = styled.h2`
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  max-width: 335px;
  margin-top: 10px;
  margin-bottom: 14px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 56px;
    letter-spacing: -1.12px;
    max-width: 575px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 56px;
    letter-spacing: -1.12px;
    max-width: 575px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
export const H2span = styled.a`
  color: #0ef387;
  font-family: Suisse Intl;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-decoration-line: underline;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 56px;
    letter-spacing: -1.12px;
  }

  @media (min-width: 1440px) {
    font-size: 56px;
    letter-spacing: -1.12px;
  }
`;

export const H3 = styled.h3`
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1439.8px) {
  }

  @media (min-width: 1440px) {
  }
`;
export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 30px;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    margin-bottom: 36px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 166px;
    margin-top: 40px;
  }
`;
export const Content = styled.div`
  /* padding-left: 54px; */
  /* width: 575px; */
  @media (min-width: 768px) and (max-width: 1439.8px) {
  }

  @media (min-width: 1440px) {
    padding-left: 54px;
  }
`;
export const ContentUsers = styled.div`
  display: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
  }

  @media (min-width: 1440px) {
    padding-left: 54px;
    padding-right: 100px;
    display: flex;
    flex-direction: row;
  }
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #11101c;
  background: var(
    --avatar-user-square-fleur-cook-neutral-background,
    url(<path-to-image>),
    lightgray 50% / cover no-repeat,
    #e0e0e0
  );
`;

export const First = styled.div`
  position: relative;
  z-index: 3;
`;
export const Second = styled.div`
  position: relative;
  left: -10px;
  z-index: 2;
`;
export const Third = styled.div`
  position: relative;
  left: -20px;
  z-index: 1;
`;
export const ContentInfo = styled.div`
  margin-left: 12px;
  width: 210px;
  display: flex;
  flex-direction: column;
`;
export const ImagePack = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wrapper = styled.div`
  padding: 47px 20px 20px 20px;
  background: #0c0d0d;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    flex-direction: column-reverse;
    padding: 88px 32px 20px 32px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 56px 100px 20px 100px;
  }
`;

export const SignIn = styled(NavLink)`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  &:hover {
    /* border-radius: 40px; */
    /* border: 1px solid #0ef387; */
    border-color: #0ef387;
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const SignUp = styled(NavLink)`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: #0ef387;
  color: #0c0d0d;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;

  &:hover {
    /* border-radius: 40px; */
    background: #0ebb69;
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const AdaptDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlugDiv = styled.div`
  position: relative;
`;
export const TableDiv = styled.div`
  position: absolute;
  top: 240px;
  left: -10px;
  width: 248px;
  height: 81px;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    top: 315px;
    left: -16px;
  }

  @media (min-width: 1440px) {
    top: 315px;
    left: -50px;
    width: 303px;
    height: 121px;
  }
`;
