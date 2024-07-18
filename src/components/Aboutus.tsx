import React from 'react'
// Assuming bulb, team, and jigsaw are imported from somewhere
import bulb from 'public/images/gdsc-team.svg'
import team from 'public/images/figma_window.svg'
import jigsaw from 'public/images/design-team.svg'

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
    
      <div className="feature-item ">
        <div className="feature-item-left" style={{ backgroundColor: color }}>
          <img src={image} alt={title} className={`feature-${key}`} />
        </div>
        <div className="feature-item-right">
          {/* <p className="h0 lightGrey">0{key + 1}</p> */}
          <p className="h2 tanText dark:text-neutral-100">{title}</p>
          <p className="t2 darkGrey ">{description}</p>
        </div>
      </div>
   
  )
}

const featuresInfo: FeatureInfo[] = [
  {
    color: '#4285F4',
    image: bulb,
    title: 'We ideate',
    description:
      'We brainstorm for new ideas and chalk up a path to implement them successfully',
  },
  {
    color: '#FBA416',
    image: team,
    title: 'We communicate',
    description:
      'We help to hone intelligent minds and develop a dynamic environment through dialogue',
  },
  {
    color: '#594DD2',
    image: jigsaw,
    title: 'We collaborate',
    description: 'We work together on projects and empower the whole community',
  },
]

const AboutUs: React.FC = () => {
  return (
    <div>
      <p className="h3 darkText ta-center " >
        What GDSC does and how
      </p>

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
