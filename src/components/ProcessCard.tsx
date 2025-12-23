interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 bg-[#00BFD2] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">
            {number}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-poppins font-bold text-xl text-[#00114C] mb-3">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}