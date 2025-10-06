
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="w-full rounded-xl border border-neutral-300 p-3 text-sm outline-none focus:ring-2 focus:ring-neutral-800/20" {...props}/>;
}
