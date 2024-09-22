import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6">
          <p className="text-xs text-muted-foreground">© 2023 PejuangKorea. Seluruh hak cipta dilindungi.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
              Kebijakan Privasi
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
              Syarat dan Ketentuan
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}