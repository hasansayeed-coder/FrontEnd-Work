import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Jobs from './components/Jobs';
import ApplyJobs from './components/ApplyJobs';
import SaveJobs from './components/SaveJobs';
import PostJob from './components/PostJob';
import Discussion from './components/Discussion';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs/>} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/apply-jobs" element={<ApplyJobs />} />
            <Route path="/saved-job" element={<SaveJobs />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="*" element={<ErrorPage />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
