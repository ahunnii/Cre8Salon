/* eslint-disable no-unused-vars */
import { IconExternal, IconFolder, IconGithub } from '@components/icons';
import { srConfig } from '@config';
import { Button, Heading, Section, media, mixins, theme } from '@styles';
import sr from '@utils/sr';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
const { colors, fontSizes, fonts } = theme;

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  p {
    line-height: 1.5;
    font-family: ${fonts.Montserrat};
    margin-top: 35px;
    margin-bottom: 30px;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const ProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${theme.colors.darkSlate};
`;
const Project = styled.div`
  transition: ${theme.transition};
`;

const ProjectTop = styled.div`
  padding: 25px;
  margin-bottom: auto;
`;

const ProjectName = styled.h5`
  font-size: ${fontSizes.xlarge};
  color: ${colors.backgroundGrey};
  font-family: ${fonts.Montserrat};
  text-transform: uppercase;
`;
const ProjectSub = styled.h6`
  font-size: ${fontSizes.small};
  color: ${colors.backgroundGrey};
  font-family: ${fonts.Montserrat};
  text-transform: uppercase;
  margin-top: 0px;
  padding-top: 0px;
`;

const ProjectDescription = styled.div`
  font-size: 15px;
  line-height: 1.5;
  font-family: ${fonts.Montserrat};
  height: 100%;
  margin: 5px auto;
  p {
    color: white;
  }
`;

const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  height: 500px;
`;

const Stylists = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const revealContainer = useRef(null);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 9;
  const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <ProjectsContainer>
      <span id="stylists" ref={revealContainer}></span>

      <Heading>Meet Our Staff</Heading>

      <p>&nbsp;</p>
      <ProjectsGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, avatar, external } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <Project
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <ProjectInner>
                      <FeaturedImg fluid={avatar.childImageSharp.fluid} />

                      <ProjectTop>
                        <ProjectName>{title}</ProjectName>
                        <ProjectSub>{external}</ProjectSub>
                        <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </ProjectTop>
                    </ProjectInner>
                  </Project>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

Stylists.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Stylists;
