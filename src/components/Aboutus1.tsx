import React from 'react'
import Image from 'next/image'

interface FeatureInfo {
  color: string
  image: string
  title: string
  description: string
}

interface RenderFeatureProps extends FeatureInfo {
  index: number
}

const RenderFeature: React.FC<RenderFeatureProps> = ({
  color,
  image,
  title,
  description,
  index,
}) => {
return (
    <div
        className={`feature-item  w-[100%] relative  flex flex-col items-center justify-between md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
        <div
            className="feature-item-left relative  "
            style={{ backgroundColor: color }}
        >
            <div className="absolute left-0 top-0 h-full w-full ">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    className="max-w-[650px] -translate-x-[0%] -translate-y-[53.5px] object-contain"
                />
            </div>
        </div>
        <div className="feature-item-right w-full p-4 md:w-1/2 md:p-8">
            <h2 className="mb-4 h2 font-medium text-gray-800 dark:text-neutral-100 ">
                {title}
            </h2>
        <p className="t2 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}

const featuresInfo: FeatureInfo[] = [
  {
    color: '#4285F4',
    image: '/ideate.png',
    title: 'We Ideate',
    description:
      'We brainstorm for new ideas and chalk up a path to implement them successfully',
  },
  {
    color: '#FBA416',
    image: '/communicate.png',
    title: 'We Communicate',
    description:
      'We help to hone intelligent minds and develop a dynamic environment through dialogue',
  },
  {
    color: '#594DD2',
    image: '/collaborate.png',
    title: 'We Collaborate',
    description: 'We work together on projects and empower the whole community',
  },
]

const AboutUs: React.FC = () => {
  return (
    <div className=" w-full max-w-full ">
      <h1 className="h3 darkText dark:text-neutral-300 ta-center">
        What GDSC does and how
      </h1>
      <div className="w-[100%] features">
        {featuresInfo.map((item, index) => (
          <RenderFeature
            key={index}
            index={index}
            color={item.color}
            description={item.description}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutUs
