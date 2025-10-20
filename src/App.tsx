import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Trangchu";
import Bai1 from "./pages/Bai1";
import StudentList from "./pages/Bai2/StudenList";
import StudentDetail from "./pages/Bai2/StudentDetail";
import Bai3 from "./pages/Bai3";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bai1" element={<Bai1 />} />
        <Route path="/bai2" element={<StudentList />} />
        <Route path="/bai2/:id" element={<StudentDetail />} />
        <Route path="/bai3" element={<Bai3 />} />
      </Routes>
    </Router>
  );
};
export default App;
