import React from "react";
import { dummyEmotions } from "@/constants/emotion";

function New() {
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
                            dummyEmotions.length
                        } gap-6`}
                    >
                        {dummyEmotions.map((emotion) => {
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

export default New;
