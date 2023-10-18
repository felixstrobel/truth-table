import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Legal",
};

const Page = () => {
    return (
        <div className="flex flex-col flex-wrap gap-x-0 gap-y-8 lg:flex-row lg:gap-x-16 ">
            <aside className="flex-shrink flex-grow basis-0 rounded-lg border border-neutral-400 p-6 leading-8 shadow dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:bg-neutral-800">
                <h1 className="text-2xl font-bold">Impressum</h1>
                <h2 className="mb-2 mt-8 text-lg font-bold">Angaben gemäß § 5 TMG</h2>
                <p>Max Lohrmann</p>
                <p>Reithohl 1a</p>
                <p>76229 Karlsruhe, Deutschland</p>

                <h2 className="mb-2 mt-8 text-lg font-bold">Kontakt</h2>
                <Link
                    href="tel:+4971134160675"
                    target={"_blank"}
                    className="underline decoration-indigo-400 decoration-dashed decoration-2 underline-offset-4"
                >
                    Telefon: +49 711 34160675
                </Link>
                <p>Telefax: +49 711 95338338</p>
                <Link
                    href="mailto:mail@truth-table.com"
                    target={"_blank"}
                    className="underline decoration-indigo-400 decoration-dashed decoration-2 underline-offset-4"
                >
                    E-Mail: mail@truth-table.com
                </Link>
            </aside>
            <aside className="flex-shrink flex-grow basis-0 rounded-lg border border-neutral-400 p-6 leading-8 shadow dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:bg-neutral-800">
                <h1 className="text-2xl font-bold">Legal Notice</h1>
                <h2 className="mb-2 mt-8 text-lg font-bold">
                    This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV
                </h2>
                <p>Max Lohrmann</p>
                <p>Reithohl 1a</p>
                <p>76229 Karlsruhe, Germany</p>

                <h2 className="mb-2 mt-8 text-lg font-bold">Contact</h2>
                <Link
                    href="tel:+4971134160675"
                    target={"_blank"}
                    className="underline decoration-indigo-400 decoration-dashed decoration-2 underline-offset-4"
                >
                    Phone: +49 711 34160675
                </Link>
                <p>Fax: +49 711 95338338</p>
                <Link
                    href="mailto:mail@truth-table.com"
                    target={"_blank"}
                    className="underline decoration-indigo-400 decoration-dashed decoration-2 underline-offset-4"
                >
                    E-Mail: mail@truth-table.com
                </Link>
            </aside>
        </div>
    );
};

export default Page;
