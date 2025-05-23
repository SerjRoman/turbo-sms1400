import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export function EmailIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 35 28"
      {...props}
    >
      <Path
        d="M4.167 27.333a3.21 3.21 0 01-2.355-.979A3.21 3.21 0 01.833 24V4c0-.917.327-1.701.98-2.354a3.21 3.21 0 012.354-.98h26.666a3.21 3.21 0 012.355.98A3.21 3.21 0 0134.166 4v20a3.21 3.21 0 01-.98 2.354 3.21 3.21 0 01-2.354.98H4.167zM17.5 15.667L4.167 7.333V24h26.666V7.333L17.5 15.667zm0-3.334L30.833 4H4.167L17.5 12.333zm-13.333-5V4v20V7.333z"
        fill="#000"
      />
    </Svg>
  )
}

export default EmailIcon
