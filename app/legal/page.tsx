import { Metadata } from "next";
import LegalNoticeContent from "./content";

export const metadata: Metadata = {
    title: "Truth Table Generator | Legal notice",
    description:
        "Rapidly convert all your Boolean expressions into a nice-looking (dark-themed) truth table",
    openGraph: {
        type: "website",
        title: "Truth Table Generator",
        description:
            "Rapidly convert all your Boolean expressions into a nice-looking (dark-themed) truth table",
        url: "https://truth-table.com",
    },
    twitter: {
        card: "summary_large_image",
        title: "Truth Table Generator",
        description:
            "Rapidly convert all your Boolean expressions into a nice-looking (dark-themed) truth table",
    },
};

const LegalNotice = () => {
    return <LegalNoticeContent />;
};

export default LegalNotice;
