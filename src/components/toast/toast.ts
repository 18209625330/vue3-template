import ToastView from './ToastView.vue';
import { createVNode, render } from 'vue';

interface IOptions {
    message: string;
    duration?: number;
    onClose?: any;
}
//是否存在toast，防止toast在未销毁前连续点击按钮触发虚拟dom
let isToast = false;

const Toast=(opts: IOptions)=> {
    if (!isToast) {
        isToast = true;//在toast未销毁前，不执行以下程序
        //创建虚拟节点
        // const vm: Ref<any> = ref();
        const vm: any = createVNode(ToastView);
        //创建div容器
        const container = document.createElement("div");
        //渲染虚拟节点
        render(vm, container);
        //将创建好的div元素添加到body元素内
        document.body.appendChild(container);
        //设置toast.vue文件中的props选项内部的message的值
        vm.component.props.message=opts.message || "";
        const duration = opts.duration ?? 2000;

        setTimeout(() => {
            //销毁toast
            document.body.removeChild(container);
            //toast销毁后将isToast设置为false，可以再次创建toast
            isToast = false;
            //如果存在onClose方法
            if (opts.onClose) {
                //调用onClose
                opts.onClose();
            }
        }, duration);
    }
}

export default Toast
