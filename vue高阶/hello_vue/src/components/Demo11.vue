<template>
  <div class="demo11">
    <h3>Axios请求</h3>
    <div class="list">
        <div class="main" v-for="(item,index) in list" :key="index">
            <div class="top">
                <div>{{item.title}}</div>
                <div>查看更多</div>
            </div>
            <div class="content">
                <div class="bottom" v-for="(item1,index1) in item.productDtoList" :key="index1">
                    <img :src="item1.pic" alt="">
                    <div class="word">{{item1.prodName}}</div>
                    <div class="price">￥<span>{{item1.price}}</span></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        /**
         * Promise({
         * 
         * }).then({
         * 
         * }).catch({
         * 
         * })
         */
        axios.get("http://shop-api.edu.koobietech.com/prod/tagProdList")
        .then(response => {
            console.log(response,'成功')
            this.list = response.data.data;
        })
        .catch(err => {
            console.log(err,'失败')
        })
    }
}
</script>

<style lang="scss">
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        .bottom {
            width: 33.33%;
            img {
                width: 90%;
                height: 110px;
            }
            .word {
                font-size: 12px;
                overflow: hidden;//多出的隐藏
                text-overflow: ellipsis;//多出部分用...代替
                display: -webkit-box;//定义为盒子模型显示
                -webkit-line-clamp: 2;//用来限制在一个块元素显示的文本的行数
                -webkit-box-orient: vertical;//从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
            }
            .price {
                font-size: 14px;
                color:#f00;
                span {
                    font-size:16px;
                }
            }
        }
    }
}
</style>