import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { copyVerse } from '../../lib/share'
import { createPost } from '../../lib/community'
import { Filesystem, Directory } from '@capacitor/filesystem'
import type { ShareableVerse } from '../../lib/share'
import styles from './ShareButton.module.css'

import bg1 from '../../assets/images/share-backgrounds/image 1.jpg'
import bg2 from '../../assets/images/share-backgrounds/image 2.jpg'
import bg3 from '../../assets/images/share-backgrounds/image 3.jpg'
import bg4 from '../../assets/images/share-backgrounds/image 4.jpg'
import bg5 from '../../assets/images/share-backgrounds/image 5.jpg'
import bg6 from '../../assets/images/share-backgrounds/image 6.jpg'
import bg7 from '../../assets/images/share-backgrounds/image 7.jpg'
import bg8 from '../../assets/images/share-backgrounds/image 8.jpg'
import bg9 from '../../assets/images/share-backgrounds/image 9.jpg'
import bg10 from '../../assets/images/share-backgrounds/image 10.jpg'
import bg11 from '../../assets/images/share-backgrounds/image 11.jpg'
import bg12 from '../../assets/images/share-backgrounds/image 12.jpg'
import bg13 from '../../assets/images/share-backgrounds/image 13.jpg'
import bg14 from '../../assets/images/share-backgrounds/image 14.jpg'
import bg15 from '../../assets/images/share-backgrounds/image 15.jpg'
import bg16 from '../../assets/images/share-backgrounds/image 16.jpg'
import bg17 from '../../assets/images/share-backgrounds/image 17.jpg'
import bg18 from '../../assets/images/share-backgrounds/image 18.jpg'
import bg19 from '../../assets/images/share-backgrounds/image 19.jpg'
import bg20 from '../../assets/images/share-backgrounds/image 20.jpg'
import bg21 from '../../assets/images/share-backgrounds/image 21.jpg'
import bg22 from '../../assets/images/share-backgrounds/image 22.jpg'
import bg23 from '../../assets/images/share-backgrounds/image 23.jpg'
import bg24 from '../../assets/images/share-backgrounds/image 24.jpg'
import bg25 from '../../assets/images/share-backgrounds/image 25.jpg'
import bg26 from '../../assets/images/share-backgrounds/image 26.jpg'
import bg27 from '../../assets/images/share-backgrounds/image 27.jpg'
import bg28 from '../../assets/images/share-backgrounds/image 28.jpg'

const backgrounds = [
  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10,
  bg11, bg12, bg13, bg14, bg15, bg16, bg17, bg18, bg19, bg20,
  bg21, bg22, bg23, bg24, bg25, bg26, bg27, bg28,
]

const getRandomBackground = () => backgrounds[Math.floor(Math.random() * backgrounds.length)]

const Icons = {
  Copy: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Share: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  Download: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Users: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Loader: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.spinner}>
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  ),
}

interface ShareButtonProps {
  verse: ShareableVerse
  onPostToCommunity?: (verse: ShareableVerse) => void
}

export const ShareButton: React.FC<ShareButtonProps> = ({ verse, onPostToCommunity }) => {
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPosting, setIsPosting] = useState(false)
  const [background] = useState<string>(getRandomBackground)

  const isCapacitorPlatform = (): boolean => {
    return !!(window as any).Capacitor?.isNativePlatform?.()
  }

  const handleCopy = async () => {
    copyVerse(verse)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePostToCommunity = async () => {
    setIsPosting(true)
    try {
      const post = await createPost('verse_reflection', verse.text, verse.reference)
      if (post) {
        if (onPostToCommunity) onPostToCommunity(verse)
        setShowPreview(false)
        alert('Posted to community!')
      } else {
        alert('Failed to post. Please try again.')
      }
    } catch {
      alert('Failed to post. Please try again.')
    } finally {
      setIsPosting(false)
    }
  }

  const generateImageDataUrl = async (): Promise<string> => {
    const canvas = document.createElement('canvas')
    const size = 1080
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!

    const bgImg = new Image()
    bgImg.src = background
    bgImg.crossOrigin = 'anonymous'
    await new Promise((resolve, reject) => {
      bgImg.onload = resolve
      bgImg.onerror = reject
    })

    ctx.drawImage(bgImg, 0, 0, size, size)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)'
    ctx.fillRect(0, 0, size, size)

    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
    ctx.font = 'bold 80px Georgia, serif'
    ctx.textAlign = 'center'
    ctx.fillText('"', size / 2, 100)

    ctx.fillStyle = '#ffffff'
    ctx.font = '44px Georgia, serif'
    const words = verse.text.split(' ')
    const maxWidth = size * 0.8
    const lineHeight = 60
    let lines: string[] = []
    let currentLine = ''
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word
      if (ctx.measureText(testLine).width > maxWidth) {
        lines.push(currentLine)
        currentLine = word
      } else {
        currentLine = testLine
      }
    }
    lines.push(currentLine)

    const startY = size * 0.25
    lines.forEach((line, i) => {
      ctx.fillText(line, size / 2, startY + i * lineHeight)
    })

    ctx.fillStyle = '#c9a84c'
    ctx.fillRect(size / 2 - 60, startY + lines.length * lineHeight + 30, 120, 3)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 36px Georgia, serif'
    ctx.fillText(verse.reference, size / 2, startY + lines.length * lineHeight + 70)

    ctx.font = '24px Georgia, serif'
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.fillText('KJV', size / 2, startY + lines.length * lineHeight + 110)

    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
    ctx.font = '20px Inter, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText('Hyescriptures', size - 30, size - 20)

    return canvas.toDataURL('image/png')
  }

  const handleShareImage = async () => {
    setIsGenerating(true)
    try {
      const imageDataUrl = await generateImageDataUrl()
      const fileName = `${verse.reference.replace(/\s/g, '_')}.png`
      const shareText = `${verse.reference} - ${verse.text}`

      // WEB
      if (!isCapacitorPlatform() && navigator.share && navigator.canShare) {
        try {
          const response = await fetch(imageDataUrl)
          const blob = await response.blob()
          const file = new File([blob], fileName, { type: 'image/png' })
          const shareData: any = { title: verse.reference, text: shareText }
          if (navigator.canShare({ files: [file] })) shareData.files = [file]
          await navigator.share(shareData)
          return
        } catch { return }
      }

      // APK — save file first, then share URI
      if (isCapacitorPlatform()) {
        try {
          const base64Data = imageDataUrl.split(',')[1]
          await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Cache,
          })
          const fileInfo = await Filesystem.getUri({
            path: fileName,
            directory: Directory.Cache,
          })
          const { Share } = await import('@capacitor/share')
          await Share.share({
            title: verse.reference,
            text: shareText,
            url: fileInfo.uri,
            dialogTitle: 'Share verse',
          })
          return
        } catch (error) {
          console.error('APK share failed:', error)
        }
      }

      // FALLBACK
      const link = document.createElement('a')
      link.download = fileName
      link.href = imageDataUrl
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    } catch (error) {
      console.error('Error sharing image:', error)
      copyVerse(verse)
      alert('Verse copied to clipboard!')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownloadImage = async () => {
    setIsGenerating(true)
    try {
      const imageDataUrl = await generateImageDataUrl()
      const fileName = `${verse.reference.replace(/\s/g, '_')}.png`

      if (isCapacitorPlatform()) {
        const base64Data = imageDataUrl.split(',')[1]
        await Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          directory: Directory.Documents,
        })
        alert('Image saved to your device!')
      } else {
        const link = document.createElement('a')
        link.download = fileName
        link.href = imageDataUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error('Error downloading image:', error)
      alert('Failed to download image.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.copyBtn} onClick={handleCopy} title="Copy verse">
        {copied ? <Icons.Check /> : <Icons.Copy />}
      </button>
      <button className={styles.shareBtn} onClick={() => setShowPreview(true)} title="Share verse">
        <Icons.Share />
      </button>

      {showPreview && createPortal(
        <div className={styles.previewModal} onClick={() => setShowPreview(false)}>
          <div className={styles.previewContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowPreview(false)}>
              <Icons.Close />
            </button>

            <div className={styles.imagePreview} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className={styles.imageOverlay}>
                <div className={styles.imageContent}>
                  <span className={styles.imageQuote}>"</span>
                  <p className={styles.imageVerse}>{verse.text}</p>
                  <div className={styles.imageDivider} />
                  <p className={styles.imageReference}>{verse.reference}</p>
                  <span className={styles.imageVersion}>KJV</span>
                </div>
              </div>
            </div>

            <div className={styles.actionRow}>
              <button className={styles.generateBtn} onClick={handleShareImage} disabled={isGenerating}>
                {isGenerating ? <><Icons.Loader /> Working...</> : <><Icons.Share /> Share</>}
              </button>
              <button className={styles.downloadBtn} onClick={handleDownloadImage} disabled={isGenerating}>
                <Icons.Download /> Download
              </button>
            </div>

            <div className={styles.actionRow}>
              <button className={styles.postBtn} onClick={handlePostToCommunity} disabled={isPosting}>
                {isPosting ? <><Icons.Loader /> Posting...</> : <><Icons.Users /> Post to Community</>}
              </button>
            </div>

            <div className={styles.actionRow}>
              <button className={styles.copyBtnFull} onClick={handleCopy}>
                {copied ? <><Icons.Check /> Copied!</> : <><Icons.Copy /> Copy Text</>}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
