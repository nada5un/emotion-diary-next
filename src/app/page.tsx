import React from "react";

interface Emotion {
    id: string;
    name: string;
    emoji: string;
    color: string;
    gradient: string;
    description: string;
    bgColor: string;
}

const emotions: Emotion[] = [
    // make five emotions with different icons, colors, and descriptions
    // super great, great, usual, not great, terrible
    // 🧠 create emotion under this
    {
        id: "super-great",
        name: "Super Great",
        emoji: "🤩",
        color: "text-purple-600",
        gradient: "from-purple-400 to-pink-400",
        description: "Feeling exceptionally positive and energetic",
        bgColor: "bg-purple-50 hover:bg-purple-100",
    },
    {
        id: "great",
        name: "Great",
        emoji: "😊",
        color: "text-yellow-600",
        gradient: "from-yellow-400 to-orange-400",
        description: "Feeling happy and content",
        bgColor: "bg-yellow-50 hover:bg-yellow-100",
    },
    {
        id: "usual",
        name: "Usual",
        emoji: "😐",
        color: "text-green-600",
        gradient: "from-green-400 to-teal-400",
        description: "Feeling neutral and balanced",
        bgColor: "bg-green-50 hover:bg-green-100",
    },
    {
        id: "not-great",
        name: "Not Great",
        emoji: "😕",
        color: "text-blue-600",
        gradient: "from-blue-400 to-indigo-400",
        description: "Feeling a bit down or off",
        bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
        id: "terrible",
        name: "Terrible",
        emoji: "😢",
        color: "text-red-600",
        gradient: "from-red-400 to-pink-400",
        description: "Feeling very sad or upset",
        bgColor: "bg-red-50 hover:bg-red-100",
    },
];

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            {/* Header */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Emotion Diary
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Track your emotions and reflect on your day with our
                        interactive emotion diary.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-7xl mx-auto">
                    {/* Emotion Grid */}
                    <div
                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                            emotions.length
                        } gap-6`}
                    >
                        {emotions.map((emotion) => {
                            return (
                                // make each emotion a card with hover effects
                                <div
                                    key={emotion.id}
                                    className={`relative cursor-pointer transform transition-all duration-300 ease-out hover:scale-102 hover:shadow-xl ${emotion.bgColor} rounded-2xl p-6 lg:p-8 border border-white/50 backdrop-blur-sm`}
                                >
                                    {/* Gradient Background Overlay */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${emotion.gradient} opacity-0 transition-opacity duration-300 hover:opacity-5`}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Emoji Display */}
                                        <div className="text-6xl mb-4 transform transition-transform duration-300 hover:scale-110">
                                            {emotion.emoji}
                                        </div>

                                        {/* Emotion Name */}
                                        <h3
                                            className={`text-2xl font-bold mb-2 transition-colors duration-300 ${emotion.color}`}
                                        >
                                            {emotion.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {emotion.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
