import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import amber from '@park-ui/panda-preset/colors/amber'
import sand from '@park-ui/panda-preset/colors/sand'

export default defineConfig({
  preflight: true,
  presets: [createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}'],
  jsxFramework: 'solid',
  outdir: 'styled-system',
})
