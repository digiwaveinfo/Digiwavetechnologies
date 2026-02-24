import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Digiwave Technologies",
    description:
        "Join Digiwave Technologies — explore exciting career opportunities in AI, web development, mobile apps, cloud, and more. Grow with us!",
    openGraph: {
        title: "Careers | Digiwave Technologies",
        description:
            "Join Digiwave Technologies — explore exciting career opportunities in AI, web development, mobile apps, cloud, and more.",
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
