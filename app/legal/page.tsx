import { Metadata } from "next";
import LegalNoticeContent from "./content";

export const metadata: Metadata = {
    title: "Legal",
};

const LegalNotice = () => {
    return <LegalNoticeContent />;
};

export default LegalNotice;
