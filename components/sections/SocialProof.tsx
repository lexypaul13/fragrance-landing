import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

export function SocialProof() {
  const stats = [
    { number: '10,000+', label: 'Fragrances Analyzed' },
    { number: '99%', label: 'Match Accuracy' },
    { number: '70%', label: 'Average Savings' },
  ]

  return (
    <div className="space-y-24">
      <div className="grid md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`${playfair.className} text-5xl md:text-6xl mb-4`}>{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="aspect-[2/1] relative overflow-hidden">
        <Image
          src="/images/social.jpg"
          alt="Luxury fragrance collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
          <div className="max-w-2xl text-center">
            <h2 className={`${playfair.className} text-4xl md:text-5xl mb-6`}>
              Experience Luxury for Less
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of fragrance enthusiasts who have discovered their perfect scent through our AI-powered platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 