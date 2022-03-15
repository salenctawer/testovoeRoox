import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import ListContainer from './components/List/ListContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

function App() {
  return (
    <div className="App">
      <SidebarContainer />
      <Routes>
        <Route path='/profile' element={<ProfileContainer />}/>
        <Route path='/' element={<ListContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
