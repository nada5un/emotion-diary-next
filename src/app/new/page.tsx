"use client";

import Editor from "@/components/Editor";
import Header from "@/components/Header";
import React from "react";

function NewPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
            <Header
                title="New Diary"
                leftButton={{
                    iconName: "chevron_left",
                    onClick: () => {
                        // Navigate back to previous page
                        window.history.back();
                    },
                }}
            />
            <Editor />
        </div>
    );
}

export default NewPage;
