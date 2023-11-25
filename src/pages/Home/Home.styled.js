import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Text = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin: 0;
  margin-bottom: 40px;
  max-width: 533px;
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
`;
export const H2 = styled.h2`
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const H2span = styled.span`
  color: #0ef387;
  font-family: Suisse Intl;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.12px;
  text-decoration-line: underline;
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
`;
export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  margin-bottom: 166px;
`;
export const Content = styled.div`
  padding-left: 54px;
  /* width: 575px; */
`;
export const ContentUsers = styled.div`
  padding-left: 54px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
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
  padding: 74px 100px 100px 100px;
  background: #0c0d0d;
  display: flex;
  flex-direction: row;
`;

export const Links = styled(NavLink)`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  &:hover {
    border-radius: 40px;
    border: 1px solid #0ef387;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;

  &:hover {
    border-radius: 40px;
    background: #0ebb69;
  }
`;
