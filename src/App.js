import './assets/App.css';
import LeftSideMenu from './components/LeftSideMenu';
import TopMenuWithLogin from './components/TopMenuWithLogin'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="left">
          <LeftSideMenu />
        </div>
        <div className="middle w-full">
          <TopMenuWithLogin />
        </div>
      </div>
    </div>
  );
}

export default App;
