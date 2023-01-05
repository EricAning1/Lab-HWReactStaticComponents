import './App.css';
import Sidebar from './components/Sidebar';
import Rating from './components/Average-Rating';
import Reviews from './components/Reviews';
import Analysis from './components/Sentiment-Analysis';
import WebVisitors from './components/Web-Visitors';

function App() {
  return (
    <div className='App'>
      <aside className='Aside'>
        <div className='Sidebar'>
          <Sidebar />
        </div>
        <div className='Reviews'>
          <Reviews />
        </div>
        <div className='Rating'>
          <Rating />
        </div>
        <div className='Analysis'>
          <Analysis />
        </div>
        <div className='WebVisitors'>
          <WebVisitors />
        </div>
      </aside>
    </div>
  );
}

export default App;
