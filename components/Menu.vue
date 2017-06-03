<template>
<nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">天气_App</a>
    </div>
    <div class="collapse navbar-collapse in" id="example-navbar-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
            <li class="dropdown">
                                   <div class="input-group">
					<input type="text" class="form-control" placeholder="城市/直辖市/特别行政区" v-model="searchkey">
					<span class="input-group-btn">
						<button class="btn btn-default" type="button" @click="getCityList()" v-link="{path:'/menu/'+searchkey}" >
							搜索
						</button>
					</span>
				</div>
                
            </li>
        </ul>
    </div>
    </div>
</nav>
<router-view></router-view>
</template>
<script>
  export default{
      data(){
          return{
              dataList:[],//保存从api获取到的数据；
              searchkey:''   //搜索
      }
          },
          methods:{
              getCityList(){ //获取分类数据；
              this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?city='+this.searchkey
              ).then(function(res){
                  this.dataList=res.data;
              },function(){
                  console.log('erre');
              })
              }
          }
  }
</script>













