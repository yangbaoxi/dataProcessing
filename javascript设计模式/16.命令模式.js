// 命令模式

// 概念：

// 将请求封装成对象，分离命令接受者和发起者之间的耦合。 命令执行之前在执行对象中传入接受者。主要目的相互之间的解耦。简单而言分为三个对象，
// 1、发起者：发出调用命令即可，具体如何执行，谁执行并不需要清楚。
// 2、接受者：有对应的接口处理不同的命令，至于命令是什么，谁发出的，不用关心
// 3、命令对象：上面讲发起者和接受者分开了，二者之间需要个连接桥梁。这就是命令对象。命令对象接受发送者的调用，然后调用接受者的相应接口。

// 发布一些命令，但不清楚接受者和请求的操作。命令是指执行某些事情的指令。即只用知道发布了一个指令就行，具体做什么谁来做不用关心。其实是回调函数面向对象的替代品。

// 示例：

// 需求：领导给项目经理下达任务，项目经理给 A B 员工分配任务。

// 非命令模式： 

// 领导
function Leader(){
    projectManager('A');
    projectManager('B');
}

// 项目经理
function projectManager(name){
    if (name == 'A'){
        A();
    } else if (name == "B") {
        B();
    }
}

// A 员工：
function A () {
    console.log('A员工执行工作');
}
// B 员工
function B(){
    console.log("B员工执行工作")
}
// ===================================================
// 命令模式抽象代码：

// 命令函数 
function Command(){
    let staff = {
        A(a, b){
            console.log('a', a);
            console.log('b', b);
            console.log('A员工执行工作');
        },
        B(){
            onsole.log("B员工执行工作")
        }
    }
    return {
        excute(msg){ // 发布指令接口
            if (!msg) return;
            if (msg.length && Object.prototype.toString.call(msg) === "[object Array]") { // 如果是数组
                // 数组处理
                for (let i = 0; i < msg.length; i++) {
                    arguments.callee(msg[i]);
                }
            } else if (Object.prototype.toString.call(msg) === "[object Object]"){
                // 对象处理
                msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
                staff[msg.command].apply(staff, msg.param);
            } else {
                console.error('对不起，暂不支持此命令！');
            }
        }
    }
}

let command = new Command();

// 总经理
console.log(command.excute({
    command: "A"
}))

// 副经理
console.log(command.excute([{
    command: "B"
}]))
