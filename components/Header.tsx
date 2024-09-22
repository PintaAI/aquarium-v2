"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flag, Menu } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link className="flex items-center justify-center" href="#">
            <Flag className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-bold text-primary">PejuangKorea</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <NavLink href="#">Beranda</NavLink>
            <NavLink href="#">Kursus</NavLink>
            <NavLink href="#">Komunitas</NavLink>
            <NavLink href="#">Tentang Kami</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:inline-flex" variant="outline">
              Masuk
            </Button>
            <Button className="hidden md:inline-flex">Daftar</Button>
            <Button className="md:hidden" variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#" mobile>Beranda</NavLink>
            <NavLink href="#" mobile>Kursus</NavLink>
            <NavLink href="#" mobile>Komunitas</NavLink>
            <NavLink href="#" mobile>Tentang Kami</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button className="w-full" variant="outline">Masuk</Button>
            </div>
            <div className="mt-3 px-5">
              <Button className="w-full">Daftar</Button>
            </div>
            <div className="mt-3 px-5 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const baseClasses = "font-medium transition-colors hover:text-primary"
  const mobileClasses = mobile
    ? "block px-3 py-2 text-base"
    : "text-sm"

  return (
    <Link className={`${baseClasses} ${mobileClasses}`} href={href}>
      {children}
    </Link>
  )
}