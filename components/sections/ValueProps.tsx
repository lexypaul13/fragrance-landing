import { typography } from '@/lib/design-system'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

export function ValueProps() {
  const features = [
    {
      title: "Smart Matching",
      description: "Our AI analyzes thousands of fragrances to find your perfect match",
      image: "/images/features/matching.jpg"
    },
    {
      title: "Premium Quality",
      description: "Authentic luxury fragrances at a fraction of retail prices",
      image: "/images/features/quality.jpg"
    },
    {
      title: "Personalized",
      description: "Get recommendations tailored to your unique preferences",
      image: "/images/features/personalized.jpg"
    },
    {
      title: "Sustainable",
      description: "Eco-friendly packaging and responsible sourcing practices",
      image: "/images/features/sustainable.jpg"
    }
  ]

  return (
    <div className="space-y-16">
      <div className="max-w-2xl">
        <h2 className={`${playfair.className} text-4xl md:text-5xl mb-6`}>
          Experience the future of fragrance discovery
        </h2>
        <p className="text-xl text-gray-600">
          Using advanced AI technology to revolutionize how you find and experience luxury fragrances.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 space-y-4">
            <div className="aspect-[2/1] relative mb-6">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 