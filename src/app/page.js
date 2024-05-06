"use client";
import Image from "next/image";
import Maincontent from "./components/Maincontent";
import Nav from "./components/Nav";
import styles from "./page.module.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Home() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  return (
    <main>
      <Nav
        transcript={transcript}
        listening={listening}
        resetTranscript={resetTranscript}
      />
      <Maincontent
        transcript={transcript}
        listening={listening}
        resetTranscript={resetTranscript}
      />
    </main>
  );
}
