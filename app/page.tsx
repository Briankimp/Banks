import Link from "next/link"
import Image from "next/image"
import { Download, ShoppingCart, Clock, CreditCard, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AppFeature from "@/components/app-feature"
import AppStep from "@/components/app-step"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedSection from "@/components/animated-section"
import MobileAppPreview from "@/components/mobile-app-preview"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold">MamaMarket</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-green-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-green-500 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-green-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Now
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
              alt="Grocery background"
              fill
              className="object-cover opacity-15"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Fresh Groceries Delivered to Your Doorstep!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Shop for fresh produce, household essentials, and local favorites with our convenient mobile app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Now
                  </Button>
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1770&auto=format&fit=crop"
                    alt="App Store"
                    width={135}
                    height={40}
                    className="rounded"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1770&auto=format&fit=crop"
                    alt="Google Play"
                    width={135}
                    height={40}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <MobileAppPreview />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection id="features" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use Our App?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our grocery app makes shopping easier, faster, and more convenient than ever before.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AppFeature
                icon={<Clock className="h-10 w-10 text-green-500" />}
                title="Fast & Reliable Delivery"
                description="Get your groceries in under 30 minutes across Nairobi."
              />
              <AppFeature
                icon={<ShoppingCart className="h-10 w-10 text-green-500" />}
                title="Local & Fresh Products"
                description="Shop from local farmers and markets for the freshest items."
              />
              <AppFeature
                icon={<CreditCard className="h-10 w-10 text-green-500" />}
                title="M-Pesa & Card Payments"
                description="Pay easily with M-Pesa, credit cards, or cash on delivery."
              />
              <AppFeature
                icon={<MapPin className="h-10 w-10 text-green-500" />}
                title="Real-Time Order Tracking"
                description="Track your order from store to your doorstep in real-time."
              />
            </div>
          </div>
        </AnimatedSection>

        {/* How It Works Section */}
        <AnimatedSection id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Getting your groceries delivered is as easy as 1-2-3.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <AppStep
                number={1}
                title="Download the App"
                description="Get our app from the App Store or Google Play."
                imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
              />
              <AppStep
                number={2}
                title="Browse & Add to Cart"
                description="Select your favorite groceries and add them to your cart."
                imageUrl="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2574&auto=format&fit=crop"
              />
              <AppStep
                number={3}
                title="Fast Delivery"
                description="Receive your groceries right at your doorstep."
                imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection id="testimonials" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our customers have to say.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                name="Wanjiku Kamau"
                role="Regular Customer"
                content="This app has completely changed how I shop for groceries. The delivery is always on time and the products are fresh!"
                rating={5}
                imageUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop"
              />
              <TestimonialCard
                name="Mwangi Odhiambo"
                role="Busy Professional"
                content="As someone who works long hours, this app is a lifesaver. I can order groceries on my commute and they're waiting when I get home."
                rating={5}
                imageUrl="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop"
              />
              <TestimonialCard
                name="Akinyi Njoroge"
                role="Parent of Three"
                content="The personalized recommendations are spot on! It remembers what my family likes and suggests new items we might enjoy."
                rating={4}
                imageUrl="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1972&auto=format&fit=crop"
              />
            </div>
            <div className="mt-16 flex justify-center gap-8">
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770&auto=format&fit=crop"
                alt="Featured in Tech Today"
                width={120}
                height={30}
              />
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770&auto=format&fit=crop"
                alt="App of the Year"
                width={120}
                height={30}
              />
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770&auto=format&fit=crop"
                alt="Consumer Choice"
                width={120}
                height={30}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Have questions or feedback? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Download className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Download the App</h3>
                      <p className="text-sm text-muted-foreground">Available on iOS and Android</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-sm text-muted-foreground">Westlands, Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={4} />
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* App Download CTA */}
        <AnimatedSection className="py-20 bg-green-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shopping Smarter?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Download our app today and experience the convenience of grocery shopping from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-4 w-4" />
                App Store
              </Button>
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-4 w-4" />
                Google Play
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-slate-900 text-slate-200">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">MamaMarket</span>
              </div>
              <p className="text-slate-400">
                Your one-stop solution for all your grocery needs, delivered right to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-slate-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-slate-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscribe</h3>
              <p className="text-slate-400 mb-4">Stay updated with our latest offers and updates.</p>
              <form className="flex gap-2">
                <Input placeholder="Your email" className="bg-slate-800 border-slate-700" />
                <Button className="bg-green-500 hover:bg-green-600 text-white">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© {new Date().getFullYear()} MamaMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

