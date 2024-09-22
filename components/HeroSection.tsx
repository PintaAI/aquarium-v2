import { Button } from "@/components/ui/button"
import React from 'react';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
              Ayo Proses G2G tanpa LPK! Ke Korea Selatan 
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Bergabunglah dengan komunitas PejuangKorea untuk belajar bahasa Korea, mendapatkan pekerjaan, dan
              menjalani kehidupan yang sukses di Korea Selatan
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Mulai Belajar</Button>
            <Button variant="outline" size="lg">Gabung Komunitas</Button>
          </div>
        </div>
      </div>
    </section>
  )
}