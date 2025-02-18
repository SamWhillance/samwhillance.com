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
        backdrop-blur
        backdrop-saturate-100 
        backdrop-contrast-100
        border border-white/30 rounded-2xl
        text-black text-lg font-medium no-underline
        shadow-lg hover:shadow-xl
        transition-all duration-100
        hover:translate-y-1
        hover:scale-95
        hover:backdrop-blur-sm
      "
    >
      {children}
    </Link>
  );
};

export default NavLink;

/*

inline-block px-6 py-4
        bg-white/30 hover:bg-white/50
        backdrop-blur-md
        rounded-2xl
        text-black
        text-lg font-medium
        no-underline
        transition-all duration-100
        border border-white/20
        shadow-lg hover:shadow-xl
        hover:-translate-y-0.5


bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
*/