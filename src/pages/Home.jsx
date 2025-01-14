import Overlay from '../components/Overlay';
import matches from "../../src/config.json";

function Home() {
  return (
    <div className="grid items-start justify-start h-screen bg-transparent p-20 ml-40">
      <Overlay matches={matches.matches} round={matches.round} />
    </div>
  );
}

export default Home;
