import Chat from "./components/Chat"
import Home from "./components/Home"
import NewProject from "./components/NewProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/new" element={<NewProject/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App