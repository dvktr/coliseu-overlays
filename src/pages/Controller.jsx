export default function Controller() {
    const activateTeamfight = async () => {
        try {
            await fetch("http://localhost:5000/api/ingame/showing/teamfight/true", {
                method: "POST",
            });
        } catch (error) {
            console.error("Erro ao ativar o modo Teamfight:", error);
        }
    };

    const deactivateTeamfight = async () => {
        try {
            await fetch("http://localhost:5000/api/ingame/showing/teamfight/false", {
                method: "POST",
            });
        } catch (error) {
            console.error("Erro ao desativar o modo Teamfight:", error);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={activateTeamfight}
            >
                Ativar modo Teamfight View
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={deactivateTeamfight}
            >
                Desativar modo Teamfight View
            </button>
        </div>
    );
}
