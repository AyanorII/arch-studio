import { Metadata } from "next";

import { ContactDetails, ContactHero } from "@/views/contact/components";
import { ContactForm } from "@/views/contact/components/ContactForm";

export const metadata: Metadata = {
	title: "Contact | Arch Studio",
};

const ContactPage = () => {
	return (
		<div>
			<ContactHero />
			<ContactDetails />
			<ContactForm />
		</div>
	);
};

export default ContactPage;
