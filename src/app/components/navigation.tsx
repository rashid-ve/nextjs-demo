"use client";

import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "English", href: "/articles/breaking-news-145?lang=en" },
  { name: "French", href: "/articles/breaking-news-145?lang=fr" },
  { name: "Product1", href: "/products/1" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center p-4">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? "font-bold mr-4" : "mr-4 text-blue-500"}
          >
            {link.name}
          </Link>
        );
      })}
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
