// ---------------------------------------------------------------------------------------------------------------------------------
// - store: kho chứa các state, khi component nào cần sẽ lấy ra
//     + Dispatcher: Gọi đến function dispatcher để gửi action cho reducer
//     + Reducer: phân tích action => ra cho store các state mới | có 'type: phân biệt hành động' | Mỗi action sẽ có một Reducer
// ---------------------------------------------------------------------------------------------------------------------------------
// componentWillMoun: chạy trước khi rerder, dùng để gọi một cái gì đó trước khi rendor chạy // chỉ dc gọi 1 lần
// componentDidMount: chạy sau khi rerder, dùng fetch data
//
// mapStateToProps: lấy phần state yêu cầu của component chuyển thành props của component đó
// mapDispatchToProps: dispatch một action gọi lên trên store để reducer sử lý phần action
/*
    onChange = (e) => {
        var target = e.target;
        var name = target.name; // lay name cua cac input
        var value = target.type === 'checkbox' ? target.checked : target.value; // lay gia tri cua tung o input
        this.setState({
            [name]: value // luu dc input
        });
    }
*/
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




