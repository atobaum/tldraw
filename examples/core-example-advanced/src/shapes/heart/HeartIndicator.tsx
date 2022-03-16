import * as React from 'react'
import { TLShapeUtil } from '@tldraw/core'
import type { HeartShape } from './HeartShape'

export const HeartIndicator = TLShapeUtil.Indicator<HeartShape>(({ shape }) => {
  return (
    <>
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
        strokeWidth={1}
        stroke="tl-selectedStroke"
        fill="none"
        pointerEvents="none"
      />
    </>
  )
})
