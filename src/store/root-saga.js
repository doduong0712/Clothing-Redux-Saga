import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}

/* 
function* gen() {
    console.log('a');
    console.log('b');
}
const g=gen() // Do nó là GFunc nên gán vào biến nó sẽ ko chạy
nếu ta chỉ gọi g thì sẽ ko đc gì và thông báo là Gfunc
ta cần phải khai báo g.next() mới thực thi được hàm
và sẽ có 2 tham số value,done(thực thi func thành ko ko bị lỗi,nếu done:false thì sẽ tiếp tục đc thực thi ở giá trị hàm cũ )
Trong Gfunc ta có thể dùng yield để lưu giá trị cho function
function* gen(i) {
    Nếu được gán cho một biến vào func thì yield sẽ lưu lại giá trị vào biến đó 
    yield i;
    yield i+10;
    return 25;
}
const g = gen(5);//undefined
g.next()// 5
g.next()// 15
g.next()// 25 
*/
//Generator Functions gần giống như async/await
//các sự kiện dựa trên lời hứa của chúng tôi, nơi chúng tôi tạm dừng việc thực thi bên trong một hàm không đồng
