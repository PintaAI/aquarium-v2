import { CardContent, Card } from "@/components/ui/card"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string | null;
}

interface TestimonialProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="bg-background">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4">{testimonial.content}</p>
        <p className="font-semibold">{testimonial.name}, {testimonial.role}</p>
      </CardContent>
    </Card>
  )
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Testimoni</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}