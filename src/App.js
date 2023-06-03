import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import CreateExam from './components/createExam';
import ExamList from './components/examList';
import AttendExam from './components/attendExam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/createExam" element={<CreateExam />} />
        <Route path="/examList" element={<ExamList />} />
        <Route path="/attendExam/:id" element={<AttendExam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
