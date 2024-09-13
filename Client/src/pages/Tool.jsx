import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// components 
import Day_Panel from '../components/Day_panel';
import Daily_Form from '../components/Daily_form';

const Tool = ({onToolPage, logined_status}) => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    console.log("logined in: ", logined_status);
    onToolPage();
    validate_login();
    // Simulated 
    setProgressData([
      { day: 'Mon', progress: 20 },
      { day: 'Tue', progress: 40 },
      { day: 'Wed', progress: 30 },
      { day: 'Thu', progress: 70 },
      { day: 'Fri', progress: 50 },
      { day: 'Sat', progress: 80 },
      { day: 'Sun', progress: 100 },
    ]);
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
      <p>Weekly Progress Chart</p>
      <LineChart width={600} height={300} data={progressData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="progress" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Tool;