interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {icon && (
        <div className="mb-4 text-[#00BFD2]">
          {icon}
        </div>
      )}
      <h3 className="font-inter font-semibold text-lg text-[#00114C] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}