// ================================================================
// TYPE DEFINITIONS (MUST BE AT THE TOP)
// ================================================================

export type MapType = 
  | 'holy-land'
  | 'pauls-journeys'
  | 'exodus'
  | 'jesus-ministry'
  | 'old-testament'
  | 'israel-tribes'
  | 'kingdoms'
  | 'conquest'
  | 'prophets'
  | 'empires'

export type LocationType = 'city' | 'region' | 'mountain' | 'water' | 'route' | 'event'

export type MapLocation = {
  id: string
  name: string
  description: string
  x: number
  y: number
  type: LocationType
  firstMention?: string
  events?: string[]
  references?: string[]
  modernCountry?: string
  visitedBy?: string[]
  color?: string
  tribe?: string
  kingdom?: 'united' | 'israel' | 'judah'
  prophet?: string
  empire?: string
  date?: string
}

export type MapRoute = {
  points: { x: number; y: number }[]
  color: string
  label: string
}

export type BibleMapData = {
  id: MapType
  name: string
  description: string
  icon: string
  locations: MapLocation[]
  routes?: MapRoute[]
  backgroundColor?: string
  landColor?: string
  waterColor?: string
}

export type MapSelection = {
  mapId: MapType
  locationId?: string
  routeId?: string
  zoomLevel?: number
}