export function sanitizeString( message ) {
    return message.replace(/(<([^>]+)>)/ig,'').substring(0, 35);
}
export function validNick(nickname) {
    var regex = /^\w*$/;
    return regex.exec(nickname) !== null;
}

export const isWhiteSpaceOrNull = (str) => {
    try{
        return str.trim().length== 0
    }
    catch(err){
        console.error(err);
        return true;
    }
}