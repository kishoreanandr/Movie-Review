import './App.css';
import { Footer, Header } from './components';
import { AllRoute } from './Routes/AllRoute.jsx';

function App() {
  return (
   <>
    <div className='App'>
        <Header/>
        <AllRoute/>
        <Footer/>
    </div>
   </>
  );
}

export default App;
