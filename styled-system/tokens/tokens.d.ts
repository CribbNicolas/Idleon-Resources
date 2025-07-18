/* eslint-disable */
export type Token = `animations.${AnimationToken}` | `blurs.${BlurToken}` | `borders.${BorderToken}` | `colors.${ColorToken}` | `durations.${DurationToken}` | `easings.${EasingToken}` | `fonts.${FontToken}` | `fontSizes.${FontSizeToken}` | `fontWeights.${FontWeightToken}` | `letterSpacings.${LetterSpacingToken}` | `lineHeights.${LineHeightToken}` | `radii.${RadiusToken}` | `sizes.${SizeToken}` | `spacing.${SpacingToken}` | `zIndex.${ZIndexToken}` | `breakpoints.${BreakpointToken}` | `shadows.${ShadowToken}`

export type ColorPalette = "current" | "black" | "white" | "transparent" | "red" | "red.light" | "red.dark" | "gray" | "gray.light" | "gray.dark" | "amber" | "amber.light" | "amber.dark" | "bg" | "fg" | "border"

export type AnimationToken = "backdrop-in" | "backdrop-out" | "dialog-in" | "dialog-out" | "drawer-in-left" | "drawer-out-left" | "drawer-in-right" | "drawer-out-right" | "skeleton-pulse" | "fade-in" | "collapse-in" | "collapse-out" | "spin"

export type BlurToken = "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type BorderToken = "none"

export type ColorToken = "current" | "black" | "black.a1" | "black.a2" | "black.a3" | "black.a4" | "black.a5" | "black.a6" | "black.a7" | "black.a8" | "black.a9" | "black.a10" | "black.a11" | "black.a12" | "white" | "white.a1" | "white.a2" | "white.a3" | "white.a4" | "white.a5" | "white.a6" | "white.a7" | "white.a8" | "white.a9" | "white.a10" | "white.a11" | "white.a12" | "transparent" | "red.light.1" | "red.light.2" | "red.light.3" | "red.light.4" | "red.light.5" | "red.light.6" | "red.light.7" | "red.light.8" | "red.light.9" | "red.light.10" | "red.light.11" | "red.light.12" | "red.light.a1" | "red.light.a2" | "red.light.a3" | "red.light.a4" | "red.light.a5" | "red.light.a6" | "red.light.a7" | "red.light.a8" | "red.light.a9" | "red.light.a10" | "red.light.a11" | "red.light.a12" | "red.dark.1" | "red.dark.2" | "red.dark.3" | "red.dark.4" | "red.dark.5" | "red.dark.6" | "red.dark.7" | "red.dark.8" | "red.dark.9" | "red.dark.10" | "red.dark.11" | "red.dark.12" | "red.dark.a1" | "red.dark.a2" | "red.dark.a3" | "red.dark.a4" | "red.dark.a5" | "red.dark.a6" | "red.dark.a7" | "red.dark.a8" | "red.dark.a9" | "red.dark.a10" | "red.dark.a11" | "red.dark.a12" | "gray.light.1" | "gray.light.2" | "gray.light.3" | "gray.light.4" | "gray.light.5" | "gray.light.6" | "gray.light.7" | "gray.light.8" | "gray.light.9" | "gray.light.10" | "gray.light.11" | "gray.light.12" | "gray.light.a1" | "gray.light.a2" | "gray.light.a3" | "gray.light.a4" | "gray.light.a5" | "gray.light.a6" | "gray.light.a7" | "gray.light.a8" | "gray.light.a9" | "gray.light.a10" | "gray.light.a11" | "gray.light.a12" | "gray.dark.1" | "gray.dark.2" | "gray.dark.3" | "gray.dark.4" | "gray.dark.5" | "gray.dark.6" | "gray.dark.7" | "gray.dark.8" | "gray.dark.9" | "gray.dark.10" | "gray.dark.11" | "gray.dark.12" | "gray.dark.a1" | "gray.dark.a2" | "gray.dark.a3" | "gray.dark.a4" | "gray.dark.a5" | "gray.dark.a6" | "gray.dark.a7" | "gray.dark.a8" | "gray.dark.a9" | "gray.dark.a10" | "gray.dark.a11" | "gray.dark.a12" | "amber.light.1" | "amber.light.2" | "amber.light.3" | "amber.light.4" | "amber.light.5" | "amber.light.6" | "amber.light.7" | "amber.light.8" | "amber.light.9" | "amber.light.10" | "amber.light.11" | "amber.light.12" | "amber.light.a1" | "amber.light.a2" | "amber.light.a3" | "amber.light.a4" | "amber.light.a5" | "amber.light.a6" | "amber.light.a7" | "amber.light.a8" | "amber.light.a9" | "amber.light.a10" | "amber.light.a11" | "amber.light.a12" | "amber.dark.1" | "amber.dark.2" | "amber.dark.3" | "amber.dark.4" | "amber.dark.5" | "amber.dark.6" | "amber.dark.7" | "amber.dark.8" | "amber.dark.9" | "amber.dark.10" | "amber.dark.11" | "amber.dark.12" | "amber.dark.a1" | "amber.dark.a2" | "amber.dark.a3" | "amber.dark.a4" | "amber.dark.a5" | "amber.dark.a6" | "amber.dark.a7" | "amber.dark.a8" | "amber.dark.a9" | "amber.dark.a10" | "amber.dark.a11" | "amber.dark.a12" | "bg.canvas" | "bg.default" | "bg.subtle" | "bg.muted" | "bg.emphasized" | "bg.disabled" | "fg.default" | "fg.muted" | "fg.subtle" | "fg.disabled" | "fg.error" | "border.default" | "border.muted" | "border.subtle" | "border.disabled" | "border.outline" | "border.error" | "red.1" | "red.2" | "red.3" | "red.4" | "red.5" | "red.6" | "red.7" | "red.8" | "red.9" | "red.10" | "red.11" | "red.12" | "red.a1" | "red.a2" | "red.a3" | "red.a4" | "red.a5" | "red.a6" | "red.a7" | "red.a8" | "red.a9" | "red.a10" | "red.a11" | "red.a12" | "red.default" | "red.emphasized" | "red.fg" | "red.text" | "gray.1" | "gray.2" | "gray.3" | "gray.4" | "gray.5" | "gray.6" | "gray.7" | "gray.8" | "gray.9" | "gray.10" | "gray.11" | "gray.12" | "gray.a1" | "gray.a2" | "gray.a3" | "gray.a4" | "gray.a5" | "gray.a6" | "gray.a7" | "gray.a8" | "gray.a9" | "gray.a10" | "gray.a11" | "gray.a12" | "gray.default" | "gray.emphasized" | "gray.fg" | "gray.text" | "amber.1" | "amber.2" | "amber.3" | "amber.4" | "amber.5" | "amber.6" | "amber.7" | "amber.8" | "amber.9" | "amber.10" | "amber.11" | "amber.12" | "amber.a1" | "amber.a2" | "amber.a3" | "amber.a4" | "amber.a5" | "amber.a6" | "amber.a7" | "amber.a8" | "amber.a9" | "amber.a10" | "amber.a11" | "amber.a12" | "amber.default" | "amber.emphasized" | "amber.fg" | "amber.text" | "colorPalette" | "colorPalette.a1" | "colorPalette.a2" | "colorPalette.a3" | "colorPalette.a4" | "colorPalette.a5" | "colorPalette.a6" | "colorPalette.a7" | "colorPalette.a8" | "colorPalette.a9" | "colorPalette.a10" | "colorPalette.a11" | "colorPalette.a12" | "colorPalette.light.1" | "colorPalette.1" | "colorPalette.light.2" | "colorPalette.2" | "colorPalette.light.3" | "colorPalette.3" | "colorPalette.light.4" | "colorPalette.4" | "colorPalette.light.5" | "colorPalette.5" | "colorPalette.light.6" | "colorPalette.6" | "colorPalette.light.7" | "colorPalette.7" | "colorPalette.light.8" | "colorPalette.8" | "colorPalette.light.9" | "colorPalette.9" | "colorPalette.light.10" | "colorPalette.10" | "colorPalette.light.11" | "colorPalette.11" | "colorPalette.light.12" | "colorPalette.12" | "colorPalette.light.a1" | "colorPalette.light.a2" | "colorPalette.light.a3" | "colorPalette.light.a4" | "colorPalette.light.a5" | "colorPalette.light.a6" | "colorPalette.light.a7" | "colorPalette.light.a8" | "colorPalette.light.a9" | "colorPalette.light.a10" | "colorPalette.light.a11" | "colorPalette.light.a12" | "colorPalette.dark.1" | "colorPalette.dark.2" | "colorPalette.dark.3" | "colorPalette.dark.4" | "colorPalette.dark.5" | "colorPalette.dark.6" | "colorPalette.dark.7" | "colorPalette.dark.8" | "colorPalette.dark.9" | "colorPalette.dark.10" | "colorPalette.dark.11" | "colorPalette.dark.12" | "colorPalette.dark.a1" | "colorPalette.dark.a2" | "colorPalette.dark.a3" | "colorPalette.dark.a4" | "colorPalette.dark.a5" | "colorPalette.dark.a6" | "colorPalette.dark.a7" | "colorPalette.dark.a8" | "colorPalette.dark.a9" | "colorPalette.dark.a10" | "colorPalette.dark.a11" | "colorPalette.dark.a12" | "colorPalette.canvas" | "colorPalette.default" | "colorPalette.subtle" | "colorPalette.muted" | "colorPalette.emphasized" | "colorPalette.disabled" | "colorPalette.error" | "colorPalette.outline" | "colorPalette.fg" | "colorPalette.text"

export type DurationToken = "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest"

export type EasingToken = "pulse" | "default" | "emphasized-in" | "emphasized-out"

export type FontToken = "sans" | "serif" | "mono"

export type FontSizeToken = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LetterSpacingToken = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"

export type LineHeightToken = "none" | "tight" | "normal" | "relaxed" | "loose"

export type RadiusToken = "none" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "l1" | "l2" | "l3"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "full" | "min" | "max" | "fit" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-0.5" | "-1.5" | "-2.5" | "-3.5" | "-4.5"

export type ZIndexToken = "hide" | "base" | "docked" | "dropdown" | "sticky" | "banner" | "overlay" | "modal" | "popover" | "skipLink" | "toast" | "tooltip"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type ShadowToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		animations: AnimationToken
		blurs: BlurToken
		borders: BorderToken
		colors: ColorToken
		durations: DurationToken
		easings: EasingToken
		fonts: FontToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		letterSpacings: LetterSpacingToken
		lineHeights: LineHeightToken
		radii: RadiusToken
		sizes: SizeToken
		spacing: SpacingToken
		zIndex: ZIndexToken
		breakpoints: BreakpointToken
		shadows: ShadowToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"