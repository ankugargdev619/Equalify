import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DashboardPage } from './ui/pages/DashboardPage';
import { GroupPage } from './ui/pages/GroupPage';
import { ProfilePage } from './ui/pages/ProfilePage';
import {Layout} from "./layouts/Layout";
import { LoginPage } from './ui/pages/LoginPage';
import { SignupPage } from './ui/pages/SignupPage';
import { RecoilRoot } from 'recoil';

const groupList = [
    {
      name : "Roomies",
      description : "Friends from hostel room who are working together",
      members : 3,
      spending : 1506
    },
    {
      name : "Homies",
      description : "Friends from home",
      members : 5,
      spending : 2195
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
  ]

function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index path="/" element={<DashboardPage />} />
            <Route path="/groups" element={<GroupPage groupList={groupList} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App
