import Link from "next/link";
import CustomLink from "../CustomLink";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[3fr 1.5fr 1.5fr 1fr] md:grid-rows-[2fr 1fr] md:gap-x-8">
            <div className="flex flex-col justify-items-center md:justify-items-start justify-self-center md:justify-self-start text-center md:text-start">
                <span>Do you like what you see? Buy us a drink!</span>
                <Link
                    className="mt-2 p-6 w-36 " //TODO: fix and linear(to-br, pink.300, purple.800) und hover: linear(to-br, pink.400, purple.900)
                    target="_blank"
                    rel="nofollow noopener"
                    href={"https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA"}
                >
                    Donate <span className="ml-2 text-xl">🍹</span>
                </Link>
            </div>
            <div className="justify-self-center self-center md:self-start text-center row-[3 / 4] md:row-auto">
                <p className="text-xl font-bold">Proudly provided by Felix ∧ Max</p>
            </div>
            <div className="justify-self-center md:justify-self-end self-center md:self-start text-center md:text-right">
                <CustomLink href={"mailto:mail@truth-table.com"} target={"_blank"}>
                    Click here to leave some feedback!
                </CustomLink>
            </div>
            <div className="flex flex-row mt-4 justify-items-center text-lg col-span-1 md:col-span-3 justify-self-center self-end">
                <CustomLink href="/legal">Legal Notice</CustomLink>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
