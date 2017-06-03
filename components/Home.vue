<template>
    <!--导航-->
    <menu></menu>
    <!--热门城市天气-->
    <hot></hot>
</template>
<script>
    import Menu from './Menu.vue';
    import Hot from './Hot.vue';

    export default{
        components: {
            'menu': Menu,
            'hot': Hot
        }
    }
</script>