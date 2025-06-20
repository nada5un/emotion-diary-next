import { NextRequest } from "next/server";
import { EmotionId, EMOTIONS } from "@/constants/emotion";
import { successResponse, errorResponse } from "@/lib/apiResponse";

type DiaryItem = {
    id: string;
    content: string;
    createdAt: string;
    emotionId: EmotionId; // 'SUPER_GREAT' | 'GREAT' | 'USUAL' | 'NOT_GREAT' | 'TERRIBLE'
};

const diaryDB: DiaryItem[] = []; // 메모리 DB (서버 재시작 시 리셋)

// Emotion ID 유효성 검사용 상수
const VALID_EMOTION_IDS: EmotionId[] = Object.keys(EMOTIONS) as EmotionId[];

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
        const entry = diaryDB.find((e) => e.id === id);
        if (!entry) {
            return errorResponse({
                error: "NOT_FOUND",
                message: "해당 일기를 찾을 수 없습니다.",
                status: 404,
            });
        }
        return successResponse(entry);
    }

    return successResponse(diaryDB);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { content, emotion } = body;

    if (!VALID_EMOTION_IDS.includes(emotion)) {
        return errorResponse({
            error: "INVALID_EMOTION",
            message: "emotionId가 유효하지 않습니다.",
            status: 400,
        });
    }

    const newEntry: DiaryItem = {
        id: Date.now().toString(),
        content,
        createdAt: new Date().toISOString(),
        emotionId: emotion,
    };

    diaryDB.push(newEntry);
    return successResponse(newEntry, 201);
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { id, content, emotion } = body;

    const entry = diaryDB.find((e) => e.id === id);
    if (!entry) {
        return errorResponse({
            error: "NOT_FOUND",
            message: "수정할 일기를 찾을 수 없습니다.",
            status: 404,
        });
    }

    entry.content = content ?? entry.content;
    if (emotion && VALID_EMOTION_IDS.includes(emotion)) {
        entry.emotionId = emotion;
    }

    return successResponse(entry);
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const idx = diaryDB.findIndex((e) => e.id === id);

    if (idx === -1) {
        return errorResponse({
            error: "NOT_FOUND",
            message: "삭제할 일기를 찾을 수 없습니다.",
            status: 404,
        });
    }

    const [deleted] = diaryDB.splice(idx, 1);
    return successResponse(deleted);
}
