interface SocialButtonProps {
    icon: React.ReactNode,
    text: string,
    onClick?: () => void;
    className?: string;
}


export function SocialButton({
    icon, 
    text, 
    onClick, 
    className=""
}: SocialButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full ${className} rounded-2xl py-4 px-6 flex items-center justify-center gap-3 hover:shadow-md transition-all font-semibold`}>
            {icon}
            <div className="hidden md:block">
                <span>{text}</span>
            </div>
            
        </button>
    )
}