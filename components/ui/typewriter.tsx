"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
    words: string[]
    speed?: number
    delayBetweenWords?: number
    cursor?: boolean
    cursorChar?: string
    className?: string
}

export function Typewriter({
    words,
    speed = 100,
    delayBetweenWords = 2000,
    cursor = true,
    cursorChar = "|",
    className = "",
}: TypewriterProps) {
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)

    useEffect(() => {
        const currentWord = words[wordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1))
                } else {
                    // Word complete! Wait before deleting
                    setTimeout(() => setIsDeleting(true), delayBetweenWords)
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentWord.slice(0, currentText.length - 1))
                } else {
                    // Deleted, move to next word
                    setIsDeleting(false)
                    setWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? speed / 2 : speed)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, wordIndex, words, speed, delayBetweenWords])

    return (
        <div className={`whitespace-pre-wrap ${className}`}>
            {currentText}
            {cursor && (
                <span className="font-light animate-blink">
                    {cursorChar}
                </span>
            )}
            <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
        </div>
    )
}
