import React from "react"
import { useEffect } from "react"

interface IProps {
  className?: string
  style?: React.CSSProperties
  client?: string
  slot?: string
  layout?: string
  layoutKey?: string
  format?: string
  responsive?: string
  pageLevelAds?: boolean
}

const AdSense: React.FC<IProps> = ({
  className = ``,
  style = { display: `block` },
  client = `ca-pub-7203185974509418`,
  slot = `6926425998`,
  layout = ``,
  layoutKey = ``,
  format = `auto`,
  responsive = `true`
}) => {
  if (process.env.NODE_ENV === `development`) {
    return <></>
  }

  useEffect(() => {
    if (window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    }
  })

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  )
}

export default AdSense
