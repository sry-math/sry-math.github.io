"use client";

const CANDIDATES = [
    "1509228468518-180dd4864904",
    "1635070041078-e363dbe005cb",
    "1503676260728-1c00da094a0b",
    "1434030216411-0b793f4b4173",
    "1456513080510-7bf3a84b82f8",
    "1596495577886-d920f1fb7238",
    "1518133910546-b6c2fb7d79e3",
    "1596496181871-9681eacf9764",
    "1633613286848-e6f43bbafb8d",
];

export default function PreviewPage() {
    return (
        <div style={{ background: "#f5f1ea", minHeight: "100vh", padding: "3rem 2rem" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "2rem" }}>
                스톡 이미지 후보 (Unsplash)
            </h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1.5rem",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                {CANDIDATES.map((id, i) => (
                    <div key={id} style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                        <img
                            src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=70`}
                            alt={`후보 ${i + 1}`}
                            style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block", background: "#e2e8f0" }}
                        />
                        <div style={{ padding: "0.75rem 1rem", fontWeight: 700, color: "#0f172a" }}>
                            후보 {i + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
