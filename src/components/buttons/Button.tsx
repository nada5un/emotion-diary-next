"use client";

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({
    label,
    onClick = () => {},
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type="button"
            className="group p-2 rounded-full bg-gray-50 transition-colors duration-150 relative overflow-hidden cursor-pointer text-gray-800 hover:bg-gray-300 disabled:opacity-50"
            onClick={onClick}
            disabled={disabled}
        >
            {label && (
                <span className="z-10 relative font-medium">{label}</span>
            )}
            <span className="absolute inset-0 w-full h-full rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
        </button>
    );
};

export default Button;
