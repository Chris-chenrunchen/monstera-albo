import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } group overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60 transition-all duration-300 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`} className="block overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 group-hover:scale-105"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`} className="group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium inline-flex items-center group"
            aria-label={`Link to ${title}`}
          >
            Learn more 
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
