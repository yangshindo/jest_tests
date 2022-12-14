// Compara duas palavras (st1, str2) para verificar existĂȘncia de anagrama. 
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Cria anagramas
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = isAnagram;
