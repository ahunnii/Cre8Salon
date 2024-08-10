/* eslint-disable no-unused-vars */
import { HeroGallery } from '@components';
import { srConfig } from '@config';
import { Heading, Section, media, mixins, theme } from '@styles';
import sr from '@utils/sr';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const { fonts } = theme;

const BlurbContainer = styled(Section)`
  text-align: center;
  margin-top: 35px;
  padding-bottom: 50px;

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

const LinkContainer = styled(Section)`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 50px;
  ${media.tablet`flex-direction:column-reverse;`};

  a {
    ${mixins.bigButton};
    text-align: center;
    ${media.tablet`width:100%;`};

    &:nth-child(even) {
      background-color: black;
      color: white;

      &:hover {
        background-color: #333;
      }
    }
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
        <LinkContainer>
          <a href="https://www.facebook.com/Cre8Salon.Inc" target="blank">
            {' '}
            Like us on Facebook!
          </a>

          <a href="https://shop.saloninteractive.com/store/cre8salon" target="blank">
            Shop Our Exclusive Hair Products
          </a>
        </LinkContainer>
      </BlurbContainer>
    </div>
  );
};

Blurb.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Blurb;
