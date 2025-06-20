import { useState } from "react";
import { EMOTIONS } from "@/constants/emotion";
import Button from "@/components/buttons/Button";

interface EditorProps {
    initialDate?: string;
    initialEmotionId?: string;
    initialContent?: string;
    onComplete?: (data: {
        date: string;
        emotionId: string;
        content: string;
    }) => void;
}

export default function Editor({
    initialDate = new Date().toISOString().slice(0, 10),
    initialEmotionId = "USUAL",
    initialContent = "",
    onComplete,
}: EditorProps) {
    const [date, setDate] = useState(initialDate);
    const [emotionId, setEmotionId] = useState(initialEmotionId);
    const [content, setContent] = useState(initialContent);

    const handleComplete = () => {
        if (onComplete) {
            onComplete({ date, emotionId, content });
        }
    };

    return (
        <div className="space-y-6">
            {/* 날짜 선택 */}
            <section>
                <label className="block text-sm font-medium mb-1">
                    날짜 선택
                </label>
                <input
                    type="date"
                    className="border rounded px-3 py-2 w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </section>
            {/* 감정 선택 */}
            <section>
                <label className="block text-sm font-medium mb-1">
                    감정 선택
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.values(EMOTIONS).map((emotion) => (
                        <button
                            key={emotion.id}
                            className={`flex items-center justify-center p-4 rounded-lg transition-colors duration-150 ${
                                emotion.id === emotionId
                                    ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
                                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => setEmotionId(emotion.id)}
                        >
                            <emotion.icon className="w-6 h-6 mr-2" />
                            <span>{emotion.label}</span>
                        </button>
                    ))}
                </div>
            </section>
            {/* 내용 입력 */}
            <section>
                <label className="block text-sm font-medium mb-1">
                    일기 내용
                </label>
                <textarea
                    className="border rounded px-3 py-2 w-full min-h-[120px] resize-y"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="오늘의 일기를 작성해보세요."
                />
            </section>
            {/* 완료 버튼 */}
            <div className="flex justify-end">
                <Button
                    label="완료"
                    onClick={handleComplete}
                    state="positive"
                    disabled={!content.trim()}
                />
            </div>
        </div>
    );
}
