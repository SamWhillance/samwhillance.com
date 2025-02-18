import Link from 'next/link';

interface ButtonContactProps {
    children: React.ReactNode;
}

const ButtonContact = ({ children }: ButtonContactProps) => {
    return (
        <Link
            id="button_contact"
            href={'/contact'}
            className="
            spark-container
            w-full
            inline-block px-6 py-4
            bg-black/70
            backdrop-blur
            backdrop-saturate-100 
            backdrop-contrast-100
            rounded-2xl
            text-white
            text-lg font-medium
            no-underline
            transition-all duration-200
            border border-black/20
            shadow-lg hover:shadow-xl
            hover:translate-y-1
            hover:scale-95
            hover:backdrop-blur-sm
            hover:bg-black/50
        "
        >
            {children}
        </Link>
    );
};

export default ButtonContact;

