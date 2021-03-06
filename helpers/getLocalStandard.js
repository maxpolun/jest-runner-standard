const path = require('path')
const findUp = require('find-up')

exports.getLocalStandard = rootDir => {
  const nodeModulesPath = findUp.sync('node_modules', { cwd: rootDir })
  return require(path.resolve(nodeModulesPath, 'standard'))
}
