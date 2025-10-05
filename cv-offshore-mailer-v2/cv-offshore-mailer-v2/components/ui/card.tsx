
export function Card(p:any){return <div className={"rounded-2xl border border-neutral-200 bg-white shadow-soft "+(p.className||"")} {...p}/>}
export function CardHeader(p:any){return <div className={"p-6 "+(p.className||"")} {...p}/>} 
export function CardContent(p:any){return <div className={"px-6 pb-6 "+(p.className||"")} {...p}/>} 
export function CardFooter(p:any){return <div className={"px-6 pb-6 "+(p.className||"")} {...p}/>} 
export function CardTitle({children}:{children:any}){return <div className="text-lg font-semibold">{children}</div>} 
export function CardDescription({children}:{children:any}){return <div className="text-sm text-neutral-500">{children}</div>}
