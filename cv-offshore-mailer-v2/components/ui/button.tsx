
import * as React from "react"; import { clsx } from "clsx";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: "solid"|"outline"; size?: "sm"|"md"|"lg"; }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant="solid", size="md", ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition active:scale-[.98]";
  const variants = { solid: "bg-black text-white hover:bg-neutral-800", outline: "border border-neutral-200 hover:bg-neutral-50" };
  const sizes = { sm:"h-8 px-3 text-sm", md:"h-10 px-4 text-sm", lg:"h-12 px-6 text-base" };
  return <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props}/>;
}); export default Button;
