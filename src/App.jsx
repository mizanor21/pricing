import Plans from "./Components/GymPlans/Plans";
import Navbar from "./Components/Navbar/Navbar";
import Chart from "./Components/ResultChart/Chart";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Plans></Plans>
      <Chart></Chart>
    </div>
  );
};

export default App;
