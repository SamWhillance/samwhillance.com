import Link from "next/link";
import { Mail } from "lucide-react";

interface ButtonContactProps {
    children: React.ReactNode;
}

export default function ButtonContact({ children }: ButtonContactProps) {
    return (
        <Link
            id="button_contact"
            href="/contact"
            className="btn btn-primary flex items-center gap-2 group"
        >
            <Mail className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            <span>{children}</span>
        </Link>
    );
}