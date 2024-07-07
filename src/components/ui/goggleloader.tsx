import React from 'react'

const GoogleLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {['blue', 'red', 'yellow', 'green'].map((color, index) => (
        <div
          key={color}
          className={`h-4 w-4 animate-bounce rounded-full ${
            color === 'blue'
              ? 'bg-blue-500'
              : color === 'red'
                ? 'bg-red-500'
                : color === 'yellow'
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
          }`}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default GoogleLoader
