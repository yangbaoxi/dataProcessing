// export

// export 抛出

// 写法1：
export function A (){
    // ...
}

// 写法2：
export {
    A
}

// 写法3：
function B (){}
export default B

// import 引入

// 1 => 
import { A } from "./module.js";
// 2 => 
import * as module from "./module.js";
// 3 => 
import B from "./module.js";

// 如果在一个 js 中 又 export default 又有其他单独方法 ：

export function A (){
    // ...
}

export default function B(){
    // ...
}

// 在引入的时候 如果引入默认

import _ from "./module.js";

// 默认+其他

import _, { A } from "./module.js";
