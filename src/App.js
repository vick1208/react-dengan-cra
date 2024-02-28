import './App.css';
import CardHeader from './components/CardHeader/CardHeader';
import CardProfile from './components/CardProfile/CardProfile';

function App() {
  return (

    <>
      {/* <div className="App">
        <h1>
          Hello World With React
        </h1>
      </div> */}
      <CardHeader />
      <CardProfile 
      name="Vicky Alexander Susanto" 
      github="vick1208" 
      email="vicky.susanto@rocketmail.com"/>
    </>
  );
}

export default App;
