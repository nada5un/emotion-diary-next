"use client";

import Button from "@/components/buttons/Button";
import Header from "@/components/Header";
import { EMOTIONS } from "@/constants/emotion";

function List() {
    const dummyData = [
        {
            id: 1,
            date: "2025-06-01",
            content: "This is my first diary entry for October.",
            emotion: EMOTIONS.NOT_GREAT,
        },
        {
            id: 2,
            date: "2025-06-01",
            content: "Feeling a bit down today.",
            emotion: EMOTIONS.GREAT,
        },
        {
            id: 3,
            date: "2025-06-02",
            content: "Had a great day with friends!",
            emotion: EMOTIONS.SUPER_GREAT,
        },
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <Header
                title={new Date().toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                })}
                leftButton={{
                    iconName: "chevron_left",
                    onClick: () => console.log("Previous Month"),
                }}
                rightButton={{
                    iconName: "chevron_right",
                    onClick: () => console.log("Next Month"),
                }}
            />

            <div className="p-4">
                <ul className="space-y-4">
                    {dummyData.map((entry) => (
                        <li
                            key={entry.id}
                            className={`flex p-4 rounded-lg shadow items-center transition-colors duration-150 bg-white hover:bg-gray-100`}
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0 ${entry.emotion.bgColor}`}
                            >
                                <span className="material-icons text-blue-500">
                                    {entry.emotion.emoji}
                                </span>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <h2 className="text-xl font-semibold">
                                    {new Date(entry.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        },
                                    )}
                                </h2>
                                <p className="text-gray-600">{entry.content}</p>
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

export default List;
