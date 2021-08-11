// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':

            // 언제나 원본 오브젝트를 반환해야함
            return action.payload;
            
            // 잘못된 예
            // state.title = book.title
            // return state
    }
    return state;
}