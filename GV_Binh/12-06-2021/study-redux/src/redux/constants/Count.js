export const countAction = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

export const onIncrement = () => ({
    type: countAction.INCREMENT
})

export const onDecrement = () => ({
    type: countAction.DECREMENT
})