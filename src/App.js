import React, { useState, useEffect } from 'react';
import List from './List';
import SearchBox from './SearchBox';
import { robots } from './robots';

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
        <h1>RoboFriends</h1>
        <SearchBox handleChange={handleChange} />
      </div>
      <List robots={filteredRobots} />
    </div>
  );
};

export default App;
