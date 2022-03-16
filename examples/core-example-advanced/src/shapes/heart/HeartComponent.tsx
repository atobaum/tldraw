import * as React from 'react'
import { TLShapeUtil, SVGContainer } from '@tldraw/core'
import type { HeartShape } from './HeartShape'

export const HeartComponent = TLShapeUtil.Component<HeartShape, SVGSVGElement>(
  ({ shape, events, isGhost, meta }, ref) => {
    const color = meta.isDarkMode ? 'white' : 'black'
    const [isClicked, setIsClicked] = React.useState(false)

    return (
      <SVGContainer
        ref={ref}
        {...events}
        onClick={(e) => {
          setIsClicked((s) => !s)
        }}
      >
        <path
          d={`
          m ${shape.size[0] / 2} ${shape.size[1] / 2}
          A ${shape.size[0] / 4} ${shape.size[1] / 2} 180 0 0 0 ${shape.size[1] / 2}
          L ${shape.size[0] / 2} ${shape.size[1]}
          L ${shape.size[0]} ${shape.size[1] / 2}
          A ${shape.size[0] / 4} ${shape.size[1] / 2} 180 0 0 ${shape.size[0] / 2} ${
            shape.size[1] / 2
          }
        `}
          strokeWidth={3}
          stroke={color}
          fill={isClicked ? 'red' : 'none'}
          strokeLinejoin="round"
          opacity={isGhost ? 0.3 : 1}
          pointerEvents="all"
        >
          {isClicked && (
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              from="1"
              to="0.95"
              dur=".4s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </SVGContainer>
    )
  }
)
