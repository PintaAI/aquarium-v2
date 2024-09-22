import { CardContent, Card } from "@/components/ui/card"
import { Globe, Users, BookOpen } from "lucide-react"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card">
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        {icon}
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-foreground">Fitur Utama</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <FeatureCard
            icon={<Globe className="h-12 w-12 text-primary" />}
            title="Kursus Bahasa Korea"
            description="Pelajari bahasa Korea dari dasar hingga mahir dengan instruktur berpengalaman."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-primary" />}
            title="Komunitas Supportif"
            description="Bergabung dengan ribuan pejuang Indonesia lainnya yang bekerja dan tinggal di Korea."
          />
          <FeatureCard
            icon={<BookOpen className="h-12 w-12 text-primary" />}
            title="Panduan Kerja"
            description="Dapatkan informasi lengkap tentang cara mendapatkan pekerjaan dan izin tinggal di Korea."
          />
        </div>
      </div>
    </section>
  )
}