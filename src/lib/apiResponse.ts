import { NextResponse } from "next/server";

export function successResponse<T>(data: T, status = 200) {
    return NextResponse.json(
        {
            success: true,
            data,
        },
        { status },
    );
}

export function errorResponse({
    error,
    message,
    status = 400,
}: {
    error: string;
    message: string;
    status?: number;
}) {
    return NextResponse.json(
        {
            success: false,
            error,
            message,
            statusCode: status,
        },
        { status },
    );
}
