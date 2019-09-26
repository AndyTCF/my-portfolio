import { css } from "styled-components";
export const colors = {
  pureWhite: "#FFFFFF",
  pureBlack: "#000000",
  purple: "#5352ed",
  gray: "#a4b0be",
  orange: "#ffa502",
  lightGray: "#f1f2f6",
};
export const spacing = {
  xxs: "2px",
  xs: "4px",
  s: "8px",
  m: "16px",
  l: "32px",
  xl: "64px",
};
export const Header = css`
  font-size: 38px;
  font-weight: 600;
`;
export const SubHeader = css`
  font-size: 26px;
  font-weight: 400;
`;
export const RegularText = css`
  font-size: 22px;
  font-weight: 300;
`;
export const SubText = css`
  font-size: 18px;
  font-weight: 400;
`;
export const SubTitle = css`
  font-size: 14px;
  font-weight: 400;
`;
export const Page = css`
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
  padding: ${spacing.m};
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;
export const smallScreen = styles => css`
  @media screen and (max-width: 768px) {
    ${styles}
  }
`;
export const largeScreen = styles => css`
  @media screen and (max-width: 1440px) {
    ${styles}
  }
`;