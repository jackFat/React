// reducer构造函数 专门处理action

const initState = {
  value: '我是默认值'
}
const reducer = (state = initState, action) => {
  console.log(state, action)
  switch(action.type) {
    case 'send_type':
      return Object.assign({}, state, action)
    default:
      return state
  }
}

module.exports = {
  reducer
}