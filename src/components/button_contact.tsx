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
            w-full
            inline-block px-6 py-4
            bg-blue-950/70 hover:bg-blue-900/50
            backdrop-blur-md
            rounded-2xl
            text-blue-50
            text-lg font-medium
            no-underline
            transition-all duration-100
            border border-blue-900/80
            shadow-lg hover:shadow-xl
            hover:-translate-y-0.5
        "
        >
            {children}
        </Link>
    );
};

export default ButtonContact;