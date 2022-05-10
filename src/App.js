
import './App.css';
import SiteBar from './Componet/SiteBar/SiteBar';
import Overwiew from './Componet/Overwiew/Overwiew';

function App() {
  return (
    <>
      <div className='dashboard'>
        <SiteBar/>
        <Overwiew/>
      </div>
    </>
  );
}

export default App;
