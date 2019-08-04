import Vue from 'vue'
// import vant from 'vant'
// 第三方组件
// 搜索
import {
    //头部搜索框
    Search,
    //底部导航
    Tabbar,
    TabbarItem,
    //图标引入
    Icon,
} from 'vant';

export default () => {
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Search);
    Vue.use(Icon);
}