// create your App component here
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [grabDog, setGrabDog] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setGrabDog(data.message);
        setIsLoading(false);
      });
  }, []);

  //return image data here
  return (
    <div className="dog-images">
      {isLoading ? <p>Loading...</p> : null}
      {grabDog && <img src={grabDog} alt="A Random Dog" />}
    </div>
  )
}
