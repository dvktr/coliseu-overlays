/* eslint-disable react/prop-types */

const PlayoffBracket = ({ rounds }) => {
  const changeColor = (color) => {
    const colorMap = {
      orange: "bg-gradientHorizontalOrange",
      purple: "bg-gradientHorizontalPurple",
      cyan: "bg-gradientHorizontalCyan",
      red: "bg-gradientHorizontalRed",
    };

    return colorMap[color] || "bg-gradientHorizontalOrange";
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-flow-col auto-cols-max gap-10 justify-center">
        {rounds.map((round, roundIndex) => (
          <div key={roundIndex} className="flex flex-col space-y-6 items-center">
            <div className="text-2xl font-bold text-grayBlue">{round.name}</div>
            {round.matches.map((match, matchIndex) => (
              <div
                key={matchIndex}
                className="relative w-[300px] bg-transparent flex flex-col space-y-2 items-start"
              >
                {/* Linha conectando os vencedores */}
                {roundIndex < rounds.length - 1 && (
                  <svg
                    className="absolute top-1/2 left-[50%] transform -translate-x-1/2"
                    width="100%"
                    height="10"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                      stroke="gray"
                      strokeWidth="2"
                    />
                  </svg>
                )}

                {/* Header */}
                <div className="text-grayBlue flex text-xl font-bold text-center flex-row">
                  <div className="font-bold mr-1">
                    R{roundIndex + 1}:
                  </div>
                  <div>
                    {match.time} - JOGO {matchIndex + 1}
                  </div>
                </div>

                <div className="flex flex-col w-full space-y-2 font-coolvetica">
                  {/* Team 1 */}
                  <div
                    className={`relative bg-white rounded-e-full pr-4 flex items-center ${
                      match.team1.score === "L" ? "opacity-50" : ""
                    }`}
                  >
                    <div
                      className={`flex justify-end items-center w-full h-[60px] ${changeColor(
                        match.team1.color
                      )} rounded-e-full pr-4`}
                    >
                      <span className="text-white text-5xl font-normal">
                        {match.team1.name.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-center text-[#4c5c6a] ml-2 h-[60px]">
                      <div className="text-5xl mr-2 font-normal">
                        {match.team1.score}
                      </div>
                      <div className="text-2xl font-normal">
                        ({match.team1.points})
                      </div>
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div
                    className={`relative bg-white rounded-e-full pr-4 flex items-center ${
                      match.team2.score === "L" ? "opacity-50" : ""
                    }`}
                  >
                    <div
                      className={`flex justify-end items-center w-full h-[60px] ${changeColor(
                        match.team2.color
                      )} rounded-e-full pr-4`}
                    >
                      <span className="text-white text-5xl font-normal">
                        {match.team2.name.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-center text-[#4c5c6a] ml-2 h-[60px]">
                      <div className="text-5xl mr-2 font-normal">
                        {match.team2.score}
                      </div>
                      <div className="text-2xl font-normal">
                        ({match.team2.points})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayoffBracket;
