export interface Variety {
  id: string
  name: string
  priceRange: string
  features: string[]
  rarity: 'Common' | 'Rare' | 'Ultra Rare'
  category: 'Albo' | 'Aurea' | 'Rare'
  imageUrl: string
}

const varietiesData: Variety[] = [
  // White Category (Albo)
  {
    id: 'albo-variegata',
    name: 'Monstera deliciosa Albo Variegata',
    priceRange: '$125-$240',
    features: [
      'Classic white variegation patterns',
      'Unique variegation on each leaf',
      'Stable growth with proper care',
      'Highly sought after by collectors'
    ],
    rarity: 'Rare',
    category: 'Albo',
    imageUrl: '/images/varieties/albo-variegata.jpg'
  },
  {
    id: 'albo-borsigiana',
    name: 'Monstera Albo Borsigiana',
    priceRange: '$125-$240',
    features: [
      'Smaller leaf size than standard Albo',
      'More compact growth habit',
      'Distinct white sectoral variegation',
      'Easier to maintain in smaller spaces'
    ],
    rarity: 'Rare',
    category: 'Albo',
    imageUrl: '/images/varieties/albo-borsigiana.jpg'
  },
  {
    id: 'albo-marbled',
    name: 'Monstera Albo Marbled',
    priceRange: '$125-$240',
    features: [
      'Beautiful marbled white patterns',
      'More stable variegation than sectoral forms',
      'Striking contrast on dark green leaves',
      'Each plant has unique patterns'
    ],
    rarity: 'Rare',
    category: 'Albo',
    imageUrl: '/images/varieties/albo-marbled.jpg'
  },
  
  // Yellow Category (Aurea)
  {
    id: 'aurea',
    name: 'Monstera deliciosa Aurea',
    priceRange: '$150-$250',
    features: [
      'Golden-yellow variegation',
      'More tolerant of bright light than Albo',
      'Warm, luminous appearance',
      'Stable variegation patterns'
    ],
    rarity: 'Rare',
    category: 'Aurea',
    imageUrl: '/images/varieties/aurea.jpg'
  },
  {
    id: 'yellow-marilyn',
    name: 'Yellow Marilyn',
    priceRange: '$700-$1,200',
    features: [
      'Large leaf size with prominent yellow variegation',
      'Highly stable variegation patterns',
      'Exceptional specimen plant',
      'Rare and highly prized by collectors'
    ],
    rarity: 'Ultra Rare',
    category: 'Aurea',
    imageUrl: '/images/varieties/yellow-marilyn.jpg'
  },
  
  // Premium/Rare Category
  {
    id: 'white-monster',
    name: 'White Monster',
    priceRange: '$500-$900+',
    features: [
      'Extensive white variegation',
      'Dramatic appearance with minimal green',
      'Requires specialized care',
      'True collector\'s specimen'
    ],
    rarity: 'Ultra Rare',
    category: 'Rare',
    imageUrl: '/images/varieties/white-monster.jpg'
  },
  {
    id: 'monstera-mint',
    name: 'Monstera Mint',
    priceRange: '$12,000+',
    features: [
      'Unique mint-green variegation',
      'Extremely rare and difficult to propagate',
      'Subtle, ethereal appearance',
      'One of the rarest Monstera varieties'
    ],
    rarity: 'Ultra Rare',
    category: 'Rare',
    imageUrl: '/images/varieties/monstera-mint.jpg'
  },
  {
    id: 'thai-constellation',
    name: 'Thai Constellation',
    priceRange: '$300-$800',
    features: [
      'Stable, creamy-yellow variegation',
      'Consistent patterns across all plants',
      'Tissue-cultured for reliability',
      'Resembles stars in the night sky'
    ],
    rarity: 'Rare',
    category: 'Rare',
    imageUrl: '/images/varieties/thai-constellation.jpg'
  }
]

export default varietiesData