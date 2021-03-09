import React from "react"
import { Text } from "@react-three/drei/Text"


function ResponsiveText() {
  
  return (
    <Text
      color={'red'}
      fontSize={'.5'}
      maxWidth={'5'}
    
      lineHeight={'1.2'}
      textAlign={'center'}
    
      anchorX="center"
      anchorY="top">
     Electrical Circuit 100KW
    </Text>
  )
}

export default ResponsiveText

