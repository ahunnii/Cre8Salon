import { Blurb, Contact, Layout, Services, Stylists } from '@components';
import { Main, mixins } from '@styles';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;
const Border = styled.hr`
  width: 85vw;
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <MainContainer id="content">
      <Blurb data={data.blurb.edges} />
      <Border></Border>
      <Services data={data.services.edges} />
      <Border></Border>
      <Stylists data={data.stylists.edges} team={data.team.edges} />
      <Border></Border>
      <Contact data={data.contact.edges} />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    blurb: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blurb/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            show
          }
          html
        }
      }
    }
    stylists: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/stylists/" } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            status
            show
          }
          html
        }
      }
    }
    team: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/team/" } }) {
      edges {
        node {
          frontmatter {
            avatar {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }

    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
