import { useEffect } from 'react';
import Header from './Header';
import MainComp from './MainComp';

export default function App() {
  useEffect(function () {
    fetch('http://localhost:8140/questions')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <Header />

      <MainComp>
        <p>1/15</p>
        <p>Question?</p>
      </MainComp>
    </div>
  );
}
