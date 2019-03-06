import { WANTED_LOCKFILE } from '@pnpm/constants'
import fs = require('fs')
import path = require('path')

export default (pkgPath: string) => new Promise((resolve, reject) => {
  fs.access(path.join(pkgPath, WANTED_LOCKFILE), (err) => {
    if (!err) {
      resolve(true)
      return
    }
    if (err.code === 'ENOENT') {
      resolve(false)
      return
    }
    reject(err)
  })
})
