
import React from 'react';
import { Link } from 'react-router-dom';
import Level1 from './Level1.png';
import Level2 from './Level2.png';
import Level3 from './Level3.png';
import Level4 from './Level4.png';

function MenuBody() {
  return (
    <body>
      <div className="Menu">
      <h1>Select Level</h1>
      <Link to="/level1">
       <img src={Level1} alt="level1"/>
      </Link>
      <Link to="/level2">
       <img src={Level2} alt="level2"/>
      </Link>
      <Link to="/level3">
       <img src={Level3} alt="level3"/>
      </Link>
      <Link to="/level4">
        <img src={Level4} alt ="level4"/>
      </Link>
      </div>
    </body>
  );
}

export default MenuBody;
