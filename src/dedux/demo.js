// - store: kho chứa các state, khi component nào cần sẽ lấy ra
//     + Dispatcher: Gọi đến function dispatcher để gửi action cho reducer
//     + Reducer: phân tích action => ra cho store các state mới | có 'type: phân biệt hành động' | Mỗi action sẽ có một Reducer
import { createStore } from 'redux'

var data = {
    status: false,
    menu: {
        nameFood: 'egg',
        price: '10000'
    }
} // state

let myReducer = (state = data, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        //  state.status = 'true';
        state.status = !state.status;
    }
    if (action.type === 'TOGGLE_MENU') {
        var { nameFood, price } = action.menu;
        return{
            menu : {
                nameFood : nameFood,
                price :price
            }
        }
    }
    return state;
} // action
const store = createStore(myReducer); // Reducer

// thuc hien cong viec thay doi status ->
var action = { type: 'TOGGLE_STATUS' };
store.dispatch(action);
console.log('DATA: ', store.getState()); // Store
// ------------------------------------- //
// thuc hien cong viec thay doi status ->
var actionSort = {
    type: 'TOGGLE_MENU', menu: {
        nameFood: 'chicket',
        price: '20000'
    }
};
store.dispatch(actionSort);

console.log('DATA: ', store.getState()); // Store
// ------------------------------------- //




