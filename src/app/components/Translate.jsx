"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import translateText from "./GoogleTranslate";
import countries from "./countries";
import { ImSpinner4 } from "react-icons/im";

function Translate({
  transcript,
  setResultText,
  resultText,
  targetLanguage,
  setTargetLanguage,
}) {
  const [loading, setLoading] = useState(false);
  const handleTranslate = async () => {
    setLoading(true);
    if (transcript && targetLanguage) {
      const translatedText = await translateText(transcript, targetLanguage);
      setResultText(translatedText);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="translate__row">
      <div className="searchbar__title">To language</div>
      <div className="languages__btn--wrapper">
        <select
          name=""
          id="languageSelect"
          className="language__options"
          //   onChange={languageKey}
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="Select__language">Select language</option>
          {Object.entries(countries[0]).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <button className="translate__btn" onClick={handleTranslate}>
          <span className="text-red">Translate</span>
        </button>
      </div>
      <div className="translated__text--wrapper">
        {loading ? (
          <ImSpinner4 className="translate__spinner" />
        ) : (
          <p className="translated-text">{resultText}</p>
        )}
      </div>
    </div>
  );
}

export default Translate;
