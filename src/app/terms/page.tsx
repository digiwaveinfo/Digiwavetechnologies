import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Read the Terms & Conditions of Digiwave Technologies. Learn about our service agreement, payment terms, intellectual property rights, and more.",
    openGraph: {
        title: "Terms & Conditions | Digiwave Technologies",
        description:
            "Read the Terms & Conditions of Digiwave Technologies governing access to and use of our digital, AI, cloud, development, and marketing services.",
        type: "website",
        url: "/terms",
    },
};

const sections = [
    {
        number: "1",
        title: "Introduction",
        content: [
            'These Terms & Conditions ("Terms") govern your access to and use of the website and all digital, AI, cloud, development, and marketing services offered by Digiwave Technologies ("the Company"). By accessing the website or engaging our services, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, you should discontinue use of the website and services immediately.',
            "These Terms form a legally binding agreement between the Company and the Client/User.",
        ],
    },
    {
        number: "2",
        title: "Definitions",
        content: ["For the purpose of these Terms:"],
        list: [
            "<strong>Company</strong> refers to Digiwave Technologies, its employees, partners, and authorized representatives.",
            "<strong>Client</strong> refers to any individual, organization, or entity that purchases or uses our services.",
            "<strong>User</strong> refers to any visitor accessing the website.",
            "<strong>Services</strong> include AI development, web and mobile application development, digital marketing, cloud solutions, CRM/SaaS solutions, automation, maintenance, and consulting services.",
            '<strong>Website</strong> refers to <a href="https://digiwavetechnologies.in/" class="text-[#00BFD2] hover:underline" target="_blank" rel="noopener noreferrer">https://digiwavetechnologies.in/</a>.',
            "<strong>Agreement</strong> means these Terms along with any proposal, quotation, or written contract signed between the Company and the Client.",
        ],
    },
    {
        number: "3",
        title: "Scope of Services",
        content: [
            "The Company provides professional technology and digital services including but not limited to:",
        ],
        list: [
            "AI and machine learning solution development",
            "Website design and web application development",
            "Mobile app development (Android, iOS, cross-platform)",
            "Digital marketing, SEO, and paid advertising services",
            "Cloud deployment, DevOps, and automation solutions",
            "CRM, ERP, and SaaS-based product development",
            "Hosting, maintenance, and technical support services",
        ],
        footer:
            "The exact scope, deliverables, timelines, and pricing will be clearly defined in a separate proposal, quotation, or service agreement approved by the Client.",
    },
    {
        number: "4",
        title: "Eligibility",
        content: [
            "By using our website or services, you confirm that:",
        ],
        list: [
            "You are at least 18 years of age",
            "You have the legal authority to enter into a binding agreement",
            "You will comply with all applicable laws, regulations, and IT policies",
        ],
    },
    {
        number: "5",
        title: "User Responsibilities",
        content: ["Users and Clients agree to:"],
        list: [
            "Provide accurate, current, and complete information",
            "Use the services only for lawful business purposes",
            "Avoid uploading malicious, illegal, or infringing content",
            "Not attempt unauthorized access, hacking, or system disruption",
            "Comply with all applicable Indian IT, data protection, and cyber laws",
        ],
        footer:
            "Failure to comply may result in suspension or termination of services.",
    },
    {
        number: "6",
        title: "Service Agreement & Project Execution",
        list: [
            "Each project will be governed by a separate written proposal or contract",
            "Work will commence only after formal approval and receipt of agreed advance payment",
            "Any change in project scope, features, or timeline must be approved through a documented change request process",
            "Additional changes may result in revised cost and delivery schedule",
        ],
    },
    {
        number: "7",
        title: "Payment Terms",
        list: [
            "All pricing will be specified in the official quotation or agreement",
            "Advance payment may be required before project initiation",
            "Large projects may follow milestone-based payment schedules",
            "All payments are subject to applicable GST and statutory taxes",
            "Delayed payments may lead to project hold, late fees, or service suspension",
            "Unless otherwise agreed in writing, payments made are non-refundable",
        ],
    },
    {
        number: "8",
        title: "Intellectual Property Rights",
        list: [
            "All source code, designs, documentation, and project assets remain the property of the Company until full payment is received",
            "Upon complete payment, ownership of final deliverables is transferred to the Client, unless otherwise specified in the agreement",
            "Third-party components, frameworks, plugins, or APIs remain subject to their respective licenses",
            "The Company retains the right to showcase completed work in its portfolio, unless restricted by a written confidentiality agreement",
        ],
    },
    {
        number: "9",
        title: "Confidentiality & Data Protection",
        content: [
            "The Company is committed to protecting client data and confidential information:",
        ],
        list: [
            "All proprietary information shared during the project will be kept confidential",
            "Confidential data will not be disclosed without written consent, unless required by law",
            "Signed Non-Disclosure Agreements (NDAs) will take precedence over this clause",
            "Confidentiality obligations will continue even after project completion or termination",
        ],
    },
    {
        number: "10",
        title: "Third-Party Tools, APIs & Integrations",
        content: [
            "Our services may involve third-party platforms such as hosting providers, APIs, payment gateways, or marketing platforms (e.g., Google, Meta, Zoho).",
            "The Company is not responsible for:",
        ],
        list: [
            "Downtime or outages of third-party services",
            "Changes in policies, pricing, or functionality of external platforms",
            "Data loss or issues caused by third-party systems",
        ],
    },
    {
        number: "11",
        title: "Service Levels & Support",
        list: [
            "Support and maintenance services will be provided as per the selected plan or agreement",
            "Response time and resolution time may vary depending on issue complexity",
            "Support does not include major feature additions unless covered under a separate contract",
        ],
    },
    {
        number: "12",
        title: "Limitation of Liability",
        content: ["To the fullest extent permitted by law:"],
        list: [
            "The Company shall not be liable for indirect, incidental, special, or consequential damages",
            "Total liability shall not exceed the total fees paid by the Client for the specific service",
            "The Company is not responsible for business losses, loss of data, loss of profits, or reputational damages",
        ],
    },
    {
        number: "13",
        title: "Disclaimer of Warranties",
        content: [
            'All services are provided on an "as is" and "as available" basis.',
            "The Company does not guarantee:",
        ],
        list: [
            "Specific SEO rankings, traffic growth, or lead generation",
            "Revenue increase or business performance outcomes",
            "Error-free, uninterrupted, or fully secure operation of digital systems",
        ],
    },
    {
        number: "14",
        title: "Termination of Services",
        content: [
            "<strong>Termination by Client:</strong> The Client may terminate services by providing written notice. All completed work and pending payments will remain payable.",
            "<strong>Termination by Company:</strong> The Company reserves the right to terminate or suspend services if:",
        ],
        list: [
            "Terms are violated",
            "Payments are overdue",
            "Misuse, illegal activity, or security risks are detected",
        ],
        footer:
            "Any termination will not affect payment obligations for completed milestones.",
    },
    {
        number: "15",
        title: "Refund & Cancellation Policy",
        list: [
            "Advance and milestone payments are generally non-refundable",
            "Custom development, digital marketing, and AI services are non-refundable once work has started",
            "Refunds, if applicable, will be processed only as per written agreement terms",
        ],
    },
    {
        number: "16",
        title: "Data Backup & Security Disclaimer",
        list: [
            "Clients are responsible for maintaining regular backups of their data and content",
            "While we implement industry-standard security practices, we cannot guarantee absolute protection against cyber threats, hacking, or unforeseen technical failures",
            "The Company shall not be liable for data loss beyond reasonable control",
        ],
    },
    {
        number: "17",
        title: "Indemnification",
        content: [
            "The Client agrees to indemnify and hold the Company harmless from any claims, losses, damages, or legal liabilities arising due to:",
        ],
        list: [
            "Misuse of services",
            "Violation of intellectual property rights",
            "Illegal or unauthorized content provided by the Client",
        ],
    },
    {
        number: "18",
        title: "Force Majeure",
        content: [
            "The Company shall not be held responsible for delays or failure in performance due to events beyond reasonable control, including but not limited to:",
        ],
        list: [
            "Natural disasters, pandemics, or fire",
            "Government restrictions or regulatory changes",
            "Internet outages, cyber incidents, or infrastructure failures",
            "War, strikes, or civil disturbances",
        ],
    },
    {
        number: "19",
        title: "Governing Law & Jurisdiction",
        content: [
            "These Terms shall be governed and interpreted in accordance with the laws of India.",
            "All disputes shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.",
        ],
    },
    {
        number: "20",
        title: "Dispute Resolution",
        content: ["In case of any dispute or disagreement:"],
        list: [
            "Parties will first attempt to resolve the matter through mutual discussion",
            "If unresolved, mediation or arbitration may be initiated as per applicable laws",
            "A formal legal notice must be served before initiating court proceedings",
        ],
    },
    {
        number: "21",
        title: "Amendments to Terms",
        content: [
            "The Company reserves the right to update or modify these Terms at any time.",
            "Updated Terms will be posted on this page with a revised effective date. Continued use of the website or services after updates will constitute acceptance of the revised Terms.",
        ],
    },
    {
        number: "22",
        title: "Contact Information",
        content: [
            "For any queries regarding these Terms & Conditions, please contact:",
        ],
    },
];

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full py-24 md:py-32 bg-teal-950 overflow-hidden flex flex-col justify-center items-center">
                    {/* Background image */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "url('/about/hero-background.webp')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    {/* Glow accents */}
                    <div className="w-6 h-[924px] left-[1067px] top-[-55px] absolute origin-top-left rotate-[43deg] bg-cyan-300 blur-3xl opacity-30" />
                    <div className="w-6 h-[924px] left-[418px] top-[-151px] absolute origin-top-left rotate-[43deg] bg-cyan-300 blur-3xl opacity-30" />

                    <div className="relative z-10 text-center px-4">
                        <h2 className="text-[#00BFD2] text-lg md:text-xl font-medium font-['Poppins'] mb-4">
                            Legal
                        </h2>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] max-w-[800px] leading-tight mx-auto">
                            Terms & Conditions
                        </h1>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-12 md:py-20">
                    <Container className="max-w-[900px]">
                        {/* Company info header */}
                        <div className="mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#00BFD2]/5 to-[#00114C]/5 border border-[#00BFD2]/15">
                            <p className="text-[#00114C] font-semibold text-lg md:text-xl font-['Inter'] mb-1">
                                Digiwave Technologies
                            </p>
                            <p className="text-[#0F0F10]/70 text-sm md:text-base font-['Inter'] leading-relaxed">
                                Website:{" "}
                                <a
                                    href="https://digiwavetechnologies.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00BFD2] hover:underline"
                                >
                                    https://digiwavetechnologies.in/
                                </a>
                            </p>
                            <p className="text-[#0F0F10]/70 text-sm md:text-base font-['Inter'] leading-relaxed">
                                Registered Office: Harekrishna Complex, B/h. City Gold Cinema,
                                009, Ashram Rd, Ahmedabad, Gujarat 380009
                            </p>
                        </div>

                        {/* Sections */}
                        <div className="space-y-10">
                            {sections.map((section) => (
                                <div key={section.number} className="group">
                                    <h2 className="flex items-start gap-3 text-[#00114C] text-xl md:text-2xl font-bold font-['Inter'] mb-4">
                                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#00BFD2]/10 text-[#00BFD2] text-base font-bold shrink-0 mt-0.5">
                                            {section.number}
                                        </span>
                                        {section.title}
                                    </h2>

                                    <div className="pl-12">
                                        {section.content?.map((para, i) => (
                                            <p
                                                key={i}
                                                className="text-[#0F0F10]/80 text-base font-normal font-['Inter'] leading-7 mb-3"
                                                dangerouslySetInnerHTML={{ __html: para }}
                                            />
                                        ))}

                                        {section.list && (
                                            <ul className="space-y-2.5 my-3">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="mt-2 w-2 h-2 rounded-full bg-[#00BFD2] shrink-0" />
                                                        <span
                                                            className="text-[#0F0F10]/80 text-base font-normal font-['Inter'] leading-7"
                                                            dangerouslySetInnerHTML={{ __html: item }}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {section.footer && (
                                            <p className="text-[#0F0F10]/80 text-base font-normal font-['Inter'] leading-7 mt-3">
                                                {section.footer}
                                            </p>
                                        )}

                                        {/* Contact info for last section */}
                                        {section.number === "22" && (
                                            <div className="mt-4 p-5 rounded-xl bg-[#00114C]/5 space-y-2">
                                                <p className="text-[#00114C] font-semibold text-base font-['Inter']">
                                                    Digiwave Technologies
                                                </p>
                                                <p className="text-[#0F0F10]/70 text-sm font-['Inter']">
                                                    Email:{" "}
                                                    <a
                                                        href="mailto:info@digiwavetechnologies.in"
                                                        className="text-[#00BFD2] hover:underline"
                                                    >
                                                        info@digiwavetechnologies.in
                                                    </a>
                                                </p>
                                                <p className="text-[#0F0F10]/70 text-sm font-['Inter']">
                                                    Phone:{" "}
                                                    <a
                                                        href="tel:+919428418099"
                                                        className="text-[#00BFD2] hover:underline"
                                                    >
                                                        +91 9428418099
                                                    </a>
                                                </p>
                                                <p className="text-[#0F0F10]/70 text-sm font-['Inter']">
                                                    Registered Address: Harekrishna Complex, B/h. City
                                                    Gold Cinema, 009, Ashram Rd, Ahmedabad, Gujarat
                                                    380009
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
