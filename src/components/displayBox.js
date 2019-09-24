import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, spacing, RegularText} from "../common/variables";

const Container = styled.a`
  background: ${colors.pureWhite};
  width: 45%;
  margin: ${spacing.m};
  text-align: center;
  transition: all 0.2s ease-in-out; 
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  &:hover {
    transform: scale(1.02);
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Text = styled.div`
  background: ${colors.pureWhite};
  ${RegularText}
  padding: ${spacing.l} 0;
  color: ${colors.pureBlack};
`;

export const DisplayBox = ({image, copy, link}) => (
  <>
    <Container href={link ? link : null}>
      <Image src={image}/>
      <Text>{copy}</Text>
    </Container> 
  </>
);

DisplayBox.propTypes = {
  image: PropTypes.element
}
