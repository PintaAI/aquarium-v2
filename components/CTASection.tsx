import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mulai Perjalanan Anda Sekarang</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Bergabunglah dengan ribuan pejuang lainnya dan wujudkan impian Anda di Korea.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Masukkan email Anda" type="email" />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Daftar</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Dengan mendaftar, Anda menyetujui syarat dan ketentuan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}