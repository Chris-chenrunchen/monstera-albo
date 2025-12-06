'use client'

import { useState } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

// Modal component for coming soon message
const ComingSoonModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="mr-2">🌱</span>
          Coming Soon!
          <span className="ml-2">🌿</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This feature is currently under development. Stay tuned for updates! 🚀
        </p>
        <button
          onClick={onClose}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Got it! 👍
        </button>
      </div>
    </div>
  )
}

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <section className="relative h-[600px] flex items-center justify-center text-center text-white rounded-lg overflow-hidden">
          {/* 1. 背景图 */}
          <Image 
            src="/images/monstera-albo-hero.jpg" 
            alt="Monstera Albo" 
            fill 
            className="object-cover -z-20" // 放在最底层 
            priority 
          /> 
          
          {/* 2. 关键优化：黑色遮罩 */} 
          <div className="absolute inset-0 bg-black/50 -z-10" /> 
 
          {/* 3. 内容层 */} 
          <div className="relative z-10 max-w-4xl px-6"> 
            <h1 className="fade-in text-5xl md:text-7xl font-bold mb-6 drop-shadow-sm"> 
              Grow the Rare. <br/> 
              <span className="text-green-400">Master the Variegation.</span> {/* 强调色 */} 
            </h1> 
            
            <p className="fade-in fade-in-delay-1 text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto font-light"> 
              Stop Killing Your $500 Plant. Learn the secrets to nurturing stunning Monstera Albo with breathtaking white patterns.
            </p> 
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
              {/* 主按钮：高对比度 */} 
              <Link
                href="/blog/monstera-albo-care-guide"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition shadow-lg"
              > 
                Read Ultimate Care Guide 
              </Link> 
              
              {/* 次按钮：磨砂玻璃感 */} 
              <button
                onClick={() => setShowModal(true)}
                className="border border-white/80 bg-black/20 backdrop-blur-sm hover:bg-white/10 px-8 py-4 rounded-full font-medium transition text-white"
              > 
                Shop Rare Cuttings 
              </button> 
            </div> 
          </div> 
        </section>
        
        <div className="space-y-2 pt-12 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 md:text-4xl md:leading-10 dark:text-gray-100 drop-shadow-md">
            Latest Articles
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Discover expert tips, techniques, and insights for Monstera Albo enthusiasts
          </p>
        </div>
        
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            const displayImage = images && images.length > 0 ? images[0] : '/image/monstera-albo-hero.jpg'
            return (
              <li key={slug} className="py-8">
                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Link href={`/blog/${slug}`} aria-label={`Read more: "${title}"`}>
                        <div className="h-48 md:h-full w-full">
                          <img
                            src={displayImage}
                            alt={title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="p-6 md:p-8 md:w-2/3">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <h2 className="text-2xl md:text-3xl leading-8 font-bold tracking-tight mb-4">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400 mb-4">
                            {summary}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center group font-medium"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more 
                            <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium pt-8">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center group px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="All posts"
          >
            All Articles 
            <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-8">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <NewsletterForm />
          </div>
        </div>
      )}
      
      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
