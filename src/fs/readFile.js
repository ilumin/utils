import curryN from '../common/curryN'
import fse from 'fs-extra'
import parseFile from './parseFile'

const readFile = curryN(1, async (filePath, options = {}) => {
  const contents = await fse.readFile(filePath, 'utf8')
  return parseFile(filePath, contents, options)
})

export default readFile
