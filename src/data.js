export const data = {
    pictures: [
        {
            name : '1',
            image: '1', 
        },
        {
            name : '2',
            image: '2', 
        },
        {
            name : '3',
            image: '3', 
        },
        {
            name : '4',
            image: '4', 
        },
        {
            name : '5',
            image: '5', 
        },
        {
            name : '6',
            image: '6', 
        },
        {
            name : '7',
            image: '7', 
        },
        {
            name : '8',
            image: '8', 
        },
        {
            name : '9',
            image: '9', 
        },
        {
            name : '10',
            image: '10', 
        },
        {
            name : '11',
            image: '11', 
        },
        {
            name : '12',
            image: '12', 
        },

    ]
}

export function getData() { 
    return data.pictures.filter(e => e);
}