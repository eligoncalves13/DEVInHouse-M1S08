export function handleGenerateBg(type) {
    const types = {
      grass: '#48b87c',
      fire: '#b85748',
      water: '#4851b8',
      electric: '#baa33d',
      poison: '#b97fc9'
    }
  
    return types[type] || '#CCC';
  }