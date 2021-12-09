class Print {
    constructor(printHTML){
        this.printHTML = printHTML || null;
    }
    // run 打印执行
    print(title){
        console.log(this.printHTML instanceof Object);
        this.title = title || document.title;
        this.createElement();
    }
    // 创建元素
    createElement(){
        this.iframe = document.createElement('iframe');// 创建iframe元素
        this.iframe.style.display = 'none';
        document.body.appendChild(this.iframe);
        let iframeDoc = this.iframe.contentWindow.document;
        iframeDoc.head.innerHTML = this.SetHead();
        iframeDoc.body.innerHTML = this.getMainDom();
        console.dir(iframeDoc.head);
        this.iframe.contentWindow.focus();
        this.iframe.contentWindow.print();
        console.log(this.iframe);
        document.body.removeChild(this.iframe);
    }
    // 获取样式
    getCss(){
        this.css = document.styleSheets;// 所有doc样式
        let cssReg = /@media print/gi;// 查找打印标识的style样式
        let styleSheetsArr = [];
        let cssMain = "";// 样式主体
        for (const i in this.css) {
            if (this.css.hasOwnProperty(i)) {
                styleSheetsArr.push(this.css[i]);
            }
        }
        styleSheetsArr.forEach(cssItem => {
            if (cssReg.test(cssItem.ownerNode.innerText)){
                cssMain = cssItem.ownerNode.innerHTML;
            }
        })

        return cssMain;
    }
    // <head>（title） 设置
    SetHead(){
        let cssMain = this.getCss();
        let headStr = `
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>${this.title}</title>
            <style>${cssMain}</style>
        `
        return headStr;
    }
    // 获取主体
    getMainDom(){
        let printMain = "";
        if (this.printHTML == null){
            console.error('printHTML is null, 无dom元素');
        } else {
            if (this.printHTML instanceof Object){
                this.printHTML.default.forEach(element => {
                    printMain += element.elm.outerHTML;
                });
            } else {
                printMain = this.printHTML;
            }
        }
        return printMain;
    }
}

export default Print;