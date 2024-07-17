import React from 'react'

const CommunitySection: React.FC = () => {
  return (
    <video
      width="70%"
      height="70%"
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
