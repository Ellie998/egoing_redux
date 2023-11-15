import { createStore } from "./node_modules/redux";

function reducer(state, action) {
  // dispatch에 의해 action이 들어오면 reducer가 acction값과 기존에 있던 state 값을 참조하여 새로운 state 값을 만들어주는 역할을 한다.
  if (state === undefined) {
    //최초의 초기화 단계
    // 최초의 state 값을 return한다.
    return { color: "yellow" };
  }
}
var store = createStore(reducer);
console.log(store.getState());
function red() {
  document.getElementById("red").innerHTML = `
  <div class="container" id="conponent_red">
    <h1>red</red>
    <input type="button" value="fire" onclick='document.getElementById("conponent_red").style.backgroundColor = "red";document.getElementById("conponent_green").style.backgroundColor = "red";'/>
  </div>
`;
}
red();
