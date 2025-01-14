import { useEffect, useState } from "react";

export default function Hub() {
    const [isVisible, setIsVisible] = useState(true);

    // Atualiza a visibilidade do Hub com base em uma API ou localStorage
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const response = await fetch("http://localhost:5000/api/ingame/showing");
                const data = await response.json();
                setIsVisible(data.scoreboardBottom); // Supondo que `isActive` seja retornado pela API
            } catch (error) {
                console.error("Erro ao buscar estado do Teamfight:", error);
            }
        }, 1000); // Atualiza a cada segundo

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-[1920px] h-[1080px] transition-transform duration-500 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <img
                src="images/in_game_bg.png"
                alt="In-Game Background"
                className="absolute bottom-0 left-0 object-cover"
            />
        </div>
    );
}
