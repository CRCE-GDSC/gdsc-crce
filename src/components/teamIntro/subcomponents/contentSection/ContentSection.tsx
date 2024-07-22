'use client';
import React, { useEffect, useState } from 'react';
import {MobileDocs, GoogleDocs} from "@/components/teamIntro/svg"
import { ContentSectionContainer } from './ContentSection.styled';
import { TypingEffect } from '@/components/typography/typingEffect/TypingEffect';
import { devices } from 'constants/theme';

const ContentSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <ContentSectionContainer>
      {isMobile ? (
        <div className="min-w-full overflow-hidden rounded-b-xl">
          {' '}
          <MobileDocs />
        </div>
      ) : (
        <div className="min-w-full overflow-hidden rounded-b-xl">
          <GoogleDocs />
        </div>
      )}
      <div className="docs-text">
        <TypingEffect
          interKeyStrokeDurationInMs={20}
          showCursor={true}
          className="hidden md:block dark:text-black"
        >
          The Content Team at GDSC CRCE is the storytelling heart of our
          community. They curate captivating blogs, craft insightful articles,
          and orchestrate engaging newsletters. With a passion for sharing
          knowledge and fostering connections, this team weaves words into
          meaningful narratives that keep our members informed and inspired.
        </TypingEffect>
        <TypingEffect
          interKeyStrokeDurationInMs={20}
          showCursor={true}
          className=" md:hidden dark:text-black"
        >
          The Content Team at GDSC CRCE is the storytelling heart of our
          community. They curate captivating blogs, craft insightful articles,
          and orchestrate engaging newsletters.
        </TypingEffect>
      </div>
    </ContentSectionContainer>
  )
};

export default ContentSection;
