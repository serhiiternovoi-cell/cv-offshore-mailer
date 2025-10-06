
"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const PLAN = { name: "OFFSHORE", price: 20, features: [
  "Personalized email to offshore companies",
  "Cover letter included",
  "Verified database (10,000+ emails)",
  "Delivery report (PDF)",
  "Responses go directly to your inbox"
]};

const socials = [ { name: "Telegram", href: "https://t.me/cv_offshore_mailer" } ];

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3 font-semibold no-underline hover:no-underline">
          <img src="/logo.svg" alt="CV_OFFSHORE_MAILER" className="h-6"/>
          <span>CV_OFFSHORE_MAILER</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#how" className="text-sm">How it works</a>
          <a href="#benefits" className="text-sm">Benefits</a>
          <a href="#pricing" className="text-sm">Price</a>
          <a href="#testimonials" className="text-sm">Testimonials</a>
        </nav>
        <div className="flex items-center gap-2">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer"><Button variant="outline">{s.name}</Button></a>
          ))}
          <a href="#order"><Button className="ml-1">Send my CV</Button></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <Badge>more than 10,000 emails</Badge>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            We send your CV directly to offshore companies worldwide.
          </h1>
          <p className="mt-4 text-neutral-600">
            Black & white, simple and clear. Your CV goes straight to verified employers. We don’t store your files.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#order"><Button size="lg">Start mailing</Button></a>
            <a href="#how"><Button size="lg" variant="outline">How it works</Button></a>
          </div>
          <div className="mt-6 text-sm text-neutral-500">Report on the same day • Payments coming soon</div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-soft flex items-center justify-center text-neutral-500">Your promo image here</div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = ["Choose OFFSHORE plan","Share your CV link and basic details","We mail it to verified offshore companies","You receive replies directly"];
  return (
    <section id="how" className="bg-white">
      <div className="container py-14">
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(s => (<Card key={s}><CardHeader><CardTitle className="text-lg">{s}</CardTitle></CardHeader></Card>))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const list = [
    { t: "Verified database", d: "10,000+ offshore employer emails (curated & updated)." },
    { t: "Personalized outreach", d: "Tailored subject & message per employer." },
    { t: "Direct responses", d: "Replies land in your own inbox." },
    { t: "PDF report", d: "Timestamp, recipient, status included." },
    { t: "Fast turnaround", d: "Usually delivered within 24 hours." },
    { t: "No storage", d: "We don’t store your CV after sending." },
  ];
  return (
    <section id="benefits" className="border-y bg-white">
      <div className="container py-14">
        <h2 className="text-2xl font-semibold md:text-3xl">Why choose us</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(b => (<Card key={b.t}><CardHeader><CardTitle className="text-lg">{b.t}</CardTitle><CardDescription>{b.d}</CardDescription></CardHeader></Card>))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="container py-14">
        <h2 className="text-2xl font-semibold md:text-3xl">Price</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>OFFSHORE</CardTitle>
              <CardDescription className="mt-2">One‑time mailing to verified offshore companies.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {["Personalized email","Cover letter included","Verified database (10,000+ emails)","Delivery report (PDF)","Direct replies"].map(f => (<li key={f}>• {f}</li>))}
              </ul>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-3xl font-bold">$20</div>
              <a href="#order"><Button>Order now</Button></a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function OrderForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "I want the OFFSHORE mailing. I will attach my CV link." });
  const mailto = useMemo(() => {
    const body = encodeURIComponent(`${form.message}\\n\\nName: ${form.name}\\nEmail: ${form.email}`);
    return `mailto:cv-offshoremailer@ukr.net?subject=${encodeURIComponent("Order: OFFSHORE CV Mailing")}&body=${body}`;
  }, [form]);
  return (
    <section id="order" className="bg-white">
      <div className="container py-14 max-w-3xl">
        <h2 className="text-2xl font-semibold md:text-3xl">Order</h2>
        <p className="mt-2 text-neutral-600">Fill in the form or message us. Include your CV link (Google Drive/Dropbox).</p>
        <div className="mt-6 grid gap-4">
          <Input placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
          <Input placeholder="Email for replies" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/>
          <Textarea rows={5} value={form.message} onChange={e=>setForm({...form, message: e.target.value})}/>
          <div className="flex flex-wrap items-center gap-3">
            <a href={mailto}><Button>Send via email</Button></a>
            <a href="https://t.me/cv_offshore_mailer" target="_blank" rel="noreferrer"><Button variant="outline">Send via Telegram</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-semibold">CV_OFFSHORE_MAILER</div>
            <p className="mt-3 text-sm text-neutral-600">Offshore CV mailing service. Simple, black & white, effective.</p>
          </div>
          <div>
            <div className="font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#how">How it works</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#pricing">Price</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contacts</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Email: cv-offshoremailer@ukr.net</li>
              <li>Telegram: <a href="https://t.me/cv_offshore_mailer" className="underline">t.me/cv_offshore_mailer</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} CV_OFFSHORE_MAILER. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <OrderForm />
      <Footer />
    </div>
  );
}
