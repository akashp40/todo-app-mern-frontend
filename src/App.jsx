import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import NewTaskCard from './components/cards/NewTaskCard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newTask" element={<NewTaskCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
