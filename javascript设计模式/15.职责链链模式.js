// 职责链模式

// 职责链 意思就是 一个功能 分模块去执行。

// 比如： 做火车 A (起点) -> B -> c -> D (终点)

// 当某一站发生'情况'就 修改某一站的代码

function A(){
    // ...
    B();
}

function B(){
    // ...

    C();
}

function C(){
    // ...
    D()
}

function D(){
    // end ...
}
