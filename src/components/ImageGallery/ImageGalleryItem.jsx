import React from 'react';
import PropTypes from "prop-types";
import {Image, ListItem} from './ImagegalleyItem.styled'

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags, onClick}) => {

    return (
        <ListItem>
        <Image
          src={webformatURL}
          alt={tags}
          onClick={()=> onClick(largeImageURL)} />
        </ListItem>
    );
  }
  


ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired
 } 