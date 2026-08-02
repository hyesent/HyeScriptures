import React, { useState, useRef } from 'react'
import { getMap, getMapList, allMaps } from '../../data/maps'
import { 
  MapPin, Search as SearchIcon, X, Map, Layers,
  ZoomIn, ZoomOut, ChevronRight, Home, Compass,
  Mountain, Droplets, Building, Globe
} from 'lucide-react'
import styles from './BibleMaps.module.css'

export const BibleMaps: React.FC = () => {
  const [selectedMapId, setSelectedMapId] = useState('holy-land')
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  const mapData = getMap(selectedMapId)
  const mapList = getMapList()

  if (!mapData) return <div className={styles.loading}>Loading map...</div>

  const filteredLocations = mapData.locations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      city: '#c9a84c', region: '#6b7280', mountain: '#16a34a',
      water: '#3b82f6', route: '#d97706', event: '#8b5cf6'
    }
    return colors[type] || '#c9a84c'
  }

  const getTypeIcon = (type: string): React.ReactNode => {
    const icons: Record<string, React.ReactNode> = {
      city: <Building size={14} />, region: <Globe size={14} />,
      mountain: <Mountain size={14} />, water: <Droplets size={14} />,
      route: <Compass size={14} />, event: <MapPin size={14} />
    }
    return icons[type] || <MapPin size={14} />
  }

  const getTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      city: 'City', region: 'Region', mountain: 'Mountain',
      water: 'Water', route: 'Route', event: 'Event'
    }
    return labels[type] || type
  }

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))
  const handleReset = () => { setScale(1); setPan({ x: 0, y: 0 }) }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}><Map size={22} />Bible Maps</h2>
        <p className={styles.subtitle}>Explore the locations of biblical events</p>
      </div>

      <div className={styles.mapSelector}>
        {mapList.map(map => (
          <button key={map.id} className={`${styles.mapBtn} ${selectedMapId === map.id ? styles.active : ''}`}
            onClick={() => { setSelectedMapId(map.id); setSelectedLocation(null); handleReset() }}>
            {map.icon} {map.name}
          </button>
        ))}
      </div>

      <p className={styles.mapDescription}>{mapData.description}</p>

      <div className={styles.searchBar}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input type="text" className={styles.searchInput} placeholder="Search locations..."
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        {searchQuery && <button className={styles.clearBtn} onClick={() => setSearchQuery('')}><X size={14} /></button>}
      </div>

      <div className={styles.mapWrapper}>
        <div className={styles.mapContainer}>
          <div className={styles.mapControls}>
            <button className={styles.zoomBtn} onClick={handleZoomIn} title="Zoom In"><ZoomIn size={18} /></button>
            <button className={styles.zoomBtn} onClick={handleZoomOut} title="Zoom Out"><ZoomOut size={18} /></button>
            <button className={styles.zoomBtn} onClick={handleReset} title="Reset View"><Home size={18} /></button>
          </div>

          <div className={styles.mapViewport} style={{ overflow: 'hidden', borderRadius: 16, background: mapData.backgroundColor || '#f5f0e8' }}>
            <svg ref={svgRef} viewBox="0 0 800 600" className={styles.mapSvg}
              style={{ transform: `scale(${scale}) translate(${pan.x}px, ${pan.y}px)`, transformOrigin: 'center', transition: 'transform 0.3s ease' }}>
              
              <rect width="800" height="600" fill={mapData.backgroundColor || '#f5f0e8'} />
              
              {/* Mediterranean Sea */}
              <rect x="0" y="0" width="140" height="600" fill={mapData.waterColor || '#b8d4e8'} opacity="0.4" />
              <text x="30" y="300" fontSize="14" fill="#6b9cc4" opacity="0.5" textAnchor="middle" transform="rotate(-90, 30, 300)" letterSpacing="3">GREAT SEA</text>
              
              {/* Dead Sea */}
              <ellipse cx="520" cy="440" rx="20" ry="38" fill={mapData.waterColor || '#b8d4e8'} opacity="0.5" />
              <text x="520" y="445" fontSize="7" fill="#6b9cc4" textAnchor="middle">DEAD SEA</text>
              
              {/* Sea of Galilee */}
              <ellipse cx="500" cy="210" rx="26" ry="12" fill={mapData.waterColor || '#b8d4e8'} opacity="0.5" />
              <text x="500" y="214" fontSize="7" fill="#6b9cc4" textAnchor="middle">SEA OF GALILEE</text>
              
              {/* Jordan River */}
              <path d="M500,198 Q504,240 502,290 Q500,340 504,390 Q508,420 510,435" 
                fill="none" stroke={mapData.waterColor || '#b8d4e8'} strokeWidth="3.5" opacity="0.45" />
              
              {/* Coastal Plain */}
              <path d="M140,0 L140,600 L180,600 L180,0 Z" fill={mapData.landColor || '#e8dfcc'} opacity="0.25" />
              
              {/* Hill Country */}
              <path d="M180,20 L180,580 L310,580 L310,520 L290,480 L300,440 L290,400 L310,360 L300,320 L320,280 L310,240 L330,200 L320,160 L330,120 L310,80 L330,40 L310,20 Z" 
                fill={mapData.landColor || '#e8dfcc'} opacity="0.35" />
              
              {/* Galilee hills */}
              <path d="M310,20 L290,20 L290,80 L270,100 L260,140 L270,180 L290,200 L330,200 L350,180 L360,140 L350,100 L330,60 L320,20 Z" 
                fill={mapData.landColor || '#e8dfcc'} opacity="0.25" />
              
              {/* Negev */}
              <path d="M210,480 L210,580 L360,580 L350,520 L330,500 L310,510 L290,490 L270,500 L250,480 Z" 
                fill={mapData.landColor || '#e8dfcc'} opacity="0.15" />

              {/* Region Labels */}
              <text x="350" y="150" fontSize="10" fill="#8b7355" opacity="0.35" fontStyle="italic" letterSpacing="2">GALILEE</text>
              <text x="350" y="310" fontSize="10" fill="#8b7355" opacity="0.35" fontStyle="italic" letterSpacing="2">SAMARIA</text>
              <text x="350" y="390" fontSize="10" fill="#8b7355" opacity="0.35" fontStyle="italic" letterSpacing="2">JUDEA</text>
              <text x="310" y="520" fontSize="10" fill="#8b7355" opacity="0.35" fontStyle="italic" letterSpacing="2">NEGEV</text>

              {/* Routes */}
              {mapData.routes?.map((route, idx) => (
                <g key={idx}>
                  <polyline
                    points={route.points.map(p => `${p.x * 6.4 + 24},${p.y * 6.4 + 24}`).join(' ')}
                    fill="none" stroke={route.color} strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="8,5" opacity="0.6" />
                  {route.label && route.points.length > 1 && (
                    <text x={route.points[Math.floor(route.points.length / 2)].x * 6.4 + 34}
                      y={route.points[Math.floor(route.points.length / 2)].y * 6.4 + 34}
                      fontSize="8" fill={route.color} fontWeight="600" opacity="0.75">{route.label}</text>
                  )}
                </g>
              ))}

              {/* Location Markers */}
              {filteredLocations.map(loc => {
                const cx = loc.x * 6.4 + 24
                const cy = loc.y * 6.4 + 24
                const isSelected = selectedLocation?.id === loc.id
                const color = getTypeColor(loc.type)

                if (loc.type === 'water') {
                  return <text key={loc.id} x={cx} y={cy} fontSize="9" fill="#6b9cc4" textAnchor="middle" fontStyle="italic" opacity="0.7">{loc.name}</text>
                }
                if (loc.type === 'mountain') {
                  return <text key={loc.id} x={cx} y={cy} fontSize="12" fill="#8b7355" textAnchor="middle" opacity="0.55">▲</text>
                }

                return (
                  <g key={loc.id} onClick={() => setSelectedLocation(isSelected ? null : loc)} className={styles.markerGroup}>
                    <circle cx={cx} cy={cy} r={isSelected ? 14 : 8}
                      fill={isSelected ? color : 'white'} stroke={color} strokeWidth={isSelected ? 3 : 2} />
                    <circle cx={cx} cy={cy} r={4} fill={color} />
                    <text x={cx} y={cy - (isSelected ? 20 : 14)} textAnchor="middle"
                      fontSize={isSelected ? 11 : 9} fontWeight={isSelected ? 700 : 500} fill="#333">{loc.name}</text>
                  </g>
                )
              })}

              {/* Legend */}
              <g transform="translate(20, 520)">
                <rect x="0" y="0" width="210" height="70" rx="8" fill="white" fillOpacity="0.92" stroke="#ddd" strokeWidth="0.5" />
                <text x="10" y="18" fontSize="10" fontWeight="700" fill="#333">LEGEND</text>
                {mapData.routes?.map((route, idx) => (
                  <g key={idx} transform={`translate(0, ${24 + idx * 16})`}>
                    <line x1="10" y1="8" x2="50" y2="8" stroke={route.color} strokeWidth="2.5" strokeDasharray="6,3" />
                    <text x="56" y="12" fontSize="9" fill="#555">{route.label}</text>
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Location Detail Panel */}
          {selectedLocation && (
            <div className={styles.locationPanel}>
              <button className={styles.closePanel} onClick={() => setSelectedLocation(null)}><X size={18} /></button>
              <div className={styles.locationHeader}>
                <span className={styles.locationType}>{getTypeIcon(selectedLocation.type)} {getTypeLabel(selectedLocation.type)}</span>
                <h3 className={styles.locationName}>{selectedLocation.name}</h3>
              </div>
              <p className={styles.locationDescription}>{selectedLocation.description}</p>
              {selectedLocation.events && selectedLocation.events.length > 0 && (
                <div className={styles.locationEvents}><h4>Events</h4><ul>{selectedLocation.events.map((e: string, i: number) => <li key={i}>{e}</li>)}</ul></div>
              )}
              {selectedLocation.references && selectedLocation.references.length > 0 && (
                <div className={styles.locationReferences}><h4>References</h4><ul>{selectedLocation.references.map((r: string, i: number) => <li key={i}><ChevronRight size={12} />{r}</li>)}</ul></div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Location List */}
      <div className={styles.locationList}>
        <h3 className={styles.listTitle}><Layers size={16} />Locations ({filteredLocations.length})</h3>
        <div className={styles.locationGrid}>
          {filteredLocations.map(loc => (
            <div key={loc.id} className={`${styles.locationItem} ${selectedLocation?.id === loc.id ? styles.active : ''}`}
              onClick={() => setSelectedLocation(selectedLocation?.id === loc.id ? null : loc)}>
              <span className={styles.locationEmoji}>{getTypeIcon(loc.type)}</span>
              <span className={styles.locationName}>{loc.name}</span>
              <ChevronRight size={14} className={styles.locationArrow} />
            </div>
          ))}
        </div>
        {filteredLocations.length === 0 && (
          <div className={styles.noResults}><SearchIcon size={24} /><p>No locations found</p></div>
        )}
      </div>
    </div>
  )
}