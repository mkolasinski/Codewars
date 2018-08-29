function findAdmin(list, lang) {
  return list.filter(a => a.language === lang && a.githubAdmin === 'yes');
}