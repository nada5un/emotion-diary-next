// src/app/api/diary/route.ts
import { NextRequest, NextResponse } from "next/server";
import { EmotionId } from "@/constants/emotion";

type DiaryItem = {
    id: string;
    content: string;
    createdAt: string;
    emotionId: EmotionId; // 'SUPER_GREAT' | 'GREAT' | 'USUAL' | 'NOT_GREAT' | 'TERRIBLE'
};

const diaryDB: DiaryItem[] = []; // 메모리 DB (리셋됨)

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (id) {
        const entry = diaryDB.find((e) => e.id === id);
        if (!entry) {
            return NextResponse.json(
                { error: "Entry not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(entry);
    }
    return NextResponse.json(diaryDB);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    // emotionId 타입 체크
    const emotionId: EmotionId = body.emotion;
    if (
        !emotionId ||
        !["SUPER_GREAT", "GREAT", "USUAL", "NOT_GREAT", "TERRIBLE"].includes(
            emotionId,
        )
    ) {
        return NextResponse.json(
            { error: "Invalid emotionId" },
            { status: 400 },
        );
    }
    const newEntry: DiaryItem = {
        id: Date.now().toString(),
        content: body.content,
        createdAt: new Date().toISOString(),
        emotionId,
    };
    diaryDB.push(newEntry);
    return NextResponse.json(newEntry, { status: 201 });
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { id, content, emotion } = body;
    const entry = diaryDB.find((e) => e.id === id);
    if (!entry) {
        return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    entry.content = content ?? entry.content;
    if (
        emotion &&
        ["SUPER_GREAT", "GREAT", "USUAL", "NOT_GREAT", "TERRIBLE"].includes(
            emotion,
        )
    ) {
        entry.emotionId = emotion;
    }
    return NextResponse.json(entry);
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const idx = diaryDB.findIndex((e) => e.id === id);
    if (idx === -1) {
        return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    const [deleted] = diaryDB.splice(idx, 1);
    return NextResponse.json(deleted);
}
