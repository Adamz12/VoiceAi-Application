import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import Translate from "./Translate";
import { ImSpinner4 } from "react-icons/im";

const Transcription = ({ transcript }) => {
  const [indexOfActive, setIndexOfActive] = useState(0);
  const buttonArr = ["Transcription", "Translation"];
  const [resultText, setResultText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);
    alert("Transcript copied to clipboard!");
  };

  const copyToClipboardTranslate = () => {
    navigator.clipboard.writeText(resultText);
    alert("Translation copied to clipboard!");
  };

  // Function to download text file
  const downloadTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "transcript.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  const downloadTranslateFile = () => {
    const element = document.createElement("a");
    const file = new Blob([resultText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "translation.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <h1 className="logo__title transcript__title">
        Your <span className="text-red">Transcription</span>
      </h1>
      <div className="transcript__btn--wrapper">
        {buttonArr.map((el, idx) => (
          <button
            onClick={() => setIndexOfActive(idx)}
            key={idx}
            className={indexOfActive === idx ? "focus" : "transription__btn"}
          >
            {el}
          </button>
        ))}
      </div>
      {indexOfActive === 1 ? (
        <Translate
          transcript={transcript}
          setResultText={setResultText}
          resultText={resultText}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
        />
      ) : (
        <p className="transcription__text">{transcript}</p>
      )}
      <div className="save-copy__btn--wrapper">
        <button
          className="copy__btn"
          onClick={
            indexOfActive === 0 ? copyToClipboard : copyToClipboardTranslate
          }
        >
          <FaCopy />
        </button>
        <button
          className="save__btn"
          onClick={
            indexOfActive === 0 ? downloadTextFile : downloadTranslateFile
          }
        >
          <MdOutlineSaveAlt />
        </button>
      </div>
    </>
  );
};

export default Transcription;
