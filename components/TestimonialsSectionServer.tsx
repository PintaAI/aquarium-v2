'use client'

import { useEffect, useState } from 'react'
import { TestimonialsSection } from './TestimonialsSection'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string | null;
}

export function TestimonialsSectionServer() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await fetch('/api/testimonials')
      const data = await response.json()
      setTestimonials(data)
    }

    fetchTestimonials()
  }, [])

  return <TestimonialsSection testimonials={testimonials} />
}