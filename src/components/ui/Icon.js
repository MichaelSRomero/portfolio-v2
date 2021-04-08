import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, size, children }) => {
  return (
    <div className={"is-align-items-center" + (children ? " icon-text" : "") }>
      <span className="icon">
        <FontAwesomeIcon icon={ icon } size={ size } />
      </span>
      { children }
    </div>
  )
};

export default Icon;