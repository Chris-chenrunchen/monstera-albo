import varietiesData from '@/data/varietiesData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Monstera Albo Varieties' })

export default function Varieties() {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-green-100 text-green-800'
      case 'Uncommon':
        return 'bg-blue-100 text-blue-800'
      case 'Rare':
        return 'bg-purple-100 text-purple-800'
      case 'Extremely Rare':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCareLevelColor = (careLevel: string) => {
    switch (careLevel) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Monstera Albo Varieties
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Explore the fascinating world of variegated Monstera varieties, from common to extremely rare specimens
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {varietiesData.map((d) => (
              <div key={d.name} className="w-full p-4 md:w-1/2 lg:w-1/3">
                <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="relative h-48 w-full">
                    {d.imgSrc ? (
                      <img
                        src={d.imgSrc}
                        alt={d.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <span className="text-gray-400 dark:text-gray-500">No Image</span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${getRarityColor(d.rarity)}`}>
                        {d.rarity}
                      </span>
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${getCareLevelColor(d.careLevel)}`}>
                        {d.careLevel}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {d.name}
                    </h2>
                    <p className="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                      {d.scientificName}
                    </p>
                    <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                      {d.priceRange}
                    </p>
                    <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 line-clamp-3">
                      {d.description}
                    </p>
                    <a
                      href={d.href || '#'}
                      className="text-base font-medium leading-6 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      Learn more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
