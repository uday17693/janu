import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
