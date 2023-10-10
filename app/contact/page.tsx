import { ContactDetails, ContactHero } from "@/views/contact/components";
import { ContactForm } from "@/views/contact/components/ContactForm";

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
