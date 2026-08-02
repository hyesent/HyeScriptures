import type { BibleMapData } from '../../types/maps'

export const exodusMap: BibleMapData = {
  id: 'exodus',
  name: 'Exodus',
  description: 'The journey of Israel from Egypt to the Promised Land',
  icon: '🏜️',
  backgroundColor: '#f8f6f2',
  landColor: '#e8e4dd',
  waterColor: '#bfdbfe',
  locations: [
    { id: 'goshen', name: 'Goshen', description: 'The land in Egypt where the Israelites settled and multiplied.', x: 40, y: 78, type: 'region', firstMention: 'Genesis 45:10', events: ['Israelites settle (Genesis 45-47)', 'Slavery in Egypt (Exodus 1)'], references: ['Genesis 45:10', 'Exodus 1:1-14'], modernCountry: 'Egypt' },
    { id: 'red_sea', name: 'Red Sea Crossing', description: 'Where God parted the Red Sea, allowing Israel to escape Egypt.', x: 38, y: 72, type: 'water', firstMention: 'Exodus 13:18', events: ['Crossing of the Red Sea (Exodus 14)'], references: ['Exodus 14:21-31', 'Psalm 106:7-12'], modernCountry: 'Egypt' },
    { id: 'marah', name: 'Marah', description: 'Where the waters were bitter, but God made them sweet.', x: 42, y: 65, type: 'water', firstMention: 'Exodus 15:23', events: ['Bitter waters made sweet (Exodus 15:22-27)'], references: ['Exodus 15:22-27'] },
    { id: 'elim', name: 'Elim', description: 'An oasis with 12 wells and 70 palm trees where Israel camped.', x: 44, y: 63, type: 'region', firstMention: 'Exodus 15:27', references: ['Exodus 15:27'] },
    { id: 'wilderness_sin', name: 'Wilderness of Sin', description: 'Where Israel complained about hunger and God sent manna and quail.', x: 45, y: 60, type: 'region', firstMention: 'Exodus 16:1', events: ['Manna and quail provided (Exodus 16)'], references: ['Exodus 16:1-36'] },
    { id: 'rephidim', name: 'Rephidim', description: 'Where Israel fought Amalek and water came from the rock.', x: 46, y: 56, type: 'region', firstMention: 'Exodus 17:1', events: ['Water from the rock (Exodus 17:1-7)', 'Victory over Amalek (Exodus 17:8-16)'], references: ['Exodus 17:1-16'] },
    { id: 'mount_sinai', name: 'Mount Sinai', description: 'Where God gave the Ten Commandments and made His covenant with Israel.', x: 48, y: 52, type: 'mountain', firstMention: 'Exodus 19:1', events: ['Ten Commandments given (Exodus 20)', 'Golden calf incident (Exodus 32)'], references: ['Exodus 19-20', 'Exodus 32'], modernCountry: 'Egypt' },
    { id: 'kadesh_barnea', name: 'Kadesh Barnea', description: 'Where Israel sent spies into Canaan and rebelled against God.', x: 44, y: 46, type: 'region', firstMention: 'Numbers 13:26', events: ['Spies sent (Numbers 13)', 'Israel\'s rebellion (Numbers 14)'], references: ['Numbers 13-14'] },
    { id: 'mount_hor', name: 'Mount Hor', description: 'Where Aaron died and was buried.', x: 46, y: 44, type: 'mountain', firstMention: 'Numbers 20:22', events: ['Death of Aaron (Numbers 20:22-29)'], references: ['Numbers 20:22-29'] },
    { id: 'moab', name: 'Moab', description: 'Where Israel camped before entering the Promised Land. Moses gave his final words here.', x: 48, y: 40, type: 'region', firstMention: 'Genesis 19:37', events: ['Israel camps (Numbers 22-24)', 'Moses\' farewell (Deuteronomy)'], references: ['Numbers 22-24', 'Deuteronomy 1-34'] }
  ],
  routes: [{ points: [{ x: 40, y: 78 }, { x: 38, y: 72 }, { x: 42, y: 65 }, { x: 44, y: 63 }, { x: 45, y: 60 }, { x: 46, y: 56 }, { x: 48, y: 52 }, { x: 44, y: 46 }, { x: 46, y: 44 }, { x: 48, y: 40 }], color: '#8b5cf6', label: 'Exodus Route' }]
}