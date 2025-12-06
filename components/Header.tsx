'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import SupportModal from './SupportModal'
import { useState } from 'react'

const Header = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false)
  
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-4 border-b border-gray-200 dark:border-gray-700'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <>
      <header className={headerClass}>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between group">
            <div className="mr-3 transform transition-transform duration-200 group-hover:scale-110 h-10 w-10 flex items-center justify-center">
              <img 
                src="/logo.svg" 
                alt="Monstera Albo Logo"
                className="h-full w-full object-contain"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-8 text-2xl font-semibold sm:block group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-1 leading-5 sm:-mr-6 sm:space-x-2">
          <div className="no-scrollbar hidden items-center gap-x-3 overflow-x-auto sm:flex md:max-w-none lg:max-w-none">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => {
                if (link.isModal) {
                  return (
                    <button
                      key={link.title}
                      onClick={() => setIsSupportModalOpen(true)}
                      className="hover:text-primary-500 dark:hover:text-primary-400 mx-1 font-medium text-gray-900 dark:text-gray-100 text-base relative group transition-all duration-200"
                    >
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </button>
                  )
                } else {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="hover:text-primary-500 dark:hover:text-primary-400 mx-1 font-medium text-gray-900 dark:text-gray-100 text-base relative group transition-all duration-200"
                    >
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 dark:bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </Link>
                  )
                }
              })}
          </div>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onCloseAction={() => setIsSupportModalOpen(false)} 
      />
    </>
  )
}

export default Header
