import Link from "next/link";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[3fr 1.5fr 1.5fr 1fr] md:grid-rows-[2fr 1fr] gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-12 text-center">
            <div className="flex flex-col gap-3 lg:items-start lg:text-start">
                <span className="text-md">Enjoying what we do? Buy&nbsp;us&nbsp;a&nbsp;drink!</span>
                <Link
                    className="mx-auto lg:mx-0 px-5 py-2.5 rounded-md whitespace-nowrap text-lg font-bold bg-gradient-to-br from-pink-600 via-violet-600 to-indigo-400 hover:scale-105 transition ease duration-300"
                    target="_blank"
                    rel="nofollow noopener"
                    href="https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA"
                >
                    Donate <span className="ml-2 text-xl">🍹</span>
                </Link>
            </div>
            <div className="my-4 md:my-0 flex-1">
                <span className="text-xl font-bold">Proudly provided by Felix&nbsp;∧&nbsp;Max</span>
            </div>
            <div className="lg:text-right">
                <Link className="text-md decoration-1 hover:underline decoration-indigo-400 underline-offset-[5px]" target="_blank" href="mailto:mail@truth-table.com">
                    Click here to leave some feedback!
                </Link>
            </div>
            <div className="md:col-span-3 text-sm text-neutral-400">
                <Link className="decoration-1 hover:underline decoration-indigo-400 underline-offset-[5px]" href="/legal">Legal Notice</Link>
                <span>&nbsp;&copy; {new Date().getFullYear()} All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
