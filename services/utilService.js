import fs from "fs"

export const utilService = {
  sortingByTitleComparator,
  makeId,
  readJsonFile,
}

function sortingByTitleComparator(sortDir){
  if (sortDir === -1){
    return sortByTitleDescending
  }else{
    return sortByTitleAscending
  }
}

function sortByTitleAscending(a, b) {
  if (a.title < b.title) {
    return -1
  } else {
    return 1
  }
}

function sortByTitleDescending(a, b) {
  return sortByTitleAscending(b, a)
}

function makeId(length = 8) {
  var txt = ""
  var characterPoll =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < length; i++) {
    txt += characterPoll.charAt(Math.floor(Math.random() * characterPoll.length))
  }

  return txt
}

function readJsonFile(path) {
  const str = fs.readFileSync(path, "utf8")
  const json = JSON.parse(str)
  return json
}
