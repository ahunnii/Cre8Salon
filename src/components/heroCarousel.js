import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import img10 from '@images/gallery/10_desk.jpg';
import img1 from '@images/gallery/1_desk.jpg';
import img2 from '@images/gallery/2_desk.jpg';
import img3 from '@images/gallery/3_desk.jpg';
import img4 from '@images/gallery/4_desk.jpg';
import img5 from '@images/gallery/5_desk.jpg';

import img10mob from '@images/gallery/10_mob.jpg';
import img1mob from '@images/gallery/1_mob.jpg';
import img2mob from '@images/gallery/2_mob.jpg';
import img3mob from '@images/gallery/3_mob.jpg';
import img4mob from '@images/gallery/4_mob.jpg';
import img5mob from '@images/gallery/5_mob.jpg';

import styled from 'styled-components';

const Gallery = styled(ImageGallery)``;
class HeroGallery extends React.Component {
  render() {
    const images = [
      {
        original: img1,
        imageSet: [
          {
            srcSet: img1mob,
            media: '(max-width: 600px)',
          },
        ],
      },
      {
        original: img2,
        imageSet: [
          {
            srcSet: img2mob,
            media: '(max-width: 600px)',
          },
        ],
      },

      {
        original: img3,
        imageSet: [
          {
            srcSet: img3mob,
            media: '(max-width: 600px)',
          },
        ],
      },
      {
        original: img4,
        imageSet: [
          {
            srcSet: img4mob,
            media: '(max-width: 600px)',
          },
        ],
      },
      {
        original: img5,
        imageSet: [
          {
            srcSet: img5mob,
            media: '(max-width: 600px)',
          },
        ],
      },
      {
        original: img10,
        imageSet: [
          {
            srcSet: img10mob,
            media: '(max-width: 600px)',
          },
        ],
      },
    ];

    return (
      <Gallery
        items={images}
        lazyLoad={true}
        autoPlay={true}
        slideDuration={450}
        showFullscreenButton={false}
        showPlayButton={false}
        showIndex={false}
        showThumbnails={false}
        slideInterval={5000}
      />
    );
  }
}

export default HeroGallery;
