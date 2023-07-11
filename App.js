import BaseTimer from './timer/BaseTimer';
import './App.css';

function App() {
    return (
      <div className= "container">
        <BaseTimer onStart={() => {}}
        onFinish={() => {}}
        onStop={() => {}}
        timesUp={120}>
        </BaseTimer>
      </div> 
    )
};


export default App;
