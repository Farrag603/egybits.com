"use client";
import { useRouter, usePathname } from "next/navigation";
import { Link as LinkScroll } from "react-scroll";

interface SmartNavLinkProps {
  to: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  activeClass?: string;
  spy?: boolean;
}

const SmartNavLink = ({
  to,
  offset = 0,
  children,
  className,
  onClick,
  activeClass,
  spy,
}: SmartNavLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // If we're on the home page, use react-scroll for smooth scrolling
  if (pathname === "/") {
    return (
      <LinkScroll
        to={to}
        offset={offset}
        className={className}
        activeClass={activeClass}
        spy={spy}
        onClick={onClick}
      >
        {children}
      </LinkScroll>
    );
  }

  // If we're on other pages, navigate to home page with hash
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();

    // Add a small delay to prevent jarring transitions
    setTimeout(() => {
      router.push(`/#${to}`);
    }, 50);
  };

  return (
    <a href={`/#${to}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmartNavLink;
