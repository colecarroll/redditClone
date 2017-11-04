const db = require('./connections')

function getLinks() {
  return db.select('*').from('links').returning(['id', 'linkName', 'url', 'votes'])
}

function upVote(id, linkData) {
    return db.table('links').where('id', id).update('votes', Number(linkData.votes)+ 1)
  }

  function downVote(id, linkData) {
    return db.table('links').where('id', id).update('votes', Number(linkData.votes) - 1)
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
  downVote,
  addLink,
  getComments
}