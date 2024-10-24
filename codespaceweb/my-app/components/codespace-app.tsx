'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, Play, ChevronDown, Instagram, Github, Linkedin, Slack, Mail, ArrowRight, LogIn, ArrowLeft } from "lucide-react"

// Main App Component
export function CodespaceAppComponent() {
  const [currentPage, setCurrentPage] = useState('landing')

  const navigateToCodingLanguages = () => {
    setCurrentPage('codingLanguages')
  }

  const navigateToLanding = () => {
    setCurrentPage('landing')
  }

  return (
    <>
      {currentPage === 'landing' && (
        <CodespacePage onGetStarted={navigateToCodingLanguages} />
      )}
      {currentPage === 'codingLanguages' && (
        <CodingLanguagesPage onBackToLanding={navigateToLanding} />
      )}
    </>
  )
}

// Codespace Landing Page Component
function CodespacePage({ onGetStarted }: { onGetStarted: () => void }) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Sending email:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-green-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-600 text-opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Math.random() > 0.5 ? '{' : '}'}
          </div>
        ))}
      </div>
      <Header />
      <main className="flex-grow relative z-10">
        <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>
          <div className="container mx-auto px-8 py-4 text-center relative z-10">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600 drop-shadow-lg">
              <span>Learn.</span> <span>Understand.</span> <span>Code.</span>
            </h1>
            <p className="text-2xl mb-8">
              Built to make you extraordinarily productive,<br />
              Codespace is the best way to code with AI.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 rounded-full overflow-hidden relative group"
              >
                <span className="relative z-10">Try Codespace Free</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black rounded-full group flex items-center"
              >
                <Play className="h-5 w-5 mr-2" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Skill-based Training", description: "Tailored learning paths to enhance your coding skills effectively.", icon: "🎯" },
              { title: "Personalized Assignments & Tests", description: "Custom challenges and assessments to reinforce your learning.", icon: "📝" },
              { title: "Individual Progress Reports", description: "Detailed insights into each learner's journey and achievements.", icon: "📊" },
              { title: "24/7 AI Tutor Guidance", description: "Round-the-clock support from our AI tutor to assist with any coding queries.", icon: "🤖" },
              { title: "Interactive Courses", description: "Learn at your pace with hands-on tutorials.", icon: "💻" },
              { title: "Real Projects", description: "Build your portfolio with practical challenges.", icon: "🏗️" },
              { title: "24/7 Support", description: "Get help from AI tutor anytime.", icon: "🆘" },
              { title: "Exclusive Competitions", description: "Test your skills and win rewards.", icon: "🏆" },
              { title: "Career Tools", description: "Resources to help you land your dream job.", icon: "🚀" }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-code-pattern"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
                  <p className="text-gray-600 text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl text-white mb-4">Let's start coding and creating together! 🚀</p>
          </div>
        </div>
        <div className="container mx-auto px-8 py-16 text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-xl py-6 px-12 rounded-full overflow-hidden relative group"
            onClick={onGetStarted}
          >
            <span className="relative z-10 flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </Button>
        </div>
      </main>
      <Footer email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .bg-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .bg-code-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  )
}

// Coding Languages Page Component
function CodingLanguagesPage({ onBackToLanding }: { onBackToLanding: () => void }) {
  const [searchQuery, setSearchQuery] = useState('')

  const courses = [
    { name: 'C Programming', category: 'Language', rating: 4.5, timeToComplete: '6 weeks', image: 'https://www.pngkit.com/png/full/101-1010012_download-png.png' },
    { name: 'Python', category: 'Language', rating: 4.7, timeToComplete: '8 weeks', image: 'https://freepngimg.com/thumb/android/72537-icons-python-programming-computer-social-tutorial.png' },
    { name: 'JavaScript', category: 'Language', rating: 4.6, timeToComplete: '10 weeks', image: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png' },
    { name: 'Java', category: 'Language', rating: 4.4, timeToComplete: '12 weeks', image: 'https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png' },
    { name: 'Database Management', category: 'Database', rating: 4.3, timeToComplete: '8 weeks', image: 'https://tse3.mm.bing.net/th?id=OIP.QjuXtByLQg0o6E-bB6Uw7AHaEV&pid=Api&P=0&h=180' },
    { name: 'Web Development', category: 'Development', rating: 4.8, timeToComplete: '16 weeks', image: 'https://cdn-icons-png.flaticon.com/512/5738/5738031.png' },
    { name: 'App Development', category: 'Development', rating: 4.5, timeToComplete: '14 weeks', image: 'https://tse4.mm.bing.net/th?id=OIP.urLHYMYPFxkcs6AC4Io9vwHaHa&pid=Api&P=0&h=180' },
    { name: 'Machine Learning', category: 'AI', rating: 4.9, timeToComplete: '20 weeks', image: 'https://www.europlanet-society.org/wp-content/uploads/2020/11/Europlanet_Machine_Learning_Logo_Combined_Black.png' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-green-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      </div>

      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="relative z-10 flex-grow container mx-auto px-6 py-12">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-blue-400 transition-colors"
          onClick={onBackToLanding}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Landing Page
        </Button>
        
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Coding Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-[2px] rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 0, 255, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="p-6"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.8 }}
              >
                <div className="w-full h-40 bg-white rounded-lg flex items-center justify-center overflow-hidden mb-4">
                  <motion.img
                    src={course.image}
                    alt={course.name}
                    className="max-w-full max-h-full object-contain"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{course.name}</h2>
                <p className="text-gray-300 mb-2">{course.category}</p>
                <p className="text-yellow-400 mb-2">Rating: {course.rating} / 5</p>
                <p className="text-gray-300 mb-4">Time to complete: {course.timeToComplete}</p>
                <Button
                  className={`w-full ${
                    index === 0
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-gray-600 hover:bg-gray-700'
                  } transition-colors duration-300`}
                >
                  {index === 0 ? 'Start Now' : 'Coming Soon'}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

// Header Component
function Header({ searchQuery, setSearchQuery }: { searchQuery?: string, setSearchQuery?: (query: string) => void }) {
  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="container mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">C</span>
            </div>
            <span className="text-xl font-semibold">Codespace</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-white hover:text-black transition-colors">Pricing</Button>
            <Button variant="ghost" className="hover:bg-white hover:text-black transition-colors">Features</Button>
            <Button variant="ghost" className="hover:bg-white hover:text-black transition-colors">Docs</Button>
            <Button variant="ghost" className="hover:bg-white hover:text-black transition-colors">Careers</Button>
            <Button variant="ghost" className="hover:bg-white hover:text-black transition-colors">Blog</Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery?.(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Button variant="ghost" className="flex items-center hover:bg-white hover:text-black transition-colors">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button variant="ghost" className="flex items-center hover:bg-white hover:text-black transition-colors">
              <User className="mr-2 h-4 w-4" />
              Account
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

// Footer Component
function Footer({ email, setEmail, handleSubmit }: { email: string, setEmail: (email: string) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <footer className="bg-gray-800 text-white py-16 relative z-10">
      <div className="container mx-auto px-8">
        <div className="overflow-hidden whitespace-nowrap mb-12">
          <div className="animate-marquee inline-block">
            <span className="text-4xl font-bold mr-12">EAT</span>
            <span className="text-4xl font-bold mr-12">SLEEP</span>
            <span className="text-4xl font-bold mr-12">CODE</span>
            <span className="text-4xl font-bold mr-12">REPEAT</span>
          </div>
          <div className="animate-marquee inline-block">
            <span className="text-4xl font-bold mr-12">EAT</span>
            <span className="text-4xl font-bold mr-12">SLEEP</span>
            <span className="text-4xl font-bold mr-12">CODE</span>
            <span className="text-4xl font-bold mr-12">REPEAT</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <p className="text-lg">&copy; 2024 Codespace. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-200" aria-label="Instagram"><Instagram /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-200" aria-label="GitHub"><Github /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-200" aria-label="Slack"><Slack /></a>
            <a href="mailto:contact@codespace.com" className="text-2xl hover:text-blue-400 transition-colors duration-200" aria-label="Email us">
              <Mail />
            </a>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mr-2 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 py-3 px-4 rounded-full"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 rounded-full py-3 px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  )
}