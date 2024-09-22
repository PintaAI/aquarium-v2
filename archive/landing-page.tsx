import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { Flag, Globe, Users, BookOpen } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Flag className="h-6 w-6 text-red-600" />
          <span className="ml-2 text-lg font-bold">PejuangKorea</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Beranda
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Kursus
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Komunitas
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tentang Kami
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Wujudkan Impian Anda di Korea
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-100 md:text-xl">
                  Bergabunglah dengan komunitas PejuangKorea untuk belajar bahasa Korea, mendapatkan pekerjaan, dan
                  menjalani kehidupan yang sukses di Korea Selatan.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Mulai Belajar</Button>
                <Button variant="outline">Gabung Komunitas</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Fitur Utama</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Globe className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Kursus Bahasa Korea</h3>
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Pelajari bahasa Korea dari dasar hingga mahir dengan instruktur berpengalaman.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Komunitas Supportif</h3>
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Bergabung dengan ribuan pejuang Indonesia lainnya yang bekerja dan tinggal di Korea.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <BookOpen className="h-12 w-12 text-red-500" />
                  <h3 className="text-xl font-bold">Panduan Kerja</h3>
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Dapatkan informasi lengkap tentang cara mendapatkan pekerjaan dan izin tinggal di Korea.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimoni</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                    "Berkat PejuangKorea, saya berhasil mendapatkan pekerjaan impian di Seoul. Kursus bahasanya sangat
                    membantu dan komunitasnya luar biasa supportif!"
                  </p>
                  <p className="font-semibold">Siti Nurhaliza, Jakarta</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                    "Platform ini membantu saya beradaptasi dengan kehidupan di Korea. Saya menemukan teman-teman baru
                    dan mendapatkan banyak tips berharga."
                  </p>
                  <p className="font-semibold">Budi Santoso, Surabaya</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2023 PejuangKorea. Seluruh hak cipta dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat dan Ketentuan
          </Link>
        </nav>
      </footer>
    </div>
  )
}