import type { TLShape } from '@tldraw/core'

export interface HeartShape extends TLShape {
  type: 'heart'
  size: number[]
}
