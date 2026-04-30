import {
  Wrench,
  Hammer,
  Droplets,
  Zap,
  Settings,
  BadgeIndianRupee,
  ShieldCheck,
  Truck,
  PackageCheck,
  Phone,
  MessageCircle,
  Menu,
} from 'lucide-react'

const categories = [
  {
    title: 'Centering Material',
    marathi: 'सेंटरिंग मटेरियल',
    items: 'plates, props, jacks',
    icon: Wrench,
  },
  {
    title: 'Fabrication Material',
    marathi: 'फॅब्रिकेशन मटेरियल',
    items: 'MS pipe, angle, sheet',
    icon: Hammer,
  },
  {
    title: 'Plumbing',
    marathi: 'प्लंबिंग',
    items: 'PVC, CPVC pipes, fittings, taps',
    icon: Droplets,
  },
  {
    title: 'Electrical',
    marathi: 'इलेक्ट्रिकल',
    items: 'wires, switches, MCB',
    icon: Zap,
  },
  {
    title: 'Tools',
    marathi: 'टूल्स',
    items: 'nuts, bolts, cutting tools',
    icon: Settings,
  },
]

const products = [
  'Heavy Duty Centering Plate',
  'MS Square Pipe Bundle',
  'CPVC Plumbing Kit',
  'Modular Switch Board Set',
  'Industrial Bolt & Nut Box',
  'Hand Cutter Tool',
]

const whyUs = [
  { title: 'Best Price', marathi: 'योग्य दर', icon: BadgeIndianRupee },
  { title: 'Quality Products', marathi: 'उत्तम गुणवत्ता', icon: ShieldCheck },
  { title: 'Contractor Supply', marathi: 'कॉन्ट्रॅक्टर सप्लाय', icon: Truck },
  { title: 'All Items Available', marathi: 'सर्व साहित्य उपलब्ध', icon: PackageCheck },
]

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-black/95 text-white shadow-lg backdrop-blur-sm">
        <div className="container-custom flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-xl font-bold text-orange-400 md:text-2xl">AJ Hardware</h1>
            <p className="text-xs text-gray-300">Kolhapur, Maharashtra</p>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#home" className="font-medium transition hover:text-orange-400">Home</a>
            <a href="#products" className="font-medium transition hover:text-orange-400">Products</a>
            <a href="#contact" className="font-medium transition hover:text-orange-400">Contact</a>
          </nav>

          <button className="md:hidden" aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-black via-zinc-900 to-orange-950 px-4 pb-20 pt-24 text-white">
        <div className="container-custom text-center">
          <p className="mb-3 inline-block rounded-full border border-orange-300/40 px-4 py-1 text-sm text-orange-300">
            भरोसेमंद Hardware Partner
          </p>
          <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            All Hardware & Construction Material Under One Roof
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-zinc-200 md:text-lg">
            Centering | Fabrication | Plumbing | Electrical
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+918149060110"
              className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918149060110"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-orange-400 px-8 py-3 font-semibold text-orange-300 transition hover:bg-orange-400 hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white" id="products">
        <div className="container-custom">
          <h3 className="mb-2 text-center text-3xl font-bold text-black">Categories / विभाग</h3>
          <p className="mb-10 text-center text-zinc-600">Contractor आणि local customers साठी पूर्ण साहित्य.</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <article
                  key={category.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg"
                >
                  <Icon className="mb-4 text-orange-500" size={28} />
                  <h4 className="mb-1 text-xl font-bold">{category.title}</h4>
                  <p className="mb-2 font-medium text-orange-600">{category.marathi}</p>
                  <p className="text-zinc-600">{category.items}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-zinc-100">
        <div className="container-custom">
          <h3 className="mb-10 text-center text-3xl font-bold">Featured Products</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-orange-200 to-orange-100 text-zinc-600">
                  Product Image
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{product}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <h3 className="mb-10 text-center text-3xl font-bold text-orange-400">Why Choose Us</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-xl border border-zinc-700 bg-zinc-900 p-5 text-center">
                  <Icon className="mx-auto mb-3 text-orange-400" size={30} />
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-zinc-300">{item.marathi}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-bold">Contact Us / संपर्क</h3>
            <p className="mb-6 text-zinc-700">Contractors, builders आणि घरगुती ग्राहकांसाठी wholesale आणि retail दोन्ही उपलब्ध.</p>
            <div className="space-y-4">
              <a href="tel:+918149060110" className="flex items-center gap-3 rounded-xl border p-4 transition hover:border-orange-500 hover:bg-orange-50">
                <Phone className="text-orange-500" />
                <span className="font-medium">8149060110</span>
              </a>
              <a href="https://wa.me/918149060110" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border p-4 transition hover:border-orange-500 hover:bg-orange-50">
                <MessageCircle className="text-orange-500" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>
            <p className="mt-6 text-zinc-600">Address: Near Main Market Road, Kolhapur, Maharashtra, India (placeholder)</p>
          </div>

          <div className="overflow-hidden rounded-2xl border">
            <iframe
              title="Kolhapur Map"
              src="https://www.google.com/maps?q=Kolhapur,Maharashtra,India&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <a
        href="https://wa.me/918149060110"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:scale-105"
        aria-label="WhatsApp chat"
      >
        <MessageCircle />
      </a>

      {/* Footer */}
      <footer className="bg-black px-4 py-6 text-center text-sm text-zinc-300">
        <p className="font-semibold text-orange-400">AJ Hardware</p>
        <p>© {new Date().getFullYear()} AJ Hardware. All rights reserved.</p>
      </footer>
    </main>
  )
}
