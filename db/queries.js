const db = require('./connections')

function getLinks() {
  return db.select('*').from('links').returning(['id', 'linkName', 'url', 'votes'])
}

function updateVote(id, linkData) {
    // Update a user where email matches user email
    return db.table('links').update(linkData).where('id', id)  
    // .returning(['id','name', 'email','company','position', 'skills','code']);
  }


module.exports = {
  getLinks,
  updateVote
}