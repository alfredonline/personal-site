import { NAME } from "../../config";
import { Badge } from "./Badge";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🌍</span>
                <Badge 
                  text="Check out LinguaTrackr" 
                  href="https://linguatrackr.com" 
                  className="bg-yellow-100 text-yellow-800 border-yellow-200"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Building {" "}
                <span className="text-yellow-600">language learning tools</span>{" "}
                for language learners.
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Hi, I&apos;m <span className="font-semibold text-gray-900">{NAME}</span> — a software engineer who builds powerful language learning platforms like <a href="https://linguatrackr.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">Linguatrackr</a> and <a href="https://cognimon.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">Cognimon</a> that help learners track their progress and achieve their goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Progress Tracking</h3>
                    <p className="text-sm text-gray-600">Built Linguatrackr for immersion tracking</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Analytics</h3>
                    <p className="text-sm text-gray-600">Created Cognimon for learning insights</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Projects
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-yellow-600 hover:text-yellow-600 transition-colors duration-200"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-200 via-yellow-100 to-blue-100 shadow-2xl">
                <Image 
                  src="/images/headshot.png"
                  alt="Headshot Image"
                  fill
                  className="object-cover rounded-full border-2 border-yellow-100 border-offset-2"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-10 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-10 translate-y-40 -translate-x-40"></div>
    </div>
  );
};
