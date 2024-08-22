import React from 'react';

//assets
import Hive_Icon from '../assets/Hive_Icon.png';

const Day_Panel = () => {
  return (
    <div>
        <p>Hives 1-5 Food: Unknown</p>
        <p>show food emoji?</p>
        <img src={Hive_Icon} alt="Hive Icon" />
    </div>
  );
};

export default Day_Panel;