import styles from "../app/page.module.css";

interface Cell {
    main: string;
    sub?: string;
}

const HEAD = ["구분", "월", "화", "수", "목", "금", "토", "일"];

const ROWS: { time: string; cells: Cell[] }[] = [
    {
        time: "10:00~16:15",
        cells: [
            { main: "미적분1", sub: "여름 방학" },
            { main: "확통", sub: "여름 방학" },
            { main: "미적분1", sub: "여름 방학" },
            { main: "확통", sub: "여름 방학" },
            { main: "미적분1", sub: "여름 방학" },
            { main: "고3 정규" },
            { main: "기하", sub: "13:30~16:30" },
        ],
    },
    {
        time: "17:30~22:00",
        cells: [
            { main: "고1 S" },
            { main: "고2 A" },
            { main: "고3" },
            { main: "고2 A" },
            { main: "고1 S" },
            { main: "개별 맞춤 클리닉" },
            { main: "" },
        ],
    },
];

export const ScheduleTable = () => {
    return (
        <div className={styles.scheduleWrap}>
            <table className={styles.scheduleTable}>
                <thead>
                    <tr>
                        {HEAD.map((h, i) => (
                            <th key={i}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ROWS.map((row, ri) => (
                        <tr key={ri}>
                            <th scope="row">{row.time}</th>
                            {row.cells.map((c, ci) => (
                                <td key={ci}>
                                    {c.main ? (
                                        <>
                                            <span className={styles.scheduleMain}>{c.main}</span>
                                            {c.sub && <span className={styles.scheduleSub}>{c.sub}</span>}
                                        </>
                                    ) : (
                                        <span className={styles.scheduleEmpty}>–</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
