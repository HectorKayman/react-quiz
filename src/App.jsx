import Header from './Header';
import MainComp from './MainComp';

export default function App() {
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
