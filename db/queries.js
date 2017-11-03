const db = require('./connections')

function getLinks() {
  return db.select('*').from('links').returning(['id', 'linkName', 'url', 'votes'])
}

function upVote(id, linkData) {
    // Update a user where email matches user email
    return db('links').where('id', id).update('votes', Number(votes) + 1)
    // .returning(['id','name', 'email','company','position', 'skills','code']);
  }

function addLink(link) {
  return db('links').insert(link).returning(['id', 'linkName', 'url', 'votes'])
}

function getComments(comment) {
  return db.select('*').from('comments').where('link_id', id).returning(['id', 'name', 'content', 'link_id'])
}

module.exports = {
  getLinks,
  upVote,
  addLink,
  getComments
}