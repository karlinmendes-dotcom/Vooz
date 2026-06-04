import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BookDemo } from "@/pages/BookDemo";
import { NavigationProgress } from "@/components/NavigationProgress";
import "./App.css";

function App() {
  return (
    <>
      <NavigationProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
      </Routes>
    </>
  );
}

export default App;
