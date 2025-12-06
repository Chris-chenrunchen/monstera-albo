'use client'

import { useState } from 'react'
import varietiesData from '@/data/varietiesData'
import type { Variety } from '@/data/varietiesData'
import Image from 'next/image'

// Modal component
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

// Rarity badge component
const RarityBadge = ({ rarity }: { rarity: string }) => {
  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
      case 'Rare':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Ultra Rare':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRarityStyles(rarity)}`}>
      {rarity}
    </span>
  )
}

// Variety card component
const VarietyCard = ({ variety, onShowModal }: { variety: Variety; onShowModal: () => void }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={variety.imageUrl}
          alt={variety.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Use placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{variety.name}</h3>
          <RarityBadge rarity={variety.rarity} />
        </div>
        
        <div className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">{variety.priceRange}</div>
        
        <ul className="text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          {variety.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <button 
          onClick={onShowModal}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Find on Etsy
        </button>
      </div>
    </div>
  )
}

export default function VarietiesClient() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showModal, setShowModal] = useState(false)
  
  const filters = [
    { id: 'All', label: 'All' },
    { id: 'Albo', label: 'White Variegation' },
    { id: 'Aurea', label: 'Yellow Variegation' },
    { id: 'Rare', label: 'Ultra Rare' }
  ]
  
  const filteredVarieties = activeFilter === 'All' 
    ? varietiesData 
    : varietiesData.filter(variety => {
        if (activeFilter === 'Rare') {
          return variety.rarity === 'Ultra Rare'
        }
        return variety.category === activeFilter
      })

  return (
    <>
      {/* Filter tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Variety card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVarieties.map((variety) => (
          <VarietyCard 
            key={variety.id} 
            variety={variety} 
            onShowModal={() => setShowModal(true)}
          />
        ))}
      </div>
      
      {filteredVarieties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No varieties found for this filter.
          </p>
        </div>
      )}
      
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}