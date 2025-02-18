import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="
        inline-block px-6 py-4
        bg-blue-100/30 hover:bg-blue-200/50
        backdrop-blur-md
        rounded-2xl
        text-blue-50
        text-lg font-medium
        no-underline
        transition-all duration-100
        border border-blue-200/20
        shadow-lg hover:shadow-xl
        hover:-translate-y-0.5
      "
    >
      {children}
    </Link>
  );
};

export default NavLink;