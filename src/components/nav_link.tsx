import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`nav-link ${
        isActive
          ? "text-primary font-semibold after:w-full"
          : "text-foreground hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}