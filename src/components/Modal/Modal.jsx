import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer} from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  };

  
  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };


  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown)
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown)
  };


  render() {
    return createPortal(
      <Overlay class="overlay" onClick={this.onBackdropClick} >
        <ModalContainer class="modal">
          <img src={this.props.url} alt="" />
        </ModalContainer>
      </Overlay>,
      modalRoot,
    );
  }
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
}