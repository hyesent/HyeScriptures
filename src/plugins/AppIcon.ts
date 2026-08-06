// src/plugins/AppIcon.ts
import { registerPlugin } from '@capacitor/core'

export interface AppIconPlugin {
  change(options: { icon: string }): Promise<{ success: boolean; icon: string }>
  getCurrent(): Promise<{ icon: string }>
}

const AppIcon = registerPlugin<AppIconPlugin>('AppIcon')
export default AppIcon
