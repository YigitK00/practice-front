import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todolist from "./components/todolist";
import CreateTask from "./components/createtask";
import EditTask from "./components/edittask";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Todolist />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/update/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
