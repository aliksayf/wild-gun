// const list = [{
//     id: 1,
//     order: 'first',
//     bgc: 'darkgrey'
// },
//     {
//         id: 2,
//         order: 'second',
//         bgc: 'grey'
//     },
//     {
//         id: 3,
//         order: 'third',
//         bgc: 'darkgrey'
//     }]

const list = []

const func = () => {
        let y = 52;
        let x = 51;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <=7; j++) {
            list.push({
                top: y,
                left: x
            })
            x += 107
       }
        x = 51
        y += 182
    }
    return null
}

func();

export {list};
