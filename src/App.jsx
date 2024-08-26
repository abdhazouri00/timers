import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={4} />
        <TimerChallenge title="Hard" targetTime={7} />
        <TimerChallenge title="Extreme" targetTime={13} />
      </div>
    </>
  );
}

export default App;
