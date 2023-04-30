import PropTypes from 'prop-types';
import { useEffect } from "react";
// import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer} from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, url }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    };

  }, [closeModal]); 


  const onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };


  // componentDidMount() {
  //   window.addEventListener('keydown', this.onKeyDown)
  // };

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onKeyDown)
  // };


  // render() {
    return createPortal(
      <Overlay class="overlay" onClick={onBackdropClick} >
        <ModalContainer class="modal">
          <img src={url} alt="" />
        </ModalContainer>
      </Overlay>,
      modalRoot,
    );
  // }
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
}