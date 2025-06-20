import React from "react";
import IconButton from "@/components/buttons/IconButton";

// header button
interface HeaderIconButtonProps {
    iconName: string;
    onClick?: () => void;
}

// header component
interface HeaderProps {
    title: string;
    leftButton?: HeaderIconButtonProps;
    rightButton?: HeaderIconButtonProps;
}

function Header({ title, leftButton, rightButton }: HeaderProps) {
    return (
        <header className="flex items-center justify-between p-4 relative">
            <div className="flex-1 flex justify-start">
                {leftButton && (
                    <IconButton
                        iconName={leftButton.iconName}
                        onClick={leftButton.onClick}
                    />
                )}
            </div>
            <div className="flex-1 flex justify-center">
                <h1 className="text-2xl font-bold text-center">{title}</h1>
            </div>
            <div className="flex-1 flex justify-end">
                {rightButton && (
                    <IconButton
                        iconName={rightButton.iconName}
                        onClick={rightButton.onClick}
                    />
                )}
            </div>
        </header>
    );
}

export default Header;
