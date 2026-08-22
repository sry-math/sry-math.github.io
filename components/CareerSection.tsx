"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

/**
 * "~는 다릅니다" 리듬을 이어받는 선언 (한 줄씩 순차 페이드인).
 * 1연 "비학군지와 학군지의 교육은 다릅니다"는 섹션 h2가 담당하므로 여기서 제외한다.
 */
const DECLARATIONS = [
    "고등 선행을 해본 것과 고등부를 가르쳐온 것은 다릅니다.",
    "교원자격증을 갖춘 강사와 그렇지 않은 강사는 다릅니다.",
];

const LEAD_LINES = [
    "2018년부터 9년간, 중·고등 수학을 가르쳐왔습니다.",
    "그중에서도 제가 가장 많은 시간과 경험을 쌓아온 분야는 고등 수학입니다.",
    "고등 내신의 출제 경향을 분석하고, 학교별 시험을 대비하고, 수능까지 이어지는 학습을 설계하는 것.",
    "제가 가장 자신 있게 말씀드릴 수 있는 영역입니다.",
];

interface CareerGroup {
    title: string;
    items: string[];
}

const LEFT_GROUPS: CareerGroup[] = [
    {
        title: "강사 경력",
        items: [
            "김현정수학",
            "구주이배송파본원",
            "오르고수학",
            "EPSILON MATH LAB 운영",
            "이룸학원",
            "메타수학",
        ],
    },
    {
        title: "지도 경험",
        items: ["공립중학교 수학 지도 경험", "사립고등학교 수학 지도 경험"],
    },
];

const RIGHT_GROUPS: CareerGroup[] = [
    {
        title: "자격",
        items: ["수학 정교사 자격증 보유"],
    },
    {
        title: "수상 및 이력",
        items: [
            "제25회 충청남도 수학·과학 경시대회 은상",
            "성균관대학교 수학경시대회 입상",
            "고려대학교 수학경시대회 입상",
            "충남대학교 수학경시대회 입상",
            "공주대학교 사범대학 국·영·수 경시대회 입상",
            "수학 영재교육원 수료",
        ],
    },
];

const REVEAL = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, ease: "easeOut" },
} as const;

const CareerColumn = ({ groups }: { groups: CareerGroup[] }) => (
    <div className={styles.careerCol}>
        {groups.map((group) => (
            <div key={group.title} className={styles.careerColBlock}>
                <h3 className={styles.careerColTitle}>{group.title}</h3>
                <ul className={styles.careerList}>
                    {group.items.map((item) => (
                        <li key={item} className={styles.careerItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export const CareerSection = () => {
    return (
        <section id="career" className={styles.careerSection}>
            <div className={styles.careerInner}>
                {/* ① 헤드 */}
                <motion.div {...REVEAL}>
                    <span className={styles.careerEyebrow}>강사 소개</span>
                    <h2 className={styles.careerTitle}>비학군지와 학군지의 교육은 다릅니다</h2>
                </motion.div>

                {/* ② 선언 블록 */}
                <motion.div
                    className={styles.careerDeclare}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                >
                    {DECLARATIONS.map((line) => (
                        <motion.p
                            key={line}
                            className={styles.careerDeclareLine}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" },
                                },
                            }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </motion.div>

                <motion.div className={styles.careerLeadGroup} {...REVEAL}>
                    {LEAD_LINES.map((line) => (
                        <p key={line} className={styles.careerLead}>
                            {line}
                        </p>
                    ))}
                </motion.div>

                {/* ③ 이력 2열 그리드 */}
                <motion.div className={styles.careerGrid} {...REVEAL}>
                    <CareerColumn groups={LEFT_GROUPS} />
                    <CareerColumn groups={RIGHT_GROUPS} />
                </motion.div>
            </div>
        </section>
    );
};

/**
 * CareerSection의 클로징 문장을 독립 다크 배너로 분리한 컴포넌트.
 * 바로 아래 ContactSection이 상담 CTA 역할을 하므로 버튼은 두지 않는다.
 */
export const CareerClosing = () => {
    return (
        <section className={styles.careerClosingBand}>
            <motion.p className={styles.careerClosingText} {...REVEAL}>
                고등 내신과 수능, 전문가에게 맡기시겠습니까?
            </motion.p>
        </section>
    );
};
