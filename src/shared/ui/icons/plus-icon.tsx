import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function PlusIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M10.333 13.667h-10v-3.334h10v-10h3.334v10h10v3.334h-10v10h-3.334v-10z"
        fill="#1D1B20"
      />
    </Svg>
  )
}

export default PlusIcon
