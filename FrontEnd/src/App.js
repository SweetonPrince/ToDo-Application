import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListTaskComponent from './Components/ListTaskComponent'; // Import ListTaskComponent
import TaskComponent from './Components/TaskComponent'; // Import TaskComponent


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<ListTaskComponent />} />
          {/* http://localhost:3000/tasks */}
          <Route path="/tasks" element={<ListTaskComponent />} />
          {/* http://localhost:3000/add-task */}
          <Route path="/add-task" element={<TaskComponent />} />
          {/* http://localhost:3000/edit-task/1 */}
          <Route path='/edit-task/:id' element={<TaskComponent />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
