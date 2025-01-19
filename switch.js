const day=2;
switch(day){
    case 0:
        console.log('saturday')
        break;
    case 1:
        console.log('sunday')
        break;
    case 2:
        console.log('monday')
        break;
    default :
    throw new Error('invalid day');

}