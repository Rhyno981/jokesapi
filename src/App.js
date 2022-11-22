import {useState, useEffect} from "react"
import './App.css';

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single`)
    .then((res) =>res.json())
    .then((data) => setJokes(data))
  }, [render]);

  return (
    <div>
    <div className="container">
      <h2>{jokes.joke}</h2>
    </div>
    <button className="button" onClick={() => setRender(Math.random())}>New Joke</button>
    </div>
  );
}