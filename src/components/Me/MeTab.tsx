// src/components/Me/MeTab.tsx
import React, { useState } from 'react'
import { Profile } from '../Profile/Profile'
import { Bookmarks } from '../Bookmarks/Bookmarks'
import { NotesList } from '../Notes/NotesList'
import { JournalList } from '../Journal/JournalList'
import { ReadingPlans } from '../ReadingPlans/ReadingPlans'
import { PlanDetail } from '../ReadingPlans/PlanDetail'
import { PrayerList } from '../Prayer/PrayerList'
import { MemoryVerseList } from '../Memory/MemoryVerseList'
import { BadgeList } from '../Badges/BadgeList'
import ThemeSettings from '../Settings/ThemeSettings'
import { UpgradePage } from '../UpgradePage'
import { IconPicker } from '../IconPicker'
import { ChevronLeft } from 'lucide-react'
import styles from './MeTab.module.css'

type MeView = 
  | 'profile' | 'bookmarks' | 'notes' | 'journal' | 'plans' | 'planDetail'
  | 'prayerJournal' | 'memoryVerses' | 'badges' | 'themeSettings'
  | 'upgrade' | 'appIcon'

export const MeTab: React.FC = () => {
  const [view, setView] = useState<MeView>('profile')
  const [selectedPlanId, setSelectedPlanId] = useState<string>('')

  const handleNavigateToTheme = () => setView('themeSettings')
  const handleNavigateToUpgrade = () => setView('upgrade')
  const handleNavigateToAppIcon = () => setView('appIcon')

  const handleBack = () => {
    if (view === 'planDetail') setView('plans')
    else if (view === 'themeSettings') setView('profile')
    else if (view === 'upgrade') setView('profile')
    else if (view === 'appIcon') setView('profile')
    else setView('profile')
  }

  const handleSelectPlan = (planId: string) => { setSelectedPlanId(planId); setView('planDetail') }
  const handleSelectVerse = (reference: string) => console.log('Navigate to verse:', reference)

  const renderContent = () => {
    switch (view) {
      case 'profile':
        return (
          <Profile 
            onNavigateToTheme={handleNavigateToTheme}
            onNavigateToUpgrade={handleNavigateToUpgrade}
            onNavigateToAppIcon={handleNavigateToAppIcon}
            onNavigateToBookmarks={() => setView('bookmarks')}
            onNavigateToNotes={() => setView('notes')}
            onNavigateToJournal={() => setView('journal')}
            onNavigateToPlans={() => setView('plans')}
            onNavigateToPrayer={() => setView('prayerJournal')}
            onNavigateToMemory={() => setView('memoryVerses')}
            onNavigateToBadges={() => setView('badges')}
          />
        )
      case 'bookmarks': return <Bookmarks onSelectVerse={handleSelectVerse} />
      case 'notes': return <NotesList />
      case 'journal': return <JournalList />
      case 'plans': return <ReadingPlans onSelectPlan={handleSelectPlan} />
      case 'planDetail': return <PlanDetail planId={selectedPlanId} onBack={() => setView('plans')} onSelectVerse={handleSelectVerse} />
      case 'prayerJournal': return <PrayerList />
      case 'memoryVerses': return <MemoryVerseList onSelectVerse={handleSelectVerse} />
      case 'badges': return <BadgeList />
      case 'themeSettings': return <ThemeSettings onBack={handleBack} />
      case 'upgrade': return <UpgradePage />
      case 'appIcon': return <IconPicker />
      default: return null
    }
  }

  const showBackButton = view !== 'profile'

  return (
    <div className={styles.container}>
      {showBackButton && (
        <button className={styles.backBtn} onClick={handleBack}><ChevronLeft size={20} /><span>Back</span></button>
      )}
      <div className={styles.content}>{renderContent()}</div>
    </div>
  )
}

export default MeTab