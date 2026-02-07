import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageGalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  title: string;
}

export function ImageGalleryModal({ images, initialIndex, onClose, title }: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="absolute top-4 left-4 text-white z-10">
        <p className="text-lg">{title}</p>
        <p className="text-sm text-gray-300">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <div 
        className="relative w-full h-full flex items-center justify-center p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={goToPrevious}
          className="absolute left-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-all"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="max-w-6xl max-h-full flex items-center justify-center">
          <ImageWithFallback
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            decoding="async"
          />
        </div>

        <button
          onClick={goToNext}
          className="absolute right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-all"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentIndex === index ? 'border-blue-500 scale-110' : 'border-white/50'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
