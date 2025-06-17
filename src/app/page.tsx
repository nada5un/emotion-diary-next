"use client";

import Button from "@/components/buttons/Button";
import IconButton from "@/components/buttons/IconButton";

function Home() {
    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
                <IconButton
                    iconName={"chevron_left"}
                    onClick={() => console.log("Previous Month")}
                />
                <h1 className="text-2xl font-bold">
                    {new Date().toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                    })}
                </h1>
                <IconButton
                    iconName={"chevron_right"}
                    onClick={() => console.log("Next Month")}
                />
            </header>

            {/*// 🧠 make a list of diary entries for the current month*/}
            <div className="p-4">
                <ul className="space-y-4">
                    {/* Example diary entries */}
                    {Array.from({ length: 10 }, (_, index) => (
                        <li
                            key={index}
                            className="flex p-4 rounded-lg shadow transition-colors items-center"
                        >
                            {/*// 🧠 make a random color for each entry with 5 emotion colors*/}

                            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                                <span className="material-icons text-blue-500">
                                    {
                                        [
                                            "sentiment_very_satisfied",
                                            "sentiment_satisfied",
                                            "sentiment_neutral",
                                            "sentiment_dissatisfied",
                                            "sentiment_very_dissatisfied",
                                        ][index % 5]
                                    }
                                </span>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <h2 className="text-xl font-semibold">
                                    Diary Entry {index + 1}
                                </h2>
                                <p className="text-gray-600">
                                    This is a sample diary entry for the month.
                                </p>
                            </div>
                            <div>
                                <Button label="Edit"></Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
