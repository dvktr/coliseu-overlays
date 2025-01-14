import PlayoffBracket from '../components/PlayoffBracket';
import { rounds } from '../rounds';

function Playoff() {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent p-20">
      <PlayoffBracket rounds={rounds} />
    </div>
  );
}

export default Playoff;
