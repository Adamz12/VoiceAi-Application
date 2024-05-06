"use client";
import React from "react";
import "@babel/polyfill";
import Clicktotranscribe from "./Clicktotranscribe";
import { FaLongArrowAltRight, FaMicrophone } from "react-icons/fa";

const Maincontent = ({ transcript, listening, resetTranscript }) => {
  return (
    <div className="main-content">
      <div className="main-content__container">
        <div className="row">
          <div className="main-content__wrapper">
            {!listening && transcript ? (
              <Clicktotranscribe
                resetTranscript={resetTranscript}
                transcript={transcript}
              />
            ) : (
              <>
                <h1 className="logo__title">
                  Talk<span className="text-red">Text</span>
                </h1>
                <h3 className="subtitle">
                  Record
                  <span className="text-red">
                    <FaLongArrowAltRight className="arrow-icon" />
                  </span>
                  Transcribe
                  <span className="text-red">
                    <FaLongArrowAltRight className="arrow-icon" />
                  </span>
                  Translate
                </h3>
                <button
                  className="record__btn"
                  onClick={() => {
                    if (listening) {
                      SpeechRecognition.stopListening();
                    } else {
                      SpeechRecognition.startListening({ continuous: true });
                    }
                  }}
                >
                  <span className="text-red">
                    {listening ? "Stop recording" : "Record"}
                  </span>
                  <FaMicrophone />
                </button>
                <div className="main-content__benefit">
                  Free now free forever
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
