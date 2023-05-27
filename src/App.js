import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import CreateExam from './components/createExam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/createExam" element={<CreateExam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
