"use client";

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    state?: "default" | "positive" | "negative";
}

const getButtonClass = (state: ButtonProps["state"]) => {
    switch (state) {
        case "positive":
            return "bg-black text-white hover:bg-gray-700";
        case "negative":
            return "bg-red-500 text-white hover:bg-red-600";
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-300";
    }
};

const Button = ({
    label,
    onClick = () => {},
    disabled = false,
    state = "default",
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`group p-2 rounded-full transition-colors duration-150 relative overflow-hidden cursor-pointer ${getButtonClass(
                state,
            )}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label && (
                <span className="z-10 relative font-medium">{label}</span>
            )}
        </button>
    );
};

export default Button;
