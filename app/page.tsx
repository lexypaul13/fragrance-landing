'use client'

import { Inter, Playfair_Display } from 'next/font/google'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

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
    <main className={`${inter.className} min-h-screen relative overflow-hidden bg-black`}>
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent" />
      
      {/* Floating Perfume Bottles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Bottles */}
        <div className="absolute top-[2%] right-[30%] w-[500px] h-[500px] rotate-[15deg] opacity-[0.7] animate-float-slow">
          <Image
            src="/images/Versace Dylan Blue EDP 100ml (1).png"
            alt="Versace Dylan Blue"
            width={500}
            height={500}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        
        <div className="absolute top-[2%] left-[30%] w-[550px] h-[550px] -rotate-[15deg] opacity-[0.7] animate-float-slower">
          <Image
            src="/images/Eros Versace 200ml (1).png"
            alt="Eros Versace"
            width={550}
            height={550}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Side Bottles */}
        <div className="absolute top-[35%] right-[2%] w-[600px] h-[600px] rotate-[12deg] opacity-[0.7] animate-float">
          <Image
            src="/images/Dylan Blue Pour Homme EDT 50ml (1).png"
            alt="Dylan Blue Pour Homme"
            width={600}
            height={600}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="absolute top-[35%] left-[2%] w-[580px] h-[580px] -rotate-[12deg] opacity-[0.7] animate-float-slow">
          <Image
            src="/images/Luxury Perfume Bottles.png"
            alt="Luxury Perfume"
            width={580}
            height={580}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Bottom Bottles */}
        <div className="absolute bottom-[2%] right-[30%] w-[550px] h-[550px] rotate-[-15deg] opacity-[0.7] animate-float-slower">
          <Image
            src="/images/Luxury Perfume Bottles (2).png"
            alt="Luxury Perfume 2"
            width={550}
            height={550}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="absolute bottom-[2%] left-[30%] w-[520px] h-[520px] rotate-[15deg] opacity-[0.7] animate-float">
          <Image
            src="/images/Luxury Perfume Bottles (1).png"
            alt="Luxury Perfume 1"
            width={520}
            height={520}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto w-full text-center space-y-16">
          {/* Logo Mark */}
          <div className="mb-12 space-y-6">
            {/* iOS App Icon Style */}
            <div className="w-32 h-32 mx-auto rounded-[32px] bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 p-[2px] shadow-2xl relative animate-scale-in">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-600/20 rounded-full blur-xl animate-glow" />
              
              {/* Icon Container */}
              <div className="w-full h-full rounded-[30px] bg-gradient-to-br from-black via-black to-black/90 flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
                {/* Animated Neural Network Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-dotted-grid opacity-20" />
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-600/20 rounded-full blur-2xl animate-spin-slow" />
                  </div>
                </div>

                {/* Central Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Top Ring */}
                  <div className="w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 p-[1px] animate-pulse">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* AI Text */}
                  <div className="mt-1 text-base font-bold bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 text-transparent bg-clip-text tracking-wider">
                    SCENT SAVVY
                  </div>
                </div>
              </div>
            </div>

            {/* iOS App Style Label */}
            <div className="text-center space-y-2">
              <h2 className="text-white/90 font-medium text-xl tracking-wide">Scent Savvy</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400" />
                <p className="text-white/60 text-sm tracking-[0.2em] uppercase">Available Soon</p>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-purple-400" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-8 relative animate-fade-in">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-3xl -m-8 p-8" />
            <h1 className={`${playfair.className} relative text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight text-white`}>
              Your Signature
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-rose-200 to-amber-300 text-transparent bg-clip-text">
                Scent
              </span>
            </h1>
            <p className="relative text-xl md:text-2xl text-white font-light max-w-xl mx-auto leading-relaxed">
              Discover designer fragrances at a fraction of the price, perfectly matched to your style
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white font-light">
                    Save up to 70% on luxury fragrances
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white font-light">
                    AI-powered scent analysis & matching
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white font-light">
                    Verified quality alternatives only
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white font-light">
                    Personalized fragrance recommendations
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Form */}
          <div className="max-w-md mx-auto space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative hover-lift">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-lg bg-black/50 border border-white/10 backdrop-blur-xl focus:outline-none focus:border-white/20 transition-all duration-300 text-white placeholder-gray-400 hover:border-white/20"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-gradient-to-r from-amber-300 to-rose-300 text-black py-4 text-lg rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover-lift"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined' : 'Get Early Access'}
              </button>
            </form>

            <div className="bg-black/50 backdrop-blur-xl py-3 px-4 rounded-lg text-sm text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
              Join Scent Savvy's exclusive community of luxury fragrance enthusiasts
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-white/60">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}