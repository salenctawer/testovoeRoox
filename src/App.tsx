import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import ListContainer from './components/List/ListContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/' element={<ListContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
