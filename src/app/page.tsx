function Home() {
    return (
        <div>
            <header className="flex items-center justify-between p-4 bg-white shadow-md">
                <button className="group p-2 rounded-full hover:bg-gray-200 transition-colors duration-150 relative overflow-hidden w-10 h-10">
                    <span className="material-icons z-10 relative">
                        chevron_left
                    </span>
                    <span className="absolute inset-0 w-full h-full rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </button>
                <h1 className="text-2xl font-bold">
                    {new Date().toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </h1>
                <button className="group p-2 rounded-full hover:bg-gray-200 transition-colors duration-150 relative overflow-hidden w-10 h-10">
                    <span className="material-icons z-10 relative">
                        chevron_right
                    </span>
                    <span className="absolute inset-0 w-full h-full rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </button>
            </header>
        </div>
    );
}

export default Home;
