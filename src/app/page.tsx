import React from "react";
import { Heart, BookOpen, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { EMOTION_LIST } from "@/constants/emotion";

const features = [
    {
        icon: BookOpen,
        title: "Daily Journaling",
        description:
            "Write about your experiences, thoughts, and feelings with our intuitive diary interface.",
    },
    {
        icon: Heart,
        title: "Emotion Tracking",
        description:
            "Log your daily emotions across five levels to understand your emotional patterns.",
    },
    {
        icon: Calendar,
        title: "Timeline View",
        description:
            "Browse through your emotional journey with beautiful calendar and timeline visualizations.",
    },
];

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <Heart className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Emotion Diary
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
                                Features
                            </div>
                            <div className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
                                Emotions
                            </div>
                            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Track Your Emotional Journey
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Personal
                            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Emotion Diary
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Capture your daily experiences and emotions in a
                            beautiful, private space. Track your emotional
                            well-being and discover patterns that help you grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                href="/list"
                            >
                                Start Your Journey
                            </Link>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Track Your Emotions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our comprehensive platform helps you understand and
                            improve your emotional well-being through thoughtful
                            features.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emotions Section */}
            <section
                id="emotions"
                className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Five Emotion Levels to Capture Every Day
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our carefully designed emotion scale helps you
                            accurately reflect on your daily experiences, from
                            the most challenging moments to your greatest
                            victories.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {EMOTION_LIST.map((emotion) => (
                            <div
                                key={emotion.level}
                                className="group cursor-pointer"
                            >
                                <div
                                    className={`bg-white p-8 rounded-2xl border-2 border-transparent hover:border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${emotion.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300`}
                                    >
                                        <emotion.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3
                                        className={`text-xl font-bold ${emotion.textColor} text-center mb-3`}
                                    >
                                        {emotion.label}
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                                        {emotion.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Emotional Journey?
                    </h2>
                    <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
                        Join thousands of users who have discovered the power of
                        emotional awareness through daily journaling.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            className="bg-white text-purple-600 px-16 py-4 rounded-full text-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            href="/list"
                        >
                            Start Free Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-8 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <Heart className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                Emotion Diary
                            </span>
                        </div>
                        <div className="flex space-x-8 text-gray-400">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Support
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>
                            &copy; 2025 Emotion Diary. Made with ❤️ for better
                            mental health.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
