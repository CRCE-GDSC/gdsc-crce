import React from 'react'

const CommunitySection: React.FC = () => {
  return (
    <video
      width="80%"
      height="80%"
      autoPlay
      style={{
        borderRadius: '20px',
      }}
    >
      <source src="/images/chat_animation.webm" type="video/webm" />
    </video>
  )
}

export default CommunitySection
