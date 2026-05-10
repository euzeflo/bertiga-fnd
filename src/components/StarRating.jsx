// src/components/StarRating.jsx
import { FiStar } from 'react-icons/fi'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

export default function StarRating({ rating = 5, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => {
        if (i + 1 <= rating) {
          return <BsStarFill key={i} className="star" size={13} />
        } else if (i + 0.5 <= rating) {
          return <BsStarHalf key={i} className="star" size={13} />
        }
        return <FiStar key={i} size={13} style={{ color: 'var(--warm-gray)' }} />
      })}
    </div>
  )
}
