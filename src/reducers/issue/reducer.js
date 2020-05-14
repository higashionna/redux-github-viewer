const initialData = {
    1: {
        id: 1,
        title: 'A bug in Top Page',
        status: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createBy: ''
    },
    2: {
        id: 2,
        title: 'A problem of performance in Top Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 0,
        createBy: ''
    },
    3: {
        id: 3,
        title: 'fix layout',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 1,
        createBy: ''
    }
}

const intialState = ({ datas: initialData })

const issueReducer = (state = intialState) => {
    return state
}

export default issueReducer