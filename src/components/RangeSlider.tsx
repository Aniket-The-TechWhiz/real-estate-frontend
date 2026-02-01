import { useState, useRef, useEffect } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  step?: number;
  onChange: (min: number, max: number) => void;
  formatLabel?: (value: number) => string;
}

export function RangeSlider({
  min,
  max,
  minValue,
  maxValue,
  step = 1,
  onChange,
  formatLabel = (val) => val.toString()
}: RangeSliderProps) {
  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - step);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        onMouseUp={() => onChange(minVal, maxVal)}
        onTouchEnd={() => onChange(minVal, maxVal)}
        className="thumb thumb--zindex-3 pointer-events-none absolute h-0 w-full outline-none"
        style={{
          zIndex: minVal > max - 100 ? 5 : 3
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + step);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        onMouseUp={() => onChange(minVal, maxVal)}
        onTouchEnd={() => onChange(minVal, maxVal)}
        className="thumb thumb--zindex-4 pointer-events-none absolute h-0 w-full outline-none"
      />

      <div className="relative w-full px-1 py-2">
        <div className="absolute h-2 w-full rounded-full bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200" />
        <div
          ref={range}
          className="absolute h-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-sm"
        />
      </div>

      <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
        <span className="px-2 py-1 bg-gray-100 rounded">{formatLabel(min)}</span>
        <span className="px-2 py-1 bg-gray-100 rounded">{formatLabel(max)}</span>
      </div>

      <style>{`
        .thumb {
          pointer-events: all;
          position: relative;
          height: 0;
          width: 100%;
          outline: none;
        }

        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          pointer-events: all;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid #2563eb;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          cursor: grab;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(37, 99, 235, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .thumb::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.05);
        }

        .thumb::-moz-range-thumb {
          pointer-events: all;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid #2563eb;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          cursor: grab;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .thumb::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(37, 99, 235, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .thumb::-moz-range-thumb:active {
          cursor: grabbing;
          transform: scale(1.05);
        }

        .thumb--zindex-3 {
          z-index: 3;
        }

        .thumb--zindex-4 {
          z-index: 4;
        }

        .thumb--zindex-5 {
          z-index: 5;
        }
      `}</style>
    </div>
  );
}
