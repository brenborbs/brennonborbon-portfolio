import { useLazyLoad } from '../hooks';

function GoogleMap() {
  const { ref, srcRef, isLoaded, handleIsLoaded, Spinner } = useLazyLoad();
  return (
    <article ref={ref}>
      <iframe
        ref={srcRef}
        onLoad={handleIsLoaded}
        data-src="https://maps.google.com/maps?q=25%20zodiac%20drive%20pleasant%20homes%20subdivision%20punta%20princesa%20cebu%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
        tabIndex={0}
        frameBorder={0}
        aria-hidden={false}
        allowFullScreen
        title="Location"
        className="absolute inset-0 w-full h-full"
      />
      {!isLoaded && <Spinner />}
    </article>
  );
}

export { GoogleMap };
