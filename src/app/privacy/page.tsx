import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the Privacy Policy of Digiwave Technologies. Learn how we collect, use, protect, and handle your personal data and information.",
    openGraph: {
        title: "Privacy Policy | Digiwave Technologies",
        description:
            "Read the Privacy Policy of Digiwave Technologies — our commitment to protecting your data and privacy.",
        type: "website",
        url: "/privacy",
    },
};

const sections = [
    {
        number: "1",
        title: "Introduction",
        content: [
            "Digiwave Technologies is committed to protecting the privacy and security of personal and business information shared with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital, AI, and development services.",
            "By accessing our website or engaging our services, you agree to the practices described in this Privacy Policy.",
        ],
    },
    {
        number: "2",
        title: "Information We Collect",
        content: [
            "We may collect the following categories of information:",
        ],
        subsections: [
            {
                subtitle: "a) Personal Information",
                list: [
                    "Full name",
                    "Email address",
                    "Phone number",
                    "Job title or designation",
                ],
            },
            {
                subtitle: "b) Business Information",
                list: [
                    "Company name",
                    "Business address",
                    "Project requirements and related communication",
                ],
            },
            {
                subtitle: "c) Billing & Transaction Information",
                list: [
                    "Billing address",
                    "Payment details (processed via secure third-party gateways)",
                    "GST or tax-related information",
                ],
            },
            {
                subtitle: "d) Technical & Usage Data",
                list: [
                    "IP address",
                    "Browser type and version",
                    "Device information",
                    "Pages visited and interaction data",
                ],
            },
            {
                subtitle: "e) Cookies & Analytics Data",
                list: [
                    "Website usage patterns",
                    "Session data",
                    "Analytics insights to improve services and user experience",
                ],
            },
        ],
    },
    {
        number: "3",
        title: "How We Collect Data",
        content: ["We collect data through:"],
        list: [
            "Website contact forms and inquiry forms",
            "Email or phone communications",
            "Service agreements, proposals, and contracts",
            "Cookies and tracking technologies",
            "Third-party integrations and analytics tools",
        ],
    },
    {
        number: "4",
        title: "Purpose of Data Collection",
        content: [
            "Your information is collected and used for legitimate business purposes, including:",
        ],
        list: [
            "Providing and managing our services",
            "Communicating project updates and support responses",
            "Processing invoices and payments",
            "Sending marketing or promotional communications (with consent)",
            "Complying with legal and regulatory requirements",
            "Improving website performance and customer experience",
        ],
    },
    {
        number: "5",
        title: "Legal Basis for Processing",
        content: [
            "We process personal data based on the following lawful grounds:",
        ],
        list: [
            "<strong>Consent:</strong> When you voluntarily submit information or opt-in to communications",
            "<strong>Contract Performance:</strong> To deliver agreed services and fulfill contractual obligations",
            "<strong>Legal Obligation:</strong> To comply with tax, regulatory, or statutory requirements",
            "<strong>Legitimate Interest:</strong> For business operations, service improvement, and security monitoring",
        ],
    },
    {
        number: "6",
        title: "Data Sharing & Disclosure",
        content: [
            "We do not sell or rent personal data. Information may be shared only in the following circumstances:",
        ],
        list: [
            "With trusted payment gateway providers for transaction processing",
            "With hosting providers, cloud services, and technical vendors supporting our operations",
            "With government or legal authorities if required by law or regulatory process",
            "With third-party tools (e.g., analytics, CRM, or marketing platforms) necessary for service delivery",
        ],
        footer:
            "All such sharing is done with appropriate safeguards and confidentiality obligations.",
    },
    {
        number: "7",
        title: "Data Retention Policy",
        content: [
            "We retain personal and business data only for as long as necessary to:",
        ],
        list: [
            "Fulfill the purposes outlined in this Policy",
            "Comply with legal, accounting, and regulatory requirements",
            "Resolve disputes and enforce agreements",
        ],
        footer:
            "Data that is no longer required will be securely deleted or anonymized.",
    },
    {
        number: "8",
        title: "Data Security Measures",
        content: [
            "We implement reasonable technical and organizational measures to protect your data, including:",
        ],
        list: [
            "SSL encryption and secure communication protocols",
            "Restricted access control to authorized personnel only",
            "Secure servers and firewalls",
            "Regular system monitoring and security updates",
        ],
        footer:
            "However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    },
    {
        number: "9",
        title: "User Rights",
        content: [
            "Subject to applicable Indian laws, users have the right to:",
        ],
        list: [
            "Access the personal data we hold about them",
            "Request correction or update of inaccurate information",
            "Request deletion of their personal data (where legally permissible)",
            "Withdraw consent for marketing communications",
            "Request data portability, where technically feasible",
        ],
        footer:
            "Requests can be made by contacting us using the details provided below.",
    },
    {
        number: "10",
        title: "Cookies Policy",
        content: [
            "Our website uses cookies and similar technologies to enhance user experience and analyze website performance.",
        ],
        subsections: [
            {
                subtitle: "Types of Cookies Used",
                list: [
                    "<strong>Essential Cookies:</strong> Necessary for website functionality and security",
                    "<strong>Analytics Cookies:</strong> Help us understand user behavior and improve performance",
                    "<strong>Marketing Cookies:</strong> Used for relevant promotional communication and remarketing",
                ],
            },
        ],
        footer:
            "Users can control or disable cookies through browser settings; however, some website features may not function properly if cookies are disabled.",
    },
    {
        number: "11",
        title: "Third-Party Links",
        content: [
            "Our website may contain links to external websites or platforms. We are not responsible for the privacy practices, content, or policies of such third-party websites. Users are advised to review their respective privacy policies before sharing any personal information.",
        ],
    },
    {
        number: "12",
        title: "International Data Transfers",
        content: [
            "In certain cases, data may be stored or processed on servers located outside India (for example, cloud hosting providers). In such situations, we ensure appropriate safeguards, contractual protections, and industry-standard security measures are in place to protect your information.",
        ],
    },
    {
        number: "13",
        title: "Children's Privacy",
        content: [
            "Our services are intended for business users and individuals aged 18 years or above. We do not knowingly collect personal information from children under the age of 18. If such data is discovered, it will be promptly deleted.",
        ],
    },
    {
        number: "14",
        title: "Changes to This Privacy Policy",
        content: [
            "We reserve the right to update or modify this Privacy Policy at any time to reflect legal, technical, or business changes. Updated versions will be posted on this page with a revised effective date. Continued use of the website after such updates constitutes acceptance of the revised policy.",
        ],
    },
    {
        number: "15",
        title: "Grievance Officer (As per Indian Law)",
        content: [
            "In accordance with applicable Indian data protection and IT regulations, the Company has appointed a Grievance Officer to address privacy-related concerns.",
            "All grievances will be acknowledged within a reasonable time and resolved within the period prescribed under applicable laws.",
        ],
    },
    {
        number: "16",
        title: "Compliance Statement",
        content: [
            "This Privacy Policy follows key Indian data protection and IT laws:",
        ],
        list: [
            "<strong>Information Technology Act, 2000:</strong> Governs electronic data, cybersecurity, and legal protection against unauthorized access, data breaches, and misuse of digital information.",
            "<strong>SPDI Rules, 2011:</strong> Regulates collection and protection of sensitive personal data (such as financial and confidential information) and requires consent, purpose limitation, and reasonable security practices.",
            "<strong>Digital Personal Data Protection Act, 2023:</strong> Establishes rules for lawful processing of personal data, user consent, data security, and user rights such as access, correction, and deletion.",
        ],
        footer:
            "All data handling practices of Digiwave Technologies are aligned with the applicable data protection framework of India.",
    },
];

export default function PrivacyPage() {
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
                            Privacy Policy
                        </h1>
                    </div>
                </section>

                {/* Privacy Content */}
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

                                        {section.subsections?.map((sub, si) => (
                                            <div key={si} className="mt-4 mb-3">
                                                <h3 className="text-[#00114C] text-base md:text-lg font-semibold font-['Inter'] mb-2">
                                                    {sub.subtitle}
                                                </h3>
                                                <ul className="space-y-2.5">
                                                    {sub.list.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <span className="mt-2 w-2 h-2 rounded-full bg-[#00BFD2] shrink-0" />
                                                            <span
                                                                className="text-[#0F0F10]/80 text-base font-normal font-['Inter'] leading-7"
                                                                dangerouslySetInnerHTML={{ __html: item }}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {section.footer && (
                                            <p className="text-[#0F0F10]/80 text-base font-normal font-['Inter'] leading-7 mt-3">
                                                {section.footer}
                                            </p>
                                        )}

                                        {/* Grievance Officer contact info */}
                                        {section.number === "15" && (
                                            <div className="mt-4 p-5 rounded-xl bg-[#00114C]/5 space-y-2">
                                                <p className="text-[#00114C] font-semibold text-base font-['Inter']">
                                                    Grievance Officer: Digiwave Technologies
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
                                                    Address: Harekrishna Complex, B/h. City Gold
                                                    Cinema, 009, Ashram Rd, Ahmedabad, Gujarat 380009
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
