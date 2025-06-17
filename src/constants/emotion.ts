export interface Emotion {
    id: string;
    name: string;
    emoji: string;
    color: string;
    gradient: string;
    description: string;
    bgColor: string;
}

export const SUPER_GREAT = {
    id: "super-great",
    name: "Super Great",
    emoji: "🤩",
    color: "text-purple-600",
    gradient: "from-purple-400 to-pink-400",
    description: "Feeling exceptionally positive and energetic",
    bgColor: "bg-purple-50 hover:bg-purple-100",
};

export const GREAT = {
    id: "great",
    name: "Great",
    emoji: "😊",
    color: "text-yellow-600",
    gradient: "from-yellow-400 to-orange-400",
    description: "Feeling happy and content",
    bgColor: "bg-yellow-50 hover:bg-yellow-100",
};

export const USUAL = {
    id: "usual",
    name: "Usual",
    emoji: "😐",
    color: "text-green-600",
    gradient: "from-green-400 to-teal-400",
    description: "Feeling neutral and balanced",
    bgColor: "bg-green-50 hover:bg-green-100",
};

export const NOT_GREAT = {
    id: "not-great",
    name: "Not Great",
    emoji: "😕",
    color: "text-blue-600",
    gradient: "from-blue-400 to-indigo-400",
    description: "Feeling a bit down or off",
    bgColor: "bg-blue-50 hover:bg-blue-100",
};

export const TERRIBLE = {
    id: "terrible",
    name: "Terrible",
    emoji: "😢",
    color: "text-red-600",
    gradient: "from-red-400 to-pink-400",
    description: "Feeling very sad or upset",
    bgColor: "bg-red-50 hover:bg-red-100",
};

export const EMOTIONS = {
    SUPER_GREAT,
    GREAT,
    USUAL,
    NOT_GREAT,
    TERRIBLE,
} as const;

export const dummyEmotions: Emotion[] = [
    EMOTIONS.SUPER_GREAT,
    EMOTIONS.GREAT,
    EMOTIONS.USUAL,
    EMOTIONS.NOT_GREAT,
    EMOTIONS.TERRIBLE,
];
