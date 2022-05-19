import uuid from 'react-uuid';
let items = [
    {
        id : uuid(),
        name : 'Ipad pro',
        discription : 'This Ipad is not common in many countries',
        price : '$400'
    },
    {
        id : uuid(),
        name : 'Portable universal mifi',
        discription : 'New portable universal mifi that can pick any sim card',
        price : '$50'
    },
    {
        id : uuid(),
        name : 'MacBook pro',
        discription : '16GB ram, hash colour, 1TB space and high quality graphics',
        price : '$1000'
    },
    {
        id : uuid(),
        name : 'T-shirt',
        discription : 'Medium white T-shirt made with cotton',
        price : '$10'
    },
    {
        id : uuid(),
        name : 'Head phone',
        discription : 'Head phone with microphone and volume emulator',
        price : '$17',
    }
]

export {items};