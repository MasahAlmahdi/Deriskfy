import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import ActiveReports from './components/ActiveReports/ActiveReports';
import LoginPage from './components/Login/Login';
import ReportsHistory from './components/ReportsTable/ReportsHisory';
import InstructionsTable from './components/Insctructions/InstructionsTable';
import Layout from './components/Layout';
import ReportDetails from './components/About/About';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
          <Route path="/about" element={<ReportDetails />} /> 
          <Route path="/about/:id" element={<About />} />
          <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/stations" element={<Stations />} /> */}
          <Route path="/active-reports" element={<ActiveReports />} />
          <Route path="/reports-history" element={<ReportsHistory />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          {/* <Route path="/help" element={<Help />} /> */}

          <Route path="/instructions" element={<InstructionsTable />} /> 

          </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
