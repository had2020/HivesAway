import { useEffect } from 'react';

// componets 
import Day_Panel from '../components/Day_panel';
import Daily_Form from '../components/Daily_form';

const Tool = ({onToolPage, logined_status}) => {

  useEffect(() => {
    console.log("logined in: ", logined_status);
    onToolPage();
    validate_login();
  }, []);
  
 const validate_login = () => {
    if (logined_status === false) {
      console.log("not logined in, status: ", logined_status);
      //window.location.href = "/waring"; 
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