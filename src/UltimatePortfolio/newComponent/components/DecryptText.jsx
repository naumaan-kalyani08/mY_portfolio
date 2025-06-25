import React, { useEffect, useState, useRef } from "react";

const DecryptText = ({
  text = "Goal: To stand out of the crowd",
  decodeSpeed = 50,
  cycleDelay = 2000,
  pauseAfterDecrypt = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;<>,.?/~";
  const intervalRef = useRef(null);

  const generateRandomChar = () =>
    characters[Math.floor(Math.random() * characters.length)];

  useEffect(() => {
    let index = 0;

    const startEncrypting = () => {
      index = text.length - 1;

      intervalRef.current = setInterval(() => {
        setDisplayedText((prev) =>
          text
            .split("")
            .map((char, i) => (i >= index ? generateRandomChar() : char))
            .join("")
        );

        index--;
        if (index < 0) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            startDecrypting();
          }, cycleDelay);
        }
      }, decodeSpeed);
    };

    const startDecrypting = () => {
      index = 0;
      intervalRef.current = setInterval(() => {
        setDisplayedText((prev) =>
          text
            .split("")
            .map((char, i) => (i <= index ? char : generateRandomChar()))
            .join("")
        );

        index++;
        if (index === text.length) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            startEncrypting();
          }, pauseAfterDecrypt);
        }
      }, decodeSpeed);
    };

    // Start the cycle
    startEncrypting();

    return () => clearInterval(intervalRef.current);
  }, [text, decodeSpeed, cycleDelay, pauseAfterDecrypt]);

  return <p className="highlight mx-2 mb-2 decrypt-text">{displayedText} </p>;
};

export default DecryptText;
