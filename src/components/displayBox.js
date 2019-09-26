import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { 
  colors, 
  spacing, 
  RegularText,
  smallScreen
} from "../common/variables";

const Container = styled.a`
  background: ${colors.pureWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  margin: ${spacing.m};
  text-align: center;
  transition: all 0.2s ease-in-out; 
  border: none;
  &:hover {
    transform: scale(1.02);
  }
  ${smallScreen(css`
    width: 50%;
  `)}
`;
const Image = styled.img`
  width: 100%;
`;
const Text = styled.div`
  background: ${colors.pureWhite};
  ${RegularText}
  padding: ${spacing.m} 0;
  color: ${colors.pureBlack};
  text-align: center;
  ${smallScreen(css`
    font-size: 12px;
  `)}
`;

export const DisplayBox = ({image, copy, link}) => (
  <>
    <Container href={link ? link : null}>
      <Image src={image} alt={copy}/>
      <Text>{copy}</Text>
    </Container> 
  </>
);

DisplayBox.propTypes = {
  image: PropTypes.string
}
