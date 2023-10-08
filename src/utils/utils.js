export const getColorFromType = (type) => {
    switch (type) {
        case 'fire':
        return 'bg-red-500'
        case 'water':
        return 'bg-blue-500'
        case 'grass':
        return 'bg-green-500'
        case 'electric':
        return 'bg-yellow-500'
        case 'ice':
        return 'bg-blue-200'
        case 'ground':
        return 'bg-yellow-700'
        case 'rock':
        return 'bg-yellow-900'
        case 'fairy':
        return 'bg-pink-200'
        case 'poison':
        return 'bg-purple-500'
        case 'bug':
        return 'bg-green-700'
        case 'dragon':
        return 'bg-purple-900'
        case 'psychic':
        return 'bg-bg-pink-500'
        case 'flying':
        return 'bg-blue-500'
        case 'fighting':
        return 'bg-red-900'
        case 'normal':
        return 'bg-gray-500'
        case 'ghost':
        return 'bg-purple-700'
        case 'dark':
        return 'bg-gray-900'
        case 'steel':
        return 'bg-gray-700'
        default:
        return 'bg-gray-500'
    }
}

export const getRegion = (region) => {
    switch (region) {
        case '1':
        return 'Kanto'
        case '2':
        return 'Johto'
        case '3':
        return 'Hoenn'
        case '4':
        return 'Sinnoh'
        case '5':
        return 'Unova'
        case '6':
        return 'Kalos'
        case '7':
        return 'Alola'
        case '8':
        return 'Galar'
        default:
        return 'Unknown'
    }
}