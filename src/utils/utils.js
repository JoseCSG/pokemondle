export const getColorFromType = (type) => {
    switch (type) {
        case 'fire':
        return 'red-500'
        case 'water':
        return 'blue-500'
        case 'grass':
        return 'green-500'
        case 'electric':
        return 'yellow-500'
        case 'ice':
        return 'blue-200'
        case 'ground':
        return 'yellow-700'
        case 'rock':
        return 'yellow-900'
        case 'fairy':
        return 'pink-200'
        case 'poison':
        return 'purple-500'
        case 'bug':
        return 'green-700'
        case 'dragon':
        return 'purple-900'
        case 'psychic':
        return 'pink-500'
        case 'flying':
        return 'blue-500'
        case 'fighting':
        return 'red-900'
        case 'normal':
        return 'gray-500'
        case 'ghost':
        return 'purple-700'
        case 'dark':
        return 'gray-900'
        case 'steel':
        return 'gray-700'
        default:
        return 'gray-500'
    }
}