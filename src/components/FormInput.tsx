interface FormInputProps {
  type: 'text' | 'email' | 'tel' | 'password';
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export default function FormInput({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '' 
}: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-6 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent placeholder:text-gray-400 font-inter ${className}`}
    />
  );
}