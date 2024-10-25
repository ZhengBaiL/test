export const mixin = {
    methods: {
        showTitle() {
            alert("选中了");
            console.log("我的标题是" + this.aaa);
        }
    },
    mounted() {
        console.log("挂载了")
    },
}