import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/pages/footer";
import { VerticalText } from "@/components/pages/vertical-text";
import { Analytics } from "@vercel/analytics/react";
import { twMerge } from "tailwind-merge";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Arch Studio",
	description:
		"Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={twMerge([
					leagueSpartan.className,
					"flex flex-col min-h-[100dvh]",
				])}
			>
				<Navbar />
				<VerticalText />
				<div className="relative grow">{children}</div>
				<Footer />
				<Analytics />
				<ToastContainer
					position="bottom-right"
					autoClose={2500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</body>
		</html>
	);
}
