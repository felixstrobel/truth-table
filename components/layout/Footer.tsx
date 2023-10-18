import Link from "next/link";

const Footer = () => {
    return (
        <div className="grid-rows-[3fr 1.5fr 1.5fr 1fr] md:grid-rows-[2fr 1fr] grid grid-cols-1 gap-x-8 gap-y-6 text-center md:grid-cols-3 md:gap-x-12 md:gap-y-12">
            <div className="order-2 flex flex-col gap-3 md:order-1 lg:items-start lg:text-start">
                <span className="text-md">Enjoying what we do? Buy&nbsp;us&nbsp;a&nbsp;drink!</span>
                <Link
                    className="ease mx-auto whitespace-nowrap rounded-md bg-gradient-to-br from-pink-600 via-violet-600 to-indigo-400 px-5 py-2.5 text-lg font-bold text-white transition duration-300 hover:scale-105 lg:mx-0"
                    target="_blank"
                    rel="nofollow noopener"
                    href="https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA"
                >
                    Donate <span className="ml-2 text-xl">🍹</span>
                </Link>
            </div>
            <div className="order-1 my-4 flex-1 md:order-2 md:my-0">
                <span className="text-xl font-bold">Proudly provided by Felix&nbsp;∧&nbsp;Max</span>
            </div>
            <div className="order-3 md:order-3 lg:text-right">
                <Link
                    className="text-md decoration-indigo-400 decoration-1 underline-offset-[5px] hover:underline"
                    target="_blank"
                    href="mailto:mail@truth-table.com"
                >
                    Click here to leave some feedback!
                </Link>
            </div>
            <div className="order-4 text-sm text-neutral-600 dark:text-neutral-400 md:col-span-3">
                <Link
                    className="decoration-indigo-400 decoration-1 underline-offset-[5px] hover:underline"
                    href="/legal"
                >
                    Legal Notice
                </Link>
                <span>&nbsp;&copy; {new Date().getFullYear()} All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
