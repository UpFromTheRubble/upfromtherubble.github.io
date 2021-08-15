import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        height: '100%',
      },
    }
  }

  return <Img {...normalizedProps} imgStyle={{ objectFit: 'contain', height: '100%' }}/>
}
export default NonStretchedImage
