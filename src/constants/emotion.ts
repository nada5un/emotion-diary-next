import { Star, Smile, Meh, Frown, X } from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface Emotion {
    level: string;
    label: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    textColor: string;
    description: string;
}

export const SUPER_GREAT = {
    id: "super-great",
    level: "SUPER_GREAT",
    label: "Super Great",
    icon: Star,
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-900",
    description: "Amazing days filled with joy and accomplishment",
};

export const GREAT = {
    id: "great",
    level: "GREAT",
    label: "Great",
    icon: Smile,
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-blue-50",
    textColor: "text-purple-800",
    description: "Good days with positive experiences",
};

export const USUAL = {
    id: "usual",
    level: "USUAL",
    label: "Usual",
    icon: Meh,
    color: "from-purple-300 to-indigo-400",
    bgColor: "bg-yellow-50",
    textColor: "text-purple-700",
    description: "Regular days with balanced emotions",
};

export const NOT_GREAT = {
    id: "not-great",
    level: "NOT_GREAT",
    label: "Not Great",
    icon: Frown,
    color: "from-purple-200 to-indigo-200",
    bgColor: "bg-yellow-50",
    textColor: "text-purple-500",
    description: "Challenging days that need attention",
};

export const TERRIBLE = {
    id: "terrible",
    level: "TERRIBLE",
    label: "Terrible",
    icon: X,
    color: "from-purple-100 to-indigo-100",
    bgColor: "bg-yellow-50",
    textColor: "text-purple-400",
    description: "Difficult days requiring self-care",
};

export const EMOTIONS = {
    SUPER_GREAT,
    GREAT,
    USUAL,
    NOT_GREAT,
    TERRIBLE,
} as const;

export type EmotionId = keyof typeof EMOTIONS;
