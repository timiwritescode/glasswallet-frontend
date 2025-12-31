import { GoogleIcon } from "./GoogleIcon";
import { SocialButton } from "./SocialButton";


export function ContinueWithGoogleBtn({className}: {className?: string}) {
    return (
        <div className={`space-y-6 mb-6 ${className}`}>
            <SocialButton text="Continue with Google" icon={<GoogleIcon/>} className="border border-gray-300 shadow-md hover:shadow-lg"/>
        </div>
    )

}