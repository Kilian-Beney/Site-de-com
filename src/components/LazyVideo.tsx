import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export const LazyVideo = ({
  src,
  className,
  poster,
  autoPlay = false,
  muted = true,
  loop = true,
  controls = true,
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className={className} style={{ minHeight: '100px' }}>
      <video
        key={isVisible ? 'visible' : 'hidden'}
        className="w-full h-full object-cover"
        poster={poster}
        autoPlay={autoPlay && isVisible}
        muted={muted}
        loop={loop}
        controls={controls}
        preload="metadata"
        playsInline
      >
        {isVisible ? <source src={src} type="video/mp4" /> : null}
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  );
};
