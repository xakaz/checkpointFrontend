import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="w-100 flex justify-center items-center">{children}</main>
        </>
    )
}