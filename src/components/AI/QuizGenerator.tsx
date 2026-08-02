// src/components/AI/QuizGenerator.tsx
import React, { useState } from 'react'
import type { QuizQuestion } from '../../lib/ai'
import { generateQuiz } from '../../lib/ai'
import { useAILimits } from '../../hooks/useAILimits'
import { AICounter } from '../AICounter'
import styles from './QuizGenerator.module.css'

export const QuizGenerator: React.FC = () => {
  const [topic, setTopic] = useState('')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { checkAndIncrement, remaining, tier } = useAILimits()

  const handleGenerate = async () => {
    if (!topic.trim()) return

    const { allowed, message } = checkAndIncrement()
    if (!allowed) {
      setError(message || 'AI limit reached')
      return
    }

    setLoading(true)
    setError(null)
    setQuestions([])
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResults(false)
    setScore(0)

    try {
      const result = await generateQuiz(topic)
      if (result && result.length > 0) {
        setQuestions(result)
      } else {
        setError('Could not generate quiz. Please try again.')
        setQuestions([])
      }
    } catch {
      setError('Error generating quiz.')
      setQuestions([])
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    if (!questions || questions.length === 0) return

    setSelectedAnswer(index)
    if (index === questions[currentIndex].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setSelectedAnswer(null)
      } else {
        setShowResults(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResults(false)
    setScore(0)
    setQuestions([])
  }

  if (loading) {
    return <div className={styles.loading}>Generating quiz...</div>
  }

  if (showResults && questions && questions.length > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.results}>
          <h3>📊 Quiz Complete!</h3>
          <div className={styles.score}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreTotal}>/{questions.length}</span>
          </div>
          <p className={styles.percentage}>
            {Math.round((score / questions.length) * 100)}%
          </p>
          <button className={styles.resetBtn} onClick={resetQuiz}>
            Try Another Topic
          </button>
        </div>
      </div>
    )
  }

  if (questions && questions.length > 0 && !showResults) {
    const q = questions[currentIndex]
    if (!q) return null

    return (
      <div className={styles.container}>
        <div className={styles.progress}>
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className={styles.questionCard}>
          <h3 className={styles.question}>{q.question}</h3>
          <div className={styles.options}>
            {q.options && q.options.map((option, index) => (
              <button
                key={index}
                className={`${styles.option} ${
                  selectedAnswer !== null
                    ? index === q.correct
                      ? styles.correct
                      : selectedAnswer === index
                      ? styles.wrong
                      : ''
                    : ''
                }`}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer !== null && (
            <div className={styles.explanation}>
              💡 {q.explanation}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>📝 Quiz Generator</h2>
        <p className={styles.subtitle}>Generate 10 Bible quiz questions on any topic</p>
        <AICounter />
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic..."
          className={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
        />
        <button
          className={styles.generateBtn}
          onClick={handleGenerate}
          disabled={!topic.trim() || loading}
        >
          Generate Quiz
        </button>
      </div>

      {error && (
        <div className={styles.error}>{error}</div>
      )}
    </div>
  )
}