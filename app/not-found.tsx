import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Not Found",
};

const NotFound = () => {
    return (
        <div className="max-w-3xl text-lg">
            Oops! It seems you&#039;ve reached a page that doesn&#039;t exist. Please check the URL or
            navigate back to our{" "}
            <Link className="italic" href={"/"}>
                homepage
            </Link>{" "}
            to find what you&#039;re looking for.
        </div>
    );
};

export default NotFound;
