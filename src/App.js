
import List from './List';
import SearchBox from './SearchBox';
import { robots } from './robots';

const App = () => {
  return (
    <div className="tc">
      <div>
        <h1>RoboFriends</h1>
        <SearchBox />
      </div>
      <List robots={robots}/>
    </div>
    
  );
}

export default App;
