interface ContactStepProps {
  stepNumber: number;
  title: string;
}

export default function ContactStep({ stepNumber, title }: ContactStepProps) {
  return (
    <div className="flex items-center gap-4 relative">
      <div className="w-10 h-10 bg-white rounded-full border-2 border-[#00114C] flex items-center justify-center flex-shrink-0 relative z-10">
        <span className="text-[#00114C] font-inter font-medium text-sm">
          {stepNumber.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[#00114C] font-inter text-base">
        {title}
      </span>
    </div>
  );
}