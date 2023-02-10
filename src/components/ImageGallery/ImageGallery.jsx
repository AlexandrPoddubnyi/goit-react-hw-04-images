import React from 'react';
import PropTypes from "prop-types";
import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled'


export const ImageGallery = ({ images, onClick }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}>
        </ImageGalleryItem> )
      })}
    </List>
  );
};



ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};