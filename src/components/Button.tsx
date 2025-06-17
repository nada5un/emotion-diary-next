// 🧠 Create a reusable React Button component with props: label (string), onClick (function), and disabled (boolean)
function Button({
    label,
    onClick,
    disabled = false,
}: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded bg-blue-500 text-white ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {label}
        </button>
    );
}

export default Button;
