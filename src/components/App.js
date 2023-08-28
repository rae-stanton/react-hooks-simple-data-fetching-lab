// create your App component here
import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";

export default function App() {
  const [grabDog, setGrabDog] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setGrabDog(data.image));
  }, []);

  //return image data here
  return (
  <div className="dog-images">
    <p>Loading...</p>
    //set up once loaded function to display the image with alt text "A random dog"
  </div>
  )
}
