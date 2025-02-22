'use client'

import { Inter, Playfair_Display } from 'next/font/google'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal'],
})

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <main className={`${inter.className} min-h-screen relative overflow-hidden bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-900`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-black/80 to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-transparent via-white/[0.02] to-transparent" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_6s_linear_infinite]" style={{
        animation: 'shimmer 6s linear infinite',
        backgroundSize: '250% 250%',
        backgroundPosition: '0 0',
        '@keyframes shimmer': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-250% 0' }
        }
      }} />

      {/* Main Content */}
      <div className="relative px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto w-full text-center space-y-16">
          {/* Decorative Header Icon */}
          <div className="mb-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white/60" />
            </div>
          </div>

          {/* Header */}
          <div className="space-y-6">
            <h1 className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-[16ch] mx-auto text-white`}>
              Your Signature Scent,
              <br />
              Without the Luxury Price
            </h1>
            <p className="text-xl text-gray-300 backdrop-blur-sm">
              Smart fragrance matching for designer perfumes you'll love
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="text-lg text-gray-200">
                Save up to 70% on your favorite scents
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="text-lg text-gray-200">
                Precisely matched to luxury fragrances
              </div>
            </div>
          </div>

          {/* Email Form */}
          <div className="max-w-md mx-auto space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-white/10 px-6 py-3 text-lg rounded-sm bg-white/5 backdrop-blur-sm focus:outline-none focus:border-white/20 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-white placeholder-gray-400"
              />
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-white text-black py-3 text-lg rounded-sm hover:bg-gray-100 transition-colors shadow-sm"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined' : 'Get Early Access'}
              </button>
            </form>

            <div className="bg-white/5 backdrop-blur-sm py-2 text-sm rounded-sm text-gray-300">
              Join 500+ fragrance enthusiasts on the waitlist
            </div>

            <p className="text-sm text-gray-400">
              We respect your privacy and won't share your information.
            </p>
          </div>

          {/* Footer */}
          <p className="text-sm text-gray-400">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}