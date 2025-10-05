import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type TitleProps = { children?: React.ReactNode; className?: string };

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={⁠ rounded-2xl border border-neutral-200 bg-white shadow-soft ${className} ⁠}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return <div className={⁠ p-6 ${className} ⁠} {...props} />;
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={⁠ px-6 pb-6 ${className} ⁠} {...props} />;
}

export function CardFooter({ className = "", ...props }: DivProps) {
  return <div className={⁠ px-6 pb-6 ${className} ⁠} {...props} />;
}

export function CardTitle({ children, className = "" }: TitleProps) {
  return <div className={⁠ text-lg font-semibold ${className} ⁠}>{children}</div>;
}

export function CardDescription({ children, className = "" }: TitleProps) {
  return <div className={⁠ text-sm text-neutral-500 ${className} ⁠}>{children}</div>;
}
