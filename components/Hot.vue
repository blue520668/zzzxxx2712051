<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title text-center">热门天气</h3>
        </div>
        <div class="panel-body">
            <!--天气轮播-->
            <div id="myCarousel" class="carousel slide">
                <!-- 轮播（Carousel）项目 -->
                <div class="carousel-inner">
                    <div class="item active">
                        <div style="width:100%;height: 160px;background-color: #b7eef7;">
                            <h1 class="text-warning text-center">{{data1.forecast[0].type}}</h1>
                            <h3 class="text-danger text-center">最{{data1.forecast[0].high}}</h3>
                            <h5 class="text-primary text-center">最{{data1.forecast[0].low}}</h5>
                        </div>
                        <div style="font-size: 50px; width: 260px;height: 70px;">　北京天气</div>
                        <h3>　　当前温度:{{data1.wendu}}</h3>
                        <h3 class="text-center">温馨提示:<br>{{data1.ganmao}}</h3>
                    </div>
                    <div class="item">
                        <div style="width:100%;height: 160px;background-color: #b7eef7;">
                            <h1 class="text-warning text-center">{{data2.forecast[0].type}}</h1>
                            <h3 class="text-danger text-center">最{{data2.forecast[0].high}}</h3>
                            <h5 class="text-primary text-center">最{{data2.forecast[0].low}}</h5>
                        </div>
                        <div style="font-size: 50px; width: 260px;height: 70px;">　上海天气</div>
                        <h3>　　当前温度:{{data2.wendu}}</h3>
                        <h3 class="text-center">温馨提示:<br>{{data2.ganmao}}</h3>
                    </div>
                    <div class="item">
                        <div style="width:100%;height: 160px;background-color: #b7eef7;">
                            <h1 class="text-warning text-center">{{data3.forecast[0].type}}</h1>
                            <h3 class="text-danger text-center">最{{data3.forecast[0].high}}</h3>
                            <h5 class="text-primary text-center">最{{data3.forecast[0].low}}</h5>
                        </div>
                        <div style="font-size: 50px; width: 260px;height: 70px;">　广州天气</div>
                        <h3>　　当前温度:{{data3.wendu}}</h3>
                        <h3 class="text-center">温馨提示:<br>{{data3.ganmao}}</h3>
                    </div>
                    <div class="item">
                        <div style="width:100%;height: 160px;background-color: #b7eef7;">
                            <h1 class="text-warning text-center">{{data4.forecast[0].type}}</h1>
                            <h3 class="text-danger text-center">最{{data4.forecast[0].high}}</h3>
                            <h5 class="text-primary text-center">最{{data4.forecast[0].low}}</h5>
                        </div>
                        <div style="font-size: 50px; width: 260px;height: 70px;">　深圳天气</div>
                        <h3>　　当前温度:{{data4.wendu}}</h3>
                        <h3 class="text-center">温馨提示:<br>{{data4.ganmao}}</h3>
                    </div>
                </div>
                <!-- 轮播（Carousel）导航 -->
                <a class="carousel-control left" href="#myCarousel"
                   data-slide="prev">&lsaquo;
                </a>
                <a class="carousel-control right" href="#myCarousel"
                   data-slide="next">&rsaquo;
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                'data1': [],
                'data2': [],
                'data3': [],
                'data4': []
            }
        },
        methods: {
            getC1List: function () {
                this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city=北京')
                    .then(function (res) {
                        this.data1 = res.data.data;
                    }, function () {
                        console.log('北京调用失败');
                    });
            },
            getC2List: function () {
                this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city=上海')
                    .then(function (res) {
                        this.data2 = res.data.data;
                    }, function () {
                        console.log('上海调用失败');
                    });
            },
            getC3List: function () {
                this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city=广州')
                    .then(function (res) {
                        this.data3 = res.data.data;
                    }, function () {
                        console.log('广州调用失败');
                    });
            },
            getC4List: function () {
                this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city=深圳')
                    .then(function (res) {
                        this.data4 = res.data.data;
                    }, function () {
                        console.log('深圳调用失败');
                    });
            }
        },
        created: function () {
            this.getC1List();
            this.getC2List();
            this.getC3List();
            this.getC4List();
        }
    }
</script>
<style>

    /*适配屏幕*/
    @media (max-width: 768px) {
        .arc-list p {
            height: 72px;
            line-height: 20px;
        }

        .arc-list img {
            width: 120px;
            height: 150px;
        }
    }
</style>
