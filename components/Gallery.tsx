"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MediaItemType {
  id: number
  type: string
  title: string
  desc: string
  url: string
  span: string
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
  return (
    <img
      src={item.url}
      alt={item.title}
      className={`${className} object-cover cursor-pointer`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  )
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
  setSelectedItem: (item: MediaItemType | null) => void
  mediaItems: MediaItemType[]
}) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 })
  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="fixed inset-0 z-[300] backdrop-blur-lg bg-black/80 flex items-center justify-center"
        onClick={onClose}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedItem.id}
            className="relative max-w-4xl w-[90vw] max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
            initial={{ y: 20, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.97 }}
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-lg font-semibold">{selectedItem.title}</h3>
              <p className="text-white/70 text-sm mt-1">{selectedItem.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm z-[310]"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => setDockPosition(prev => ({ x: prev.x + info.offset.x, y: prev.y + info.offset.y }))}
        className="fixed z-[320] left-1/2 bottom-6 -translate-x-1/2 touch-none"
      >
        <div className="relative rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-xl cursor-grab active:cursor-grabbing">
          <div className="flex items-center -space-x-2 px-3 py-2">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={e => { e.stopPropagation(); setSelectedItem(item) }}
                style={{ zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index }}
                className={`relative w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${selectedItem.id === item.id ? 'ring-2 ring-white/80' : 'hover:ring-2 hover:ring-white/40'}`}
                initial={{ rotate: index % 2 === 0 ? -12 : 12 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.25 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -12 : 12,
                  y: selectedItem.id === item.id ? -10 : 0,
                }}
                whileHover={{ scale: 1.35, rotate: 0, y: -12 }}
              >
                <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

const photos: MediaItemType[] = [
  { id: 1, type: 'image', title: 'Inside the Store', desc: 'Local Jonny\'s General Store', url: '/fotos/DSC06341.webp', span: 'col-span-2 row-span-3' },
  { id: 2, type: 'image', title: 'Local Vibes', desc: 'North Dallas neighborhood', url: '/fotos/DSC06345.webp', span: 'col-span-1 row-span-2' },
  { id: 3, type: 'image', title: 'The Space', desc: 'Our cozy corner', url: '/fotos/DSC06350.webp', span: 'col-span-1 row-span-2' },
  { id: 4, type: 'image', title: 'Local Jonny\'s', desc: 'Howdy, Dallas', url: '/fotos/DSC06374.webp', span: 'col-span-1 row-span-2' },
  { id: 5, type: 'image', title: 'Monomyth Coffee', desc: 'Specialty coffee roasters', url: '/fotos/DSC06478.webp', span: 'col-span-2 row-span-3' },
  { id: 6, type: 'image', title: 'Fresh Daily', desc: 'Made every morning', url: '/fotos/DSC06487.webp', span: 'col-span-1 row-span-2' },
  { id: 7, type: 'image', title: 'Matcha Bar', desc: 'Ceremonial grade matcha', url: '/fotos/DSC06494.webp', span: 'col-span-1 row-span-2' },
  { id: 8, type: 'image', title: 'Ceremonial Matcha', desc: 'The real stuff', url: '/fotos/DSC06526.webp', span: 'col-span-2 row-span-2' },
  { id: 9, type: 'image', title: 'Cold Brew', desc: '12-hour steep', url: '/fotos/DSC06647.webp', span: 'col-span-1 row-span-2' },
  { id: 10, type: 'image', title: 'Morning Ritual', desc: 'Start your day right', url: '/fotos/DSC06656.webp', span: 'col-span-1 row-span-2' },
  { id: 11, type: 'image', title: 'Breakfast Tacos', desc: 'Deep Cuts Butcher Shop', url: '/fotos/DSC06773.webp', span: 'col-span-2 row-span-2' },
  { id: 12, type: 'image', title: 'Taco of the Day', desc: 'Board changes daily', url: '/fotos/DSC06785.webp', span: 'col-span-1 row-span-2' },
  { id: 13, type: 'image', title: 'Good Things', desc: 'Texas-made gifts', url: '/fotos/DSC06865.webp', span: 'col-span-1 row-span-2' },
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)
  const [items, setItems] = useState(photos)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <section id="gallery" style={{ padding: '5rem 3.5rem', background: '#F8F8F8' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FF1616', marginBottom: '0.8rem' }}>
          The Space
        </span>
        <h2 style={{ fontFamily: 'inherit', fontWeight: 900, fontSize: 'clamp(2.2rem, 4vw, 4rem)', lineHeight: 0.95, letterSpacing: '-0.025em', color: '#3C6CA8' }}>
          A look <span style={{ fontStyle: 'italic', color: '#FF1616' }}>inside.</span>
        </h2>
      </div>

      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : null}
      </AnimatePresence>

      <motion.div
        className="grid grid-cols-3 gap-2"
        style={{ gridAutoRows: '180px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative overflow-hidden rounded-lg cursor-pointer ${item.span}`}
            onClick={() => !isDragging && setSelectedItem(item)}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } }
            }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false)
              const dist = info.offset.x + info.offset.y
              if (Math.abs(dist) > 50) {
                const newItems = [...items]
                const dragged = newItems[index]
                const target = dist > 0 ? Math.min(index + 1, items.length - 1) : Math.max(index - 1, 0)
                newItems.splice(index, 1)
                newItems.splice(target, 0, dragged)
                setItems(newItems)
              }
            }}
          >
            <MediaItem item={item} className="absolute inset-0 w-full h-full" onClick={() => !isDragging && setSelectedItem(item)} />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
