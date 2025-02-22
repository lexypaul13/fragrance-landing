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
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto w-full text-center space-y-16">
          {/* Logo Mark */}
          <div className="mb-12 space-y-6">
            {/* iOS App Icon Style */}
            <div className="w-32 h-32 mx-auto rounded-[32px] bg-white/5 p-[2px] shadow-2xl relative animate-scale-in">
              {/* Icon Container */}
              <div className="w-full h-full rounded-[30px] bg-black flex items-center justify-center relative overflow-hidden">
                {/* Animated Neural Network Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-dotted-grid opacity-10" />
                </div>

                {/* Central Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Top Ring */}
                  <div className="w-16 h-16 rounded-full border-2 border-white/10 bg-black p-[1px] animate-pulse">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
                  
                  {/* AI Text */}
                  <div className="mt-1 text-base font-bold text-white/90 tracking-wider">
                    SCENT SAVVY
                  </div>
                </div>
              </div>
            </div>

            {/* iOS App Style Label */}
            <div className="text-center space-y-2">
              <h2 className="text-white/90 font-medium text-xl tracking-wide">Scent Savvy</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <p className="text-white/60 text-sm tracking-[0.2em] uppercase">Available Soon</p>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-8 relative animate-fade-in">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-3xl -m-8 p-8" />
            <h1 className={`${playfair.className} relative text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight text-white`}>
              Discover Your
              <br />
              <span className="text-white">
                Signature Scent
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-white/80">Without the Luxury Price Tag</span>
            </h1>
            <p className="relative text-xl md:text-2xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
              AI-powered matching to find designer fragrance alternatives that suit your style and budget
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white/80 font-light">
                    Save up to 70% on luxury fragrances
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white/80 font-light">
                    AI-powered scent analysis &amp; matching
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white/80 font-light">
                    Verified quality alternatives only
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover-lift">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-lg text-white/80 font-light">
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