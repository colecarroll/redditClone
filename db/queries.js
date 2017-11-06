const db = require('./connections')

function getLinks() {
  return db.select('*').from('links').orderBy('votes', 'desc')
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

function getComments(id) {
  return db.select('*').from('comments').where('link_id', id).returning(['id', 'name', 'content', 'link_id'])
}

function linkName(id) {
  return db.select('*').from('links').where('id', 'id').returning(['linkName'])
}

function addComment(comment){
  return db('comments').insert(comment).returning(['id', 'name', 'content', 'link_id'])
}


module.exports = {
  getLinks,
  upVote,
  downVote,
  addLink,
  getComments,
  linkName,
  addComment
}