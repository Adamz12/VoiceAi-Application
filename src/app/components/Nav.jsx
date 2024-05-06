import React from "react";
import { FaPlus } from "react-icons/fa6";

function Nav({ resetTranscript }) {
  function reset() {
    resetTranscript();
  }

  return (
    <div className="nav">
      <div className="container">
        <div className="row">
          <div className="nav__wrapper">
            <h1>
              Talk<span className="text-red">Text</span>
            </h1>
            <button className="btn-new" onClick={reset}>
              <span className="text-red">
                New
                <FaPlus className="plus-sign" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
