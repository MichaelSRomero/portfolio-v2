 import React from "react"
 
 const Modal = ({
   isModalOpen = false,
   children,
   closeSlot = undefined,
   openModal = () => {}
  }) => {
 
   return (
    <div className={"modal" + (isModalOpen ? " is-active" : "") } >
      <div className="modal-background" onClick={ openModal }></div>
      <div className="modal-content">
        { children }
      </div>
      {
        closeSlot !== undefined ? 
          closeSlot :
          <button 
            class="modal-close is-large"
            aria-label="close"
          >
          </button>
      }
    </div>
   )
 }
 
 export default Modal;
 