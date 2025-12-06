import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'
import VarietiesClient from './VarietiesClient'

export const metadata = genPageMetadata({ 
  title: 'Monstera Albo Varieties',
  description: 'Explore different varieties of Monstera Albo plants, including Albo Borsigiana, Thai Constellation, and rare variegated forms.'
})

export default function Varieties() {
  return (
    <>
      <div className="bg-gradient-to-br from-green-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Discover the Rare Varieties
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the fascinating world of variegated Monstera plants. From classic white Albo to ultra-rare specimens, 
              each variety offers unique beauty and characteristics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <VarietiesClient />
      </div>
    </>
  )
}