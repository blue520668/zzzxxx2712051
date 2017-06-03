<template>
<h1>　{{dataList.data.city}}天气</h1>
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseOne">
                        {{dataList.data.forecast[0].date}}
                    </a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                    <ul class="list-group">
                        <li class="list-group-item">天气　{{dataList.data.forecast[0].type}}</li>
                        <li class="list-group-item">风力　{{dataList.data.forecast[0].fengli}}</li>
                        <li class="list-group-item">风向　{{dataList.data.forecast[0].fengxiang}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[0].high}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[0].low}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel panel-success">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseTwo">
                         {{dataList.data.forecast[1].date}}
                    </a>
                </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
                <div class="panel-body">
                   <ul class="list-group">
                        <li class="list-group-item">天气　{{dataList.data.forecast[1].type}}</li>
                        <li class="list-group-item">风力　{{dataList.data.forecast[1].fengli}}</li>
                        <li class="list-group-item">风向　{{dataList.data.forecast[1].fengxiang}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[1].high}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[1].low}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseThree">
                        {{dataList.data.forecast[2].date}}
                    </a>
                </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
                <div class="panel-body">
                   <ul class="list-group">
                        <li class="list-group-item">天气　{{dataList.data.forecast[2].type}}</li>
                        <li class="list-group-item">风力　{{dataList.data.forecast[2].fengli}}</li>
                        <li class="list-group-item">风向　{{dataList.data.forecast[2].fengxiang}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[2].high}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[2].low}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel panel-warning">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseFour">
                         {{dataList.data.forecast[3].date}}
                    </a>
                </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse">
                <div class="panel-body">
                   <ul class="list-group">
                        <li class="list-group-item">天气　{{dataList.data.forecast[3].type}}</li>
                        <li class="list-group-item">风力　{{dataList.data.forecast[3].fengli}}</li>
                        <li class="list-group-item">风向　{{dataList.data.forecast[3].fengxiang}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[3].high}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[3].low}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel panel-warning">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseFive">
                         {{dataList.data.forecast[4].date}}
                    </a>
                </h4>
            </div>
            <div id="collapseFive" class="panel-collapse collapse">
                <div class="panel-body">
                   <ul class="list-group">
                        <li class="list-group-item">天气　{{dataList.data.forecast[4].type}}</li>
                        <li class="list-group-item">风力　{{dataList.data.forecast[4].fengli}}</li>
                        <li class="list-group-item">风向　{{dataList.data.forecast[4].fengxiang}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[4].high}}</li>
                        <li class="list-group-item">最{{dataList.data.forecast[4].low}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
    </script>
</template>
<script>
        // $(function () { $('#collapseOne').collapse('show')});
        // $(function () { $('#collapseTwo').collapse('hide')});
        // $(function () { $('#collapseThree').collapse('hide')});
        // $(function () { $('#collapseFour').collapse('hide')});
        // $(function () { $('#collapseFive').collapse('hide')});
    export default {
        data(){
            return {
                'dataList': [],
                curCatId: this.$route.params.cityId
            }
        },
        methods: {
            getCityList: function () {
                // this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city=' + this.curCatId
                // )
                this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city='+this.curCatId,{
                    
                },{
                    jsonp:'callback'
                }).then(function (res) {
                        this.dataList = res.data;
                    }, function () {
                        console.log('调用失败');
                    });
            }
        },
        created: function () {
            this.getCityList();

        },
        watch: {
            '$route' (to, from) {
                this.curCatId = to.params.city;
                this.getCityList();
            }
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
