import { Eye, EyeOff, type LucideIcon } from "lucide-react";
import { useState } from "react";

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

    const [isVisible, setIsVisible] = useState(false)
    const inputType = type === 'password' && isVisible ? 'text' : type;

    return (
        <div>
            <label className="block text-sm mb-2 text-gray-500 font-medium">{label}</label>
            <div className="relative">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                <input 
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-200 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    required 
                />

                {type === 'password' && (
                    <button
                        type="button"
                        onClick={() => setIsVisible(!isVisible)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                    >
                        {isVisible ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                    </button>
                )}
            </div>
        </div>
    );
}