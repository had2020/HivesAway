import { useEffect } from 'react';

const Tool = ({onToolPage}) => {

  useEffect(() => {
    onToolPage();
  }, []);
  
  return (
    <div>
      <h1>Tool page!</h1>
      <p>Todo make hive tracker here!</p>
    </div>
  );
};

export default Tool;