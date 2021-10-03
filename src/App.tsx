import {BrowserRouter as Router,  Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div>
      <Router> 
        <Route path='/' component={HomePage} exact/>
        <Route path='/quizes' component={QuizPage} />
      </Router>
    </div>
  );
}

export default App;
