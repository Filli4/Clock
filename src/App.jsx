import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";
const App = () => {
  return (
    <div>
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
      <Timer startTime={200} />
    </div>
  );
};
export default App;
