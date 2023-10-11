"use client";

import CustomLink from "@/components/CustomLink";
import { useState } from "react";

type Language = "DE" | "EN";

const LegalNoticeContent = () => {
    const [language, setLanguage] = useState<Language>("DE");

    if (language === "DE") {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <input
                    type="button"
                    className="mt-4 mb-12 cursor-pointer"
                    onClick={() => setLanguage("EN")}
                    value="Click here to change to the English version"
                />

                <h1 className="mb-8">Impressum</h1>

                <h2 className="mb-2">Angaben gemäß § 5 TMG</h2>
                <p>Max Lohrmann</p>
                <p>Reithohl 1a</p>
                <p>76229 Karlsruhe, Deutschland</p>

                <h2 className="mt-4 mb-2">Kontakt</h2>
                <CustomLink href="tel:+4971134160675" target={"_blank"}>
                    Telefon: +49 711 34160675
                </CustomLink>
                <p>Telefax: +49 711 95338338</p>
                <CustomLink href="mailto:mail@truth-table.com" target={"_blank"}>
                    E-Mail: mail@truth-table.com
                </CustomLink>
            </div>
        );
    } else {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <input
                    type="button"
                    className="mt-4 mb-12 cursor-pointer"
                    onClick={() => setLanguage("DE")}
                    value="Klicken Sie hier, um zur deutschen Version zu wechseln"
                />

                <h1 className="mb-8">Legal Notice</h1>

                <h2 className="mb-2">
                    This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV
                </h2>
                <p>Max Lohrmann</p>
                <p>Reithohl 1a</p>
                <p>76229 Karlsruhe, Germany</p>

                <h2 className="mt-4 mb-2">Contact</h2>
                <CustomLink href="tel:+4971134160675" target={"_blank"}>
                    Phone: +49 711 34160675
                </CustomLink>
                <p>Fax: +49 711 95338338</p>
                <CustomLink href="mailto:mail@truth-table.com" target={"_blank"}>
                    E-Mail: mail@truth-table.com
                </CustomLink>
            </div>
        );
    }
};

export default LegalNoticeContent;
