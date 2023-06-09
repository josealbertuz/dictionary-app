import fs from 'fs'
import path from 'path'
import SVGSpriter from 'svg-sprite'
import glob from 'glob'
import { writeFormattedFile } from './utils/writeFormattedFile'

const ICONS_GLOB = 'src/components/Icon/icons/**/*.svg'
const ICON_TYPES_PATH = path.join(__dirname, '../src/components/Icon/iconNames.ts')
const SPRITE_OUTPUT_FOLDER = 'public'
const SPRITE_FILE_NAME = 'icon-sprite.svg'

const spriter = new SVGSpriter({
  dest: SPRITE_OUTPUT_FOLDER,
  shape: {
    id: {
      generator: function (_name, file) {
        return file.basename.slice(0, -4)
      },
    },
  },
  mode: {
    symbol: {
      dest: '',
      sprite: SPRITE_FILE_NAME,
    },
  },
})

const files = glob.globSync(ICONS_GLOB)
const icons: string[] = []
files.forEach(function (file) {
  spriter.add(file, null, fs.readFileSync(file, { encoding: 'utf-8' }))

  const last = file.lastIndexOf('/')
  const name = file.slice(last + 1, -4)
  icons.push(`"${name}"`)
})

spriter.compile(function (error, result, data) {
  if (error) {
    console.log(error)
    return
  }

  for (var type in result.symbol) {
    console.log(result.symbol[type].path)
    fs.mkdirSync(path.dirname(result.symbol[type].path), { recursive: true })
    fs.writeFileSync(result.symbol[type].path, result.symbol[type].contents)
  }

  const fileContent = `
  // THIS IS AN AUTO-GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
  // You can update it by running \`yarn generate-icons-sprite\`
  
  export const ICON_NAMES = [${icons.join(', ')}] as const

  export type IconName = typeof ICON_NAMES[number]
  
  `

  writeFormattedFile(ICON_TYPES_PATH, fileContent)
})
