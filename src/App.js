import { makeStyles } from '@material-ui/core';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    },
  }));

  const classes = useStyles()

  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/coins/:id' element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
