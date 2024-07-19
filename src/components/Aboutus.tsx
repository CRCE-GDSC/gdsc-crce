import React from 'react'
// Assuming bulb, team, and jigsaw are imported from somewhere
import Image from 'next/image'

interface FeatureInfo {
  color: string
  image: string
  title: string
  description: string
}

interface RenderFeatureProps extends FeatureInfo {
  key: number
}

const RenderFeature: React.FC<RenderFeatureProps> = ({
  color,
  image,
  title,
  description,
  key,
}) => {
  return (
    <div className="feature-item">
      <div className="feature-item-left" style={{ backgroundColor: color }}>
        <Image
          src={image}
          alt={title}
          height={1000}
          width={1000}
          priority
          className={`min-w-[100px] max-w-[650px] -translate-y-[53.5px] md:-translate-x-[38px] md:-translate-y-[0px] vn:min-w-[650px] vn:-translate-y-[53.5px] feature-${key}`}
        />
      </div>
      <div className="feature-item-right">
        <p className="h2 tanText dark:text-neutral-100">{title}</p>
        <p className="t2 darkGrey">{description}</p>
      </div>
    </div>
  )
}

const featuresInfo: FeatureInfo[] = [
  {
    color: '#4285F4',
    image: '/ideate.png',
    title: 'We ideate',
    description:
      'We brainstorm for new ideas and chalk up a path to implement them successfully',
  },
  {
    color: '#FBA416',
    image: '/communicate.png',
    title: 'We communicate',
    description:
      'We help to hone intelligent minds and develop a dynamic environment through dialogue',
  },
  {
    color: '#594DD2',
    image: '/collaborate.png',
    title: 'We collaborate',
    description: 'We work together on projects and empower the whole community',
  },
]

const AboutUs: React.FC = () => {
  return (
    <div className="min-w-full">
      <p className="h2 font-bold darkText ta-center">About Us</p>
      <div className="features">
        {featuresInfo.map((item, index) => (
          <RenderFeature
            color={item.color}
            description={item.description}
            title={item.title}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutUs
