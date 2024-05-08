import Plans from "./Components/GymPlans/Plans";
import Navbar from "./Components/Navbar/Navbar";
import Phones from "./Components/Phones/Phones";
import Chart from "./Components/ResultChart/Chart";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Plans></Plans>
      <Chart></Chart>
      <Phones></Phones>
    </div>
  );
};

export default App;
