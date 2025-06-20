import React, { useState } from "react";
import { Calendar, Heart, Save } from "lucide-react";
import { EMOTION_LIST } from "@/constants/emotion";

function Editor() {
    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0],
    );
    const [selectedEmotion, setSelectedEmotion] = useState<string>("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedEmotion || !description.trim()) {
            alert("Please select an emotion and write a description");
            return;
        }

        // Here you would typically save the diary entry
        console.log({
            date: selectedDate,
            emotion: selectedEmotion,
            description: description.trim(),
        });

        alert("Diary entry created successfully!");
        // Reset form or navigate back
        setSelectedEmotion("");
        setDescription("");
    };

    const selectedEmotionData = EMOTION_LIST.find(
        (e) => e.level === selectedEmotion,
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 lg:py-12">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-8">
                        <h1 className="text-md lg:text-3xl font-bold text-white mb-2">
                            New Diary Entry
                        </h1>
                        <p className="text-sm lg:text-md text-purple-100">
                            Capture your thoughts and emotions for today
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Date Selection */}
                        <div className="space-y-4">
                            <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                <span>Select Date</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) =>
                                        setSelectedDate(e.target.value)
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-lg"
                                    max={new Date().toISOString().split("T")[0]}
                                />
                            </div>
                        </div>

                        {/* Emotion Selection */}
                        <div className="space-y-6">
                            <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
                                <Heart className="w-5 h-5 text-purple-600" />
                                <span>How are you feeling?</span>
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                {EMOTION_LIST.map((emotion) => (
                                    <button
                                        key={emotion.level}
                                        type="button"
                                        onClick={() =>
                                            setSelectedEmotion(emotion.level)
                                        }
                                        className={`p-6 rounded-2xl border-2  transition-all duration-300 transform hover:scale-105 ${
                                            selectedEmotion === emotion.level
                                                ? `bg-purple-50 shadow-lg scale-105 border-purple-400`
                                                : `bg-white border-purple-200 hover:border-gray-300`
                                        }`}
                                    >
                                        <div
                                            className={`w-12 h-12 bg-gradient-to-br ${emotion.color} rounded-xl flex items-center justify-center mb-3 mx-auto ${
                                                selectedEmotion ===
                                                emotion.level
                                                    ? "rotate-6"
                                                    : ""
                                            } transition-transform duration-300`}
                                        >
                                            <emotion.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3
                                            className={`font-semibold text-center ${
                                                selectedEmotion ===
                                                emotion.level
                                                    ? emotion.textColor
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {emotion.label}
                                        </h3>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description TextArea */}
                        <div className="space-y-4">
                            <label className="text-lg font-semibold text-gray-900 block">
                                Tell us about your day
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="What happened today? How did you feel? What are you grateful for? Share your thoughts..."
                                rows={8}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-lg resize-none"
                                required
                            />
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>
                                    Express yourself freely - this is your
                                    private space
                                </span>
                                <span>{description.length} characters</span>
                            </div>
                        </div>

                        {/* Complete Button */}
                        <div className="pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                disabled={
                                    !selectedEmotion || !description.trim()
                                }
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none flex items-center justify-center space-x-2"
                            >
                                <Save className="w-5 h-5" />
                                <span>Complete Entry</span>
                            </button>
                            <p className="text-center text-gray-500 text-sm mt-3">
                                Your diary entry will be saved securely and
                                privately
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Editor;
