/* eslint-disable react/prop-types */

const Overlay = ({ matches, round }) => {
  const changeColor = (color) => {
    const colorMap = {
      orange: "bg-gradientHorizontalOrange",
      purple: "bg-gradientHorizontalPurple",
      cyan: "bg-gradientHorizontalCyan",
      red: "bg-gradientHorizontalRed",
    };
  
    return colorMap[color] || "gradientHorizontalOrange"; 
  };
  return (
    <div className="w-full h-full grid grid-rows-4 grid-flow-col gap-10 justify-center">
      {matches.map((match, index) => (
        <div
          key={index}
          className="w-[400px] bg-transparent flex flex-col space-y-2 items-start"
        >
          {/* Header */}
          <div className="text-grayBlue flex text-xl font-bold text-center flex-row">
            <div className="font-bold mr-1">
              {round}:
            </div>
            <div className="">
              {match.time} - JOGO {index + 1}
            </div>
          </div>

          <div className="flex flex-col w-full space-y-2 font-coolvetica">
            {/* Team 1 */}
            <div className={`relative bg-white rounded-e-full pr-6 flex items-center ${match.team1.score === "L" ? "opacity-50" : ""}`}>
            <div className={`flex justify-end items-center w-full h-[80px] ${changeColor(match.team1.color)} rounded-e-full pr-6`}>
                <span className="text-white text-7xl font-normal">
                  {match.team1.name.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-row items-center justify-center text-[#4c5c6a] ml-2 h-[80px]">
                <div className="text-6xl mr-2 font-normal">
                  {match.team1.score}
                </div>
                <div className="text-3xl font-normal">
                  ({match.team1.points})
                </div>
              </div>
            </div>

            {/* Team 2 */}
            <div className={`relative bg-white rounded-e-full pr-6 flex items-center ${match.team2.score === "L" ? "opacity-50" : ""}`}>
              <div className={`flex justify-end items-center w-full h-[80px] ${changeColor(match.team2.color)} rounded-e-full pr-6`}>
                <span className="text-white text-6xl font-normal">
                  {match.team2.name.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-row items-center justify-center text-[#4c5c6a] ml-2 h-[80px]">
                <div className="text-7xl mr-2 font-normal">
                  {match.team2.score}
                </div>
                <div className="text-3xl font-normal">
                  ({match.team2.points})
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Overlay;
