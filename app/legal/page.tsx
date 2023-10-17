import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Legal",
};

const Page = () => {
    return (
        <div className="flex flex-col lg:flex-row flex-wrap gap-x-0 lg:gap-x-16 gap-y-8 ">
            <aside className="basis-0 flex-grow flex-shrink p-6 leading-8 rounded-lg shadow dark:bg-neutral-800/80 border border-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-800">
                <h1 className="font-bold text-2xl">Impressum</h1>
                <h2 className="mt-8 mb-2 font-bold text-lg">Angaben gemäß § 5 TMG</h2>
                <p>Max Lohrmann</p>
                <p>Reithohl 1a</p>
                <p>76229 Karlsruhe, Deutschland</p>

                <h2 className="mt-8 mb-2 font-bold text-lg">Kontakt</h2>
                <Link
                    href="tel:+4971134160675"
                    target={"_blank"}
                    className="underline underline-offset-4 decoration-2 decoration-dashed decoration-indigo-400"
                >
                    Telefon: +49 711 34160675
                </Link>
                <p>Telefax: +49 711 95338338</p>
                <Link
                    href="mailto:mail@truth-table.com"
                    target={"_blank"}
                    className="underline underline-offset-4 decoration-2 decoration-dashed decoration-indigo-400"
                >
                    E-Mail: mail@truth-table.com
                </Link>
            </aside>
            <aside className="basis-0 flex-grow flex-shrink p-6 leading-8 rounded-lg shadow dark:bg-neutral-800/80 border border-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-800">
                <h1 className="font-bold text-2xl">Legal Notice</h1>
                <h2 className="mt-8 mb-2 font-bold text-lg">
                    This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV
                </h2>
                <p>Max Lohrmann</p>
                <p>Reithohl 1a</p>
                <p>76229 Karlsruhe, Germany</p>

                <h2 className="mt-8 mb-2 font-bold text-lg">Contact</h2>
                <Link
                    href="tel:+4971134160675"
                    target={"_blank"}
                    className="underline underline-offset-4 decoration-2 decoration-dashed decoration-indigo-400"
                >
                    Phone: +49 711 34160675
                </Link>
                <p>Fax: +49 711 95338338</p>
                <Link
                    href="mailto:mail@truth-table.com"
                    target={"_blank"}
                    className="underline underline-offset-4 decoration-2 decoration-dashed decoration-indigo-400"
                >
                    E-Mail: mail@truth-table.com
                </Link>
            </aside>
        </div>
    );
};

export default Page;
