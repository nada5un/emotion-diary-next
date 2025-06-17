"use client";

interface ButtonProps {
    label?: string;
    iconName?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({
    label,
    iconName,
    onClick = () => {},
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type="button"
            className="group p-2 rounded-full hover:bg-gray-200 transition-colors duration-150 relative overflow-hidden w-10 h-10 cursor-pointer"
            onClick={onClick}
            disabled={disabled}
        >
            {iconName && (
                <span className="material-icons z-10 relative">{iconName}</span>
            )}
            {label && <span className="z-10 relative">{label}</span>}
            <span className="absolute inset-0 w-full h-full rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
        </button>
    );
};

export default Button;
