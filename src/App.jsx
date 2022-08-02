import './App.css'; 
import AppFooter from './cmps/AppFooter';
import AppHeader from './cmps/AppHeader';
import BackOffice from './pages/Backoffice';

function App() {
  return (
    <div>
        <AppHeader/>
        <BackOffice/>       
        <AppFooter/>
    </div>
  );
}

export default App;
