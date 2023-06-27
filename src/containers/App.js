import React, { useState, useEffect } from 'react';
import List from '../components/List';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scroll';

const App = () => {
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRobots(filtered);
  }, [query]);

  return (
    <div className="tc">
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox handleChange={handleChange} />
      </div>
      <Scroll>
        <List robots={filteredRobots} />  
      </Scroll>
      
    </div>
  );
};

export default App;
