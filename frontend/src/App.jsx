import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { DashboardPage } from './ui/pages/DashboardPage';
import { GroupPage } from './ui/pages/GroupPage';
import { ProfilePage } from './ui/pages/ProfilePage';
import {Layout} from "./layouts/Layout";
import { LoginPage } from './ui/pages/LoginPage';
import { SignupPage } from './ui/pages/SignupPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index path="/" element={<DashboardPage />} />
            <Route path="/groups" element={<GroupPage/>} />
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
