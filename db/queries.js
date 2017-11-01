const db = require('./connections')

function getLinks() {
  return db.select('*').from('links').returning(['linkName', 'url', 'votes'])
}


module.exports = {
  getLinks
}