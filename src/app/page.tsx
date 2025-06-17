"use client";
import Button from "@/components/Button";
function Home() {
    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
                <Button
                    iconName={"chevron_left"}
                    onClick={() => console.log("Previous Month")}
                />
                <h1 className="text-2xl font-bold">
                    {new Date().toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                    })}
                </h1>
                <Button
                    iconName={"chevron_right"}
                    onClick={() => console.log("Next Month")}
                />
            </header>
        </div>
    );
}

export default Home;
