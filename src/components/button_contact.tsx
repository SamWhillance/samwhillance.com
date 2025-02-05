import Link from 'next/link';

interface ButtonContactProps {
    children: React.ReactNode;
}

const ButtonContact = ({ children }: ButtonContactProps) => {
    return (
        <Link
            href={'/contact'}
            className="
            w-full
        inline-block px-6 py-4
        bg-black/70 hover:bg-black/50
        backdrop-blur-md
        rounded-2xl
        text-white
        text-lg font-medium
        no-underline
        transition-all duration-100
        border border-black/80
        shadow-lg hover:shadow-xl
        hover:-translate-y-0.5
      "
        >
            {children}
        </Link>
    );
};

export default ButtonContact;