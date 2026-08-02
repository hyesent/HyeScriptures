import type { BibleMapData } from '../../types/maps'
import { holyLandMap } from './holy-land'
import { paulsJourneysMap } from './pauls-journeys'
import { exodusMap } from './exodus'
import { jesusMinistryMap } from './jesus-ministry'
import { oldTestamentMap } from './old-testament'
import { israelTribesMap } from './israel-tribes'
import { kingdomsMap } from './kingdoms'
import { conquestMap } from './conquest'
import { prophetsMap } from './prophets'
import { empiresMap } from './empires'

export const allMaps: Record<string, BibleMapData> = {
  'holy-land': holyLandMap,
  'pauls-journeys': paulsJourneysMap,
  'exodus': exodusMap,
  'jesus-ministry': jesusMinistryMap,
  'old-testament': oldTestamentMap,
  'israel-tribes': israelTribesMap,
  'kingdoms': kingdomsMap,
  'conquest': conquestMap,
  'prophets': prophetsMap,
  'empires': empiresMap
}

export const getMap = (id: string): BibleMapData | undefined => {
  return allMaps[id]
}

export const getMapList = () => {
  return Object.values(allMaps).map(map => ({
    id: map.id,
    name: map.name,
    description: map.description,
    icon: map.icon
  }))
}