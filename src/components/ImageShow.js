import React from 'react'

export default function ImageShow({images}) {
  return (
    <div style={{ backgroundColor:"orange"}}>
      {/* map images */}
      {images.map((image) => {
        return (
          <div key={image.id}
          
          >
            <img src={image.urls.small} alt="" />
          </div>
        )
      }
      )}
    </div>
  )
}
