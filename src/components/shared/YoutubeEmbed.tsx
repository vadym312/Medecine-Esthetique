"use client";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  videoId?: string;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export const YouTubeEmbed = (props: Props) => {
  const { videoId, src, ...iframeProps } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  const iframeSource = isLoaded
    ? src
      ? src
      : `https://www.youtube.com/embed/${videoId}`
    : "";

  return (
    <iframe
      ref={iframeRef}
      className="absolute top-0 left-0 w-full h-full"
      src={iframeSource}
      title="YouTube video player"
      allow="autoplay; encrypted-media"
      allowFullScreen
      loading="lazy"
      {...iframeProps}
    />
  );
};
