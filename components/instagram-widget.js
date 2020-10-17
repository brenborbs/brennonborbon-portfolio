import Link from 'next/link';
import { useInstagram } from '../hooks';

function InstagramWidget() {
  const instagramFeed = useInstagram();
  // console.log(instagramFeed);

  return (
    <div className="px-4 bg-white sm:px-6 lg:px-8">
      <div className="py-16 mx-auto space-y-16 max-w-7xl">
        <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto">
          <Link href="/">
            <a className="px-1 py-1 text-4xl font-bold bg-green-300 rounded-sm font-architects">
              OMG! I added an #instagram widget
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {instagramFeed.map((feed, index) => (
            <div
              key={index}
              className={index === instagramFeed.length - 1 ? 'lg:hidden' : ''}
            >
              <a
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-0 overflow-hidden aspect-ratio-square"
              >
                <img
                  key={index}
                  src={feed.src}
                  alt={feed.caption}
                  srcSet={feed.srcSet.join(', ')}
                  className="absolute inset-0 object-contain w-full h-full"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 p-4 overflow-y-auto text-white break-words transition duration-300 ease-in-out bg-black bg-opacity-50 opacity-0 overscroll-y-auto hover:opacity-100"
                >
                  {feed.caption || 'View on Instagram'}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { InstagramWidget };
