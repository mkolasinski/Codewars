const devFromEurope = ({language, continent}) => language === 'JavaScript' && continent === 'Europe';
const countDevelopers = list => list.filter(devFromEurope).length;