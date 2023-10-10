import Link from "next/link";

import { SectionHeading } from "@/components/pages/SectionHeading";
import { Container } from "@/components/ui";
import { MoveRightIcon } from "lucide-react";

import { CONTACT_INFO } from "../contants";
import { Map } from "./Map";

export const ContactDetails = () => {
	return (
		<section>
			<Container className="relative mb-52 lg:mt-28">
				<div className="w-16 border" />
				<div className="gap-36 pt-16 lg:flex lg:pt-20">
					<SectionHeading className="mb-10">
						{"Contact\nDetails"}
					</SectionHeading>
					<div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-40">
						{CONTACT_INFO.map(({ office, email, address, phone }) => (
							<div
								key={office}
								className="items-center justify-between md:flex lg:block"
							>
								<div>
									<h3 className="mb-4 text-lg font-bold text-[#60636D]">
										{office}
									</h3>
									<ul>
										<li className="flex gap-2">
											<p>Mail:</p>
											<a href={`mailto:${email}`}>{email}</a>
										</li>
										<li className="flex gap-2">
											<p>Address:</p>
											<p>{address}</p>
										</li>
										<li className="flex gap-2">
											<p>Phone:</p>
											<a href={`tel:${phone}`}>{phone}</a>
										</li>
									</ul>
								</div>
								<Link href="#" className="mt-10 flex gap-6 text-lg font-bold">
									View on Map <MoveRightIcon />
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="relative mt-16 aspect-video w-full md:mt-56 lg:mt-40">
					<Map />
				</div>
			</Container>
		</section>
	);
};
