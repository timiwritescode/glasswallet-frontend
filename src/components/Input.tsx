import type { LucideIcon } from "lucide-react";

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    icon: LucideIcon;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(
    {
        label, 
        type, 
        placeholder, 
        icon: Icon, 
        value, 
        onChange}: InputProps
) {
    return (
        <div>
            <label className="block text-sm mb-2 text-gray-700 font-medium">{label}</label>
            <div className="relative">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                required />
            </div>
        </div>
    );
}