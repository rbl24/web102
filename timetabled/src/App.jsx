import './App.css';
import Calendar from './components/Calendar';
const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for Pittsburgh</h1>
      <h2>Welcome to Pittsburgh! Check out the calendar for details</h2>
      <Calendar />
      
    </div>
  )
}

export default App