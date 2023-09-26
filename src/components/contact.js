import { MapRender } from '@components';
import { srConfig } from '@config';
import { Heading, Section, media, mixins, theme } from '@styles';
import sr from '@utils/sr';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const { colors, fonts } = theme;

const ContactContainer = styled(Section)`
  p {
    font-family: ${fonts.Montserrat};
    margin-top: 35px;
  }
  table {
    width: 100%;
    border-spacing: 3px 1rem;
    padding-bottom: 0px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 600;
  }

  strong {
    font-family: ${fonts.Raleway};
    color: ${colors.darkSlate};
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.08em;
    font-size: 20px;
    line-height: 1.25;
  }
  span {
    font-family: ${fonts.Montserrat};
    white-space: nowrap;
    width: 30px;
    font-size: 20px;
    line-height: 1.25;
  }
  flex-direction: column;
  align-items: flex-start;
`;
const GridLayout = styled.div`
  a {
    ${mixins.bigButton};
    height: auto;
    text-align: center;

    ${media.tablet`width:85vw;`};
  }
  a.telephone {
    ${mixins.smallButton};
    text-align: left;
    ${media.tablet`width:auto;`};
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  position: relative;
  ${media.desktop`grid-template-columns: 1fr`};
`;
const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <ContactContainer id="contact" ref={revealContainer}>
      <Heading>{title}</Heading>
      <GridLayout>
        <section>
          <p dangerouslySetInnerHTML={{ __html: html }} />
          <a href="https://www.facebook.com/Cre8Salon.Inc" target="blank">
            {' '}
            Like Us on Facebook!
          </a>
        </section>
        <MapRender></MapRender>
      </GridLayout>
    </ContactContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
