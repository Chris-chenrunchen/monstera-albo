import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ 
  title: 'Care Guide',
  description: 'Comprehensive care guide for Monstera Albo plants including watering, lighting, soil, and troubleshooting tips.'
})

export default function Care() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-12 pt-8 md:space-y-5">
          <h1 className="fade-in text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Monstera Albo Care Guide
          </h1>
          <p className="fade-in fade-in-delay-1 text-lg leading-7 text-gray-500 dark:text-gray-400">
            Everything you need to know to keep your Monstera Albo thriving and beautiful.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="prose prose-lg max-w-none dark:prose-dark">
            <h2>Light Requirements</h2>
            <p>
              Monstera Albo thrives in bright, indirect light. Direct sunlight can scorch the white variegated parts of the leaves, causing them to turn yellow or brown. Place your plant near a window with filtered light or in a bright room away from direct sun rays.
            </p>
            <p>
              <strong>Tip:</strong> If your plant isn't producing enough variegation, it may need more light. If the white parts are burning, move it to a slightly shadier location.
            </p>

            <h2>Watering</h2>
            <p>
              Water your Monstera Albo when the top 1-2 inches of soil feel dry. These plants prefer consistently moist soil but are susceptible to root rot if overwatered. The frequency will depend on factors like light, temperature, and season.
            </p>
            <p>
              <strong>Tip:</strong> Use room-temperature water and ensure proper drainage. Yellowing leaves often indicate overwatering, while crispy brown edges suggest underwatering.
            </p>

            <h2>Soil Requirements</h2>
            <p>
              A well-draining, airy potting mix is essential for Monstera Albo. A mix containing orchid bark, perlite, and peat moss works well. The soil should retain some moisture but allow excess water to drain freely.
            </p>
            <p>
              <strong>Tip:</strong> Consider adding charcoal to the mix to help prevent bacterial growth and improve soil structure.
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-dark">
            <h2>Humidity & Temperature</h2>
            <p>
              Monstera Albo prefers high humidity (60-80%) and temperatures between 65-85°F (18-29°C). They thrive in environments similar to their native tropical habitat.
            </p>
            <p>
              <strong>Tip:</strong> Increase humidity by grouping plants, using a humidifier, placing a pebble tray with water beneath the pot, or misting regularly. Avoid placing near heating vents or drafty windows.
            </p>

            <h2>Fertilizing</h2>
            <p>
              Feed your Monstera Albo monthly during the growing season (spring and summer) with a balanced liquid fertilizer diluted to half strength. Reduce feeding to every 6-8 weeks in fall and winter.
            </p>
            <p>
              <strong>Tip:</strong> Variegated plants like Monstera Albo need less fertilizer than fully green plants, as they produce less chlorophyll and have lower photosynthetic capacity.
            </p>

            <h2>Common Issues</h2>
            <ul>
              <li><strong>Yellowing leaves:</strong> Usually indicates overwatering or poor drainage</li>
              <li><strong>Brown leaf edges:</strong> Often caused by low humidity or underwatering</li>
              <li><strong>Loss of variegation:</strong> May need more light or could be reverting</li>
              <li><strong>Drooping leaves:</strong> Could indicate underwatering or root issues</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Quick Care Reference
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Light</h3>
              <p className="text-gray-600 dark:text-gray-400">Bright, indirect light</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Water</h3>
              <p className="text-gray-600 dark:text-gray-400">When top 1-2" of soil is dry</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Soil</h3>
              <p className="text-gray-600 dark:text-gray-400">Well-draining, airy mix</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Humidity</h3>
              <p className="text-gray-600 dark:text-gray-400">60-80% preferred</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Temperature</h3>
              <p className="text-gray-600 dark:text-gray-400">65-85°F (18-29°C)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Fertilizer</h3>
              <p className="text-gray-600 dark:text-gray-400">Monthly in growing season</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}