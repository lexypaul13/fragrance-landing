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
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      return
    }

    setStatus('loading')
    
    try {
      console.log('Form submission started')
      
      const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21805721/2g2e6f2/'
      
      const data = {
        email,
        timestamp: new Date().toISOString(),
        source: 'landing_page',
        metadata: {
          platform: navigator.platform,
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'direct',
          url: window.location.href
        }
      }
      
      console.log('Data to be sent:', data)
      
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Required for Zapier webhooks
        body: JSON.stringify(data)
      })

      // With no-cors, we won't get response details
      // But the request will go through if successful
      console.log('Form submitted')
      setStatus('success')
      setEmail('')
      
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <main className={`${inter.className} min-h-screen relative overflow-hidden bg-black`}>
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      </div>

      {/* Floating Bottles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Row 1 */}
        <div className="absolute top-[5%] left-[5%] w-64 h-64 opacity-40 animate-bottle-float group">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-purple-500/10 to-transparent blur-2xl animate-glow" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer" />
          <div className="relative transform-gpu animate-bottle-rotate bottle-shadow">
            <Image
              src="/images/Luxury Perfume Bottles (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="absolute top-[8%] right-[15%] w-72 h-72 opacity-30 animate-bottle-float [animation-delay:1s] group">
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/20 via-rose-500/10 to-transparent blur-2xl animate-glow [animation-delay:1s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:2s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:2s] bottle-shadow">
            <Image
              src="/images/Luxury Perfume Bottles (2).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="absolute top-[25%] left-[20%] w-56 h-56 opacity-35 animate-bottle-float [animation-delay:2s] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-amber-500/10 to-transparent blur-2xl animate-glow [animation-delay:3s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:4s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:4s] bottle-shadow">
            <Image
              src="/images/Eros Versace 200ml (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="absolute top-[30%] right-[25%] w-64 h-64 opacity-25 animate-bottle-float [animation-delay:3s] group">
          <div className="absolute inset-0 bg-gradient-to-bl from-rose-500/20 via-purple-500/10 to-transparent blur-2xl animate-glow [animation-delay:5s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:6s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:6s] bottle-shadow">
            <Image
              src="/images/Versace Dylan Blue EDP 100ml (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="absolute top-[45%] left-[8%] w-72 h-72 opacity-30 animate-bottle-float [animation-delay:4s] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-rose-500/10 to-transparent blur-2xl animate-glow [animation-delay:7s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:8s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:8s] bottle-shadow">
            <Image
              src="/images/Luxury Perfume Bottles (2).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="absolute top-[50%] right-[10%] w-64 h-64 opacity-35 animate-bottle-float [animation-delay:5s] group">
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-amber-500/10 to-transparent blur-2xl animate-glow [animation-delay:9s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:10s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:10s] bottle-shadow">
            <Image
              src="/images/Luxury Perfume Bottles (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="absolute bottom-[30%] left-[15%] w-64 h-64 opacity-30 animate-bottle-float [animation-delay:6s] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-purple-500/10 to-transparent blur-2xl animate-glow [animation-delay:11s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:12s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:12s] bottle-shadow">
            <Image
              src="/images/Eros Versace 200ml (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="absolute bottom-[35%] right-[20%] w-56 h-56 opacity-25 animate-bottle-float [animation-delay:7s] group">
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/20 via-rose-500/10 to-transparent blur-2xl animate-glow [animation-delay:13s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:14s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:14s] bottle-shadow">
            <Image
              src="/images/Versace Dylan Blue EDP 100ml (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="absolute bottom-[15%] left-[25%] w-72 h-72 opacity-35 animate-bottle-float [animation-delay:8s] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-amber-500/10 to-transparent blur-2xl animate-glow [animation-delay:15s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:16s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:16s] bottle-shadow">
            <Image
              src="/images/Luxury Perfume Bottles (2).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="absolute bottom-[10%] right-[15%] w-64 h-64 opacity-30 animate-bottle-float [animation-delay:9s] group">
          <div className="absolute inset-0 bg-gradient-to-bl from-rose-500/20 via-purple-500/10 to-transparent blur-2xl animate-glow [animation-delay:17s]" />
          <div className="absolute inset-0 bottle-highlight animate-shimmer [animation-delay:18s]" />
          <div className="relative transform-gpu animate-bottle-rotate [animation-delay:18s] bottle-shadow">
            <Image
              src="/images/Luxury Perfume Bottles (1).png"
              alt="Luxury Perfume Bottle"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto w-full text-center space-y-16">
          {/* Logo Mark */}
          <div className="mb-12 space-y-6">
            {/* iOS App Icon Style */}
            <div className="w-32 h-32 mx-auto rounded-[32px] bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-purple-500/20 p-[2px] shadow-2xl relative animate-scale-in">
              {/* Icon Container */}
              <div className="w-full h-full rounded-[30px] bg-black flex items-center justify-center relative overflow-hidden">
                {/* Animated Neural Network Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-dotted-grid opacity-20" />
                </div>

                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* Central Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Top Ring */}
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-gradient-to-br from-rose-500/20 via-amber-500/10 to-purple-500/20 p-[1px] animate-pulse">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white/90" />
                    </div>
                  </div>
                  
                  {/* AI Text */}
                  <div className="mt-1 text-base font-bold text-white tracking-wider bg-gradient-to-r from-rose-500/90 via-amber-500/90 to-purple-500/90 bg-clip-text text-transparent">
                    SCENT SAVVY
                  </div>
                </div>
              </div>
            </div>

            {/* iOS App Style Label */}
            <div className="text-center space-y-2">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500/90 via-amber-500/90 to-purple-500/90 font-medium text-xl tracking-wide">Scent Savvy</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500/40" />
                <p className="text-white/80 text-sm tracking-[0.2em] uppercase">Available Soon</p>
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-8 relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 rounded-3xl -m-8 p-8" />
            <h1 className={`${playfair.className} relative text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight`}>
              <span className="inline-block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                Discover Your
                <br />
                Signature Scent
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-300/90 via-amber-300/90 to-purple-300/90 bg-clip-text text-transparent font-light">
                Without the Luxury Price Tag
              </span>
            </h1>
            <p className="relative text-xl md:text-2xl font-light max-w-xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-white/80 via-white/90 to-white/80 bg-clip-text text-transparent">
                AI-powered matching to find designer fragrance alternatives that suit your style and budget
              </span>
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg bg-gradient-to-r from-white/90 via-white to-white/90 bg-clip-text text-transparent font-light">
                    Save up to 70% on luxury fragrances
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg bg-gradient-to-r from-white/90 via-white to-white/90 bg-clip-text text-transparent font-light">
                    AI-powered scent analysis &amp; matching
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg bg-gradient-to-r from-white/90 via-white to-white/90 bg-clip-text text-transparent font-light">
                    Verified quality alternatives only
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg bg-gradient-to-r from-white/90 via-white to-white/90 bg-clip-text text-transparent font-light">
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
                  disabled={status === 'success'}
                />
                <div className="absolute inset-0 -z-10 bg-white/5 rounded-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              
              {/* Status Messages */}
              {status === 'error' && (
                <div className="text-rose-500 text-sm animate-fade-in">
                  Please check your email and try again
                </div>
              )}
              {status === 'success' && (
                <div className="text-emerald-500 text-sm animate-fade-in">
                  Welcome to Scent Savvy! Check your inbox for exclusive updates.
                </div>
              )}
              
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success' || !email}
                className="w-full bg-white text-black py-4 text-lg rounded-lg font-medium 
                  hover:opacity-90 hover:shadow-lg hover:shadow-white/20 
                  transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Successfully Joined!' : 'Join Now for Exclusive Early Access'}
              </button>
            </form>

            <div className="bg-black/50 backdrop-blur-xl py-3 px-4 rounded-lg text-sm text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
              Join Scent Savvy exclusive community of luxury fragrance enthusiasts
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