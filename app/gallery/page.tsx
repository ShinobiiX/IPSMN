"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "All Photos" },
  { id: "graduation", name: "Graduations" },
  { id: "training", name: "Training" },
  { id: "conference", name: "Conferences" },
  { id: "award", name: "Awards" },
]

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/graduation-1.jpg",
    alt: "IPSM Graduation Ceremony 2025",
    category: "graduation",
    title: "2025 Graduation Ceremony",
    description: "Over 200 safety professionals received their certifications at our annual graduation ceremony."
  },
  {
    id: 2,
    src: "/images/gallery/training-1.jpg",
    alt: "Safety Training Workshop",
    category: "training",
    title: "Safety Training Workshop",
    description: "Intensive safety management training session conducted at IPSM Training Center."
  },
  {
    id: 3,
    src: "/images/gallery/conference-1.jpg",
    alt: "Annual Safety Conference",
    category: "conference",
    title: "Annual Safety Conference 2025",
    description: "Our flagship conference bringing together safety professionals from across Nigeria."
  },
  {
    id: 4,
    src: "/images/gallery/practical-1.jpg",
    alt: "Fire Safety Practical Training",
    category: "training",
    title: "Fire Safety Practical",
    description: "Hands-on fire safety training with practical exercises and live demonstrations."
  },
  // {
  //   id: 5,
  //   src: "/images/gallery/award-1.jpg",
  //   alt: "Fellowship Award Ceremony",
  //   category: "award",
  //   title: "Fellowship Award Ceremony",
  //   description: "Distinguished safety leaders receiving FIPSM fellowship recognition."
  // },
  {
    id: 6,
    src: "/images/gallery/networking-1.jpg",
    alt: "Networking Event",
    category: "conference",
    title: "Professional Networking",
    description: "Members connecting and sharing experiences at our networking events."
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                Our Moments
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Photo Gallery
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Explore memorable moments from our training sessions, graduation ceremonies, 
                conferences, and events.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-secondary border-b border-border sticky top-[73px] z-40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-foreground hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary shadow-md transition-all hover:shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-heading font-bold text-white text-lg">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground capitalize">
                      {image.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 p-2 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div 
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
