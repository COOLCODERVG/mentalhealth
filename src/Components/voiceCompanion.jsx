import React, { useState, useEffect, useRef } from 'react';

export default function VoiceCompanion() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + transcriptSegment + ' ');
        } else {
          interimTranscript += transcriptSegment;
        }
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setTranscript('');
      recognitionRef.current.start();
    }
    setIsListening((prev) => !prev);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-pink-300 mb-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-2">🎤 Voice Companion</h2>

      {/* New Description Text */}
      <p className="text-gray-700 mb-6">
        Talk to your browser, and let it transcribe what you say in real-time. Great for hands-free input or testing voice commands!
      </p>

      <div className="flex flex-col items-center py-8">
        <button
          onClick={toggleListening}
          className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-3xl transition ${
            isListening ? 'bg-pink-400 text-white' : 'bg-pink-100 text-pink-500'
          }`}
        >
          {isListening ? '🔴' : '🎙️'}
        </button>

        <p className="text-xl font-medium text-gray-800 mb-1">
          {isListening ? 'Listening...' : 'Tap to Speak'}
        </p>

        {/* New Subtext Tip */}
        <p className="text-sm text-gray-500 mb-4">
          {isListening ? 'Speak clearly into your microphone.' : 'Click the mic to start voice recognition.'}
        </p>

        <p className="text-gray-600 text-center max-w-md whitespace-pre-wrap">
          {transcript || 'Say something and watch it appear here!'}
        </p>
      </div>
    </div>
  );
}
