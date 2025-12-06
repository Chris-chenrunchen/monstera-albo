import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ 
  title: 'Propagation Guide',
  description: 'Learn how to propagate Monstera Albo plants through stem cuttings, air layering, and other methods.'
})

export default function Propagation() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-12 pt-8 md:space-y-5">
          <h1 className="fade-in text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Monstera Albo Propagation
          </h1>
          <p className="fade-in fade-in-delay-1 text-lg leading-7 text-gray-500 dark:text-gray-400">
            Learn how to propagate your Monstera Albo to grow new plants and maintain variegation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="prose prose-lg max-w-none dark:prose-dark">
            <h2>Stem Cutting Method</h2>
            <p>
              The most common way to propagate Monstera Albo is through stem cuttings. This method involves cutting a section of stem with at least one node and ideally one leaf.
            </p>
            <h3>Step-by-Step Guide:</h3>
            <ol>
              <li>Select a healthy stem with at least one node (the small bump where leaves and roots emerge)</li>
              <li>Using sterilized scissors or pruning shears, make a clean cut below the node</li>
              <li>Remove any leaves that would be submerged in water</li>
              <li>Place the cutting in a jar of water, ensuring the node is submerged</li>
              <li>Change the water every 3-5 days to prevent bacterial growth</li>
              <li>Place in bright, indirect light</li>
              <li>Wait for roots to develop (usually 2-4 weeks)</li>
              <li>Once roots are 2-3 inches long, transfer to well-draining soil</li>
            </ol>
            <p>
              <strong>Pro Tip:</strong> For variegated Monsteras, select cuttings with good variegation but enough green to support photosynthesis during rooting.
            </p>

            <h2>Air Layering Method</h2>
            <p>
              Air layering is a more advanced technique that allows roots to develop while the cutting is still attached to the parent plant, resulting in a higher success rate.
            </p>
            <h3>Step-by-Step Guide:</h3>
            <ol>
              <li>Identify a healthy stem with at least one node</li>
              <li>Make a small upward cut about one-third through the stem just below the node</li>
              <li>Insert a small piece of toothpick or sphagnum moss to keep the cut open</li>
              <li>Wrap the area with moist sphagnum moss</li>
              <li>Cover the moss with plastic wrap and secure at both ends</li>
              <li>Keep the moss moist by opening the top and adding water as needed</li>
              <li>Once roots are visible through the moss (usually 4-8 weeks), cut below the rooted section</li>
              <li>Plant the rooted cutting in appropriate soil</li>
            </ol>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-dark">
            <h2>Propagation Timing</h2>
            <p>
              The best time to propagate Monstera Albo is during the active growing season (spring and early summer). Plants have more energy for root development during this period, increasing success rates.
            </p>
            <p>
              While propagation is possible year-round indoors, attempting it during fall and winter may result in slower root development and lower success rates.
            </p>

            <h2>Post-Propagation Care</h2>
            <p>
              After your cuttings have developed roots and been planted, they require special care to ensure successful establishment:
            </p>
            <ul>
              <li>Keep soil consistently moist but not waterlogged</li>
              <li>Maintain high humidity (60-80%) to reduce stress on the new plant</li>
              <li>Provide bright, indirect light</li>
              <li>Avoid fertilizing for the first 4-6 weeks</li>
              <li>Wait until you see new growth before reducing humidity gradually</li>
            </ul>

            <h2>Troubleshooting Common Issues</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Cutting isn't rooting</h3>
                <p className="text-gray-600 dark:text-gray-400">Ensure the cutting has at least one node and is in appropriate conditions. Check water quality and temperature.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Rotting in water</h3>
                <p className="text-gray-600 dark:text-gray-400">Change water more frequently, remove any submerged leaves, and consider adding a small piece of activated charcoal.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Wilting after planting</h3>
                <p className="text-gray-600 dark:text-gray-400">Increase humidity around the plant and ensure consistent moisture. This is often transplant shock.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Loss of variegation</h3>
                <p className="text-gray-600 dark:text-gray-400">Ensure adequate light. Some loss is normal as the plant adjusts, but persistent green-only growth may indicate reversion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Propagation Success Tips
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Select Healthy Parent Plants</h3>
              <p className="text-gray-600 dark:text-gray-400">Choose vigorous, disease-free plants with strong variegation patterns</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Use Sterile Tools</h3>
              <p className="text-gray-600 dark:text-gray-400">Clean scissors or shears with rubbing alcohol to prevent disease transmission</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Maintain High Humidity</h3>
              <p className="text-gray-600 dark:text-gray-400">Cover cuttings with plastic bags or use propagation boxes to retain moisture</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Be Patient</h3>
              <p className="text-gray-600 dark:text-gray-400">Variegated plants grow more slowly; rooting may take longer than with green varieties</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}