import { Metadata } from "next";
import LegalNoticeContent from "./content";

export const metadata: Metadata = {
    title: "Truth Table Generator",
    description:
        "Rapidly convert all your Boolean expressions into a nice-looking (dark-themed) truth table",
};

const LegalNotice = () => {
    return <LegalNoticeContent />;
};

export default LegalNotice;
