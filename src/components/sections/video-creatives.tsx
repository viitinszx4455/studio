'use client';
import { useRef, useEffect } from 'react';

const videos = [
  '/video_1.mp4',
  '/video_2.mp4',
  '/video_3.mp4',
  '/video_4.mp4',
];

const VideoCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (videoElement) {
              videoElement.load();
              videoElement.play().catch(error => {
                console.error("Video play failed:", error);
              });
            }
          } else {
            if (videoElement) {
              videoElement.pause();
              videoElement.currentTime = 0;
            }
          }
        });
      },
      { 
        rootMargin: '200px' 
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="bg-gray-deep/50 rounded-2xl border border-gray-medium/30 shadow-lg overflow-hidden aspect-[9/16] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-gray-light/20">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        disablePictureInPicture
      >
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
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
