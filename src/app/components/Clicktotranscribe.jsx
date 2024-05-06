import React, { useEffect, useRef } from "react";
import { FaPenNib } from "react-icons/fa";
import { useState } from "react";
import Transcription from "./Transcription";
// import { FaCircleNotch } from "react-icons/fa/";
import { CgSpinnerTwoAlt } from "react-icons/cg";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Clicktotranscribe = ({ transcript, resetTranscript }) => {
  const [transribe, setTranscribe] = useState(false);
  const [loading, setLoading] = useState(false);

  function reset() {
    resetTranscript();
  }

  function transcribed() {
    setLoading(true);
    setTimeout(() => {
      setTranscribe(true);
    }, 2000);
  }

  return (
    <>
      {transribe ? (
        <Transcription
          resetTranscript={resetTranscript}
          transcript={transcript}
        />
      ) : (
        <>
          {loading ? (
            <div className="loading__container">
              <h1 className="logo__title">
                <span className="text-red">Transcribing</span>
              </h1>
              <CgSpinnerTwoAlt className="loading__spinner" />
            </div>
          ) : (
            <>
              <h1 className="logo__title">
                Your<span className="text-red">File</span>
              </h1>
              <div className="clicktotranscribe__row">
                <div className="audio__name--wrapper">
                  <h3 className="name__audio--file">Name</h3>
                  <p className="audie__file--name">Custom Audio</p>
                </div>
                <div className="button__wrapper">
                  <button className="reset__btn" onClick={reset}>
                    Reset
                  </button>
                  <button
                    className="btn-new transcribe__btn"
                    onClick={transcribed}
                  >
                    <span className="text-red">
                      Transcribe <FaPenNib className="pen-icon" />
                    </span>
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Clicktotranscribe;
