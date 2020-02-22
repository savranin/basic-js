module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) {
    return false;
  }
  let arrTeam = [];
  for (let element of members) {
    if (typeof element == 'string') {
      let newStr = element.trim();
      arrTeam.push(newStr[0].toUpperCase());
    }
  };
  return arrTeam.sort().join('');
};