import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import CounterCard from './common/CounterCard';


function App() {
  const name = "Sergio";

  return (
    <div className="App" style={{
      display: "flex",
      flex: "1",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}>
      <CounterCard />
    </div>
  );
}

export default App;
