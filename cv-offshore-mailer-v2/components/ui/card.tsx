import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={⁠ rounded-2xl border border-neutral-200 bg-white shadow-soft ${className} ⁠}
    />
  )
}

export function CardHeader({ className = "", ...props }: CardProps) {
  return <div {...props} className={⁠ p-6 ${className} ⁠} />
}

export function CardContent({ className = "", ...props }: CardProps) {
  return <div {...props} className={⁠ px-6 pb-6 ${className} ⁠} />
}

export function CardFooter({ className = "", ...props }: CardProps) {
  return <div {...props} className={⁠ px-6 pb-6 ${className} ⁠} />
}
