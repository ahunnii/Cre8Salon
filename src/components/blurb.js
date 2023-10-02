/* eslint-disable no-unused-vars */
import { HeroGallery } from '@components';
import { srConfig } from '@config';
import { Heading, Section, mixins, theme } from '@styles';
import sr from '@utils/sr';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const { fonts } = theme;

const BlurbContainer = styled(Section)`
  text-align: center;
  margin-top: 35px;
  a {
    ${mixins.bigButton};
  }
  h2 {
    font-weight: 100;
    color: black;
    margin: 50px auto;
    font-family: ${fonts.Montserrat};
  }
`;

const Blurb = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <HeroGallery></HeroGallery>
      <BlurbContainer id="blurb" ref={revealContainer}>
        <Heading>Our Mission:</Heading>
        <h2 dangerouslySetInnerHTML={{ __html: html }} />
        <a href="https://www.facebook.com/Cre8Salon.Inc" target="blank">
          {' '}
          Like us on Facebook!
        </a>
      </BlurbContainer>
    </div>
  );
};

Blurb.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Blurb;
