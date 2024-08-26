import { useEffect } from 'react';

// componets 
import Day_Panel from '../components/Day_panel';
import Daily_Form from '../components/Daily_form';

const Tool = ({onToolPage, logined}) => {

  useEffect(() => {
    onToolPage();
    
  }, []);
  
 const_validate_login = () => {
    if (!logined) {
      window.location.href = "/waring"; // TODO added route 
    };
  }

  return (
    <div>
      <Day_Panel/>
      <Daily_Form/>
      <h1>Tool page!</h1>
      <p>Todo make hive tracker here!</p>
    </div>
  );
};

export default Tool;