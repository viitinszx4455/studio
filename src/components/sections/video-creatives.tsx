'use client';
import { useRef, useEffect } from 'react';

const videos = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  '/video4.mp4',
];

const VideoCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <div className="bg-gray-deep/50 rounded-2xl border border-gray-medium/30 shadow-lg overflow-hidden aspect-[9/16]">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default function VideoCreatives() {
  return (
    <section className="container py-16 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((videoSrc, index) => (
          <VideoCard key={index} src={videoSrc} />
        ))}
      </div>
    </section>
  );
}