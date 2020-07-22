import fs from "fs"
import dayjs from "dayjs"

const ARGV_2 = process.argv[2]
const red = `\u001b[31m`
const green = `\u001b[32m`
const reset = `\u001b[0m`

const createNewBlog: () => void = () => {
  if (ARGV_2 === undefined) {
    console.log(`${red}error${reset} fileName is empty!`)
    return
  }

  const date: dayjs.Dayjs = dayjs()
  const fileName: string = ARGV_2
  const texts: string[] = [
    `---`,
    `title: ""`,
    `created: "${date.format(`YYYY-MM-DD`)}"`,
    `updated: "${date.format(`YYYY-MM-DD`)}"`,
    `path: "/${fileName}"`,
    `description: ""`,
    `visual: ""`,
    `---`,
    ``
  ]

  fs.mkdir(`src/posts/${date.format(`YYYYMMDD`)}-${fileName}`, (error) => {
    if (error) throw error
  })

  fs.writeFile(
    `src/posts/${date.format(`YYYYMMDD`)}-${fileName}/${fileName}.md`,
    texts.join(`\n`),
    (error) => {
      if (error) throw error
    }
  )

  console.log(`${green}success${reset} created ${fileName}!`)
  return
}

createNewBlog()
