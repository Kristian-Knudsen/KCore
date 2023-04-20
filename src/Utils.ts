export const _colors = {
    'primary': 'bg-blue-400 hover:bg-blue-500 text-white border-blue-400 hover:border-blue-500 border transition',
    'warning': 'bg-yellow-400 hover:bg-yellow-500 text-white border-yellow-400 hover:border-yellow-500 border transition',
    'info': 'bg-indigo-300 hover:bg-indigo-400 text-white border-indigo-300 hover:border-indigo-400 border transition',
    'error': 'bg-red-500 hover:bg-red-800 text-white border-red-500 hover:border-red-800 border transition',
    'black': 'bg-black hover:bg-gray-600 text-white border-black hover:border-gray-600 border transition',
    'white': 'bg-white hover:bg-gray-100 text-black border-black border border transition'
};

export const findColorWay = (colorWay: string, hoverable: boolean = true): string => {
    let result = "";
    switch (colorWay) {
        case 'primary':
            result = _colors.primary
            break;
        case 'warning':
            result = _colors.warning;
            break;
        case 'info':
            result = _colors.info;
            break;
        case 'error':
            result = _colors.error;
            break;
        case 'black':
            result = _colors.black;
            break;
        case 'white':
            result = _colors.white;
            break;
        default:
            console.log(`${colorWay} is not a valid colorWay! Valid options are: primary, warning, info, error, black & white`)
            break;
    }

    if(!hoverable) {
        return  result.split(" ").filter(item => !item.trim().includes('hover') && !item.trim().includes('transition')).join(" ");
    }
    return result;
};

