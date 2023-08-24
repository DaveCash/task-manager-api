module.exports = () => {
    return {
        messages: () => {
            return {
                send: (data, fn) => {
                    fn(undefined, {id: '123'})
                }
            }
        }
    }
}