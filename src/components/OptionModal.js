import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => (
  <Modal
  isOpen={!!props.selectedOption}
  contentLabel="Selected Value"
  onRequestClose={props.handleCloseButton}
  ariaHideApp={false}
  closeTimeoutMS={400}
  className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.handleCloseButton}>Close</button>
  </Modal>
);

export default OptionModal;