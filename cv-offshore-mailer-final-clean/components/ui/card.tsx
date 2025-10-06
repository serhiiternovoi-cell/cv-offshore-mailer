
import * as React from "react";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> { className?: string; }
export function Card({ className = "", children, ...props }: CardProps) {
  return <div {...props} className={`rounded-2xl border border-neutral-200 bg-white shadow-soft ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children, ...props }: CardProps) {
  return <div {...props} className={`p-6 ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children, ...props }: CardProps) {
  return <div {...props} className={`px-6 pb-6 ${className}`}>{children}</div>;
}
export function CardFooter({ className = "", children, ...props }: CardProps) {
  return <div {...props} className={`px-6 pb-6 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children, ...props }: CardProps) {
  return <div {...props} className={`text-lg font-semibold ${className}`}>{children}</div>;
}
export function CardDescription({ className = "", children, ...props }: CardProps) {
  return <div {...props} className={`text-sm text-neutral-500 ${className}`}>{children}</div>;
}
