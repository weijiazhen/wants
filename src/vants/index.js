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
    //导航栏
    NavBar,
    //输入框
    Field,
    // 按钮
    Button,
    // 单元格
    Cell,
    CellGroup,
} from 'vant';


export default () => {
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Search);
    Vue.use(Icon);
    //导航栏
    Vue.use(NavBar);
    // 输入框
    Vue.use(Field);
    // 按钮
    Vue.use(Button);
    // 单元格
    Vue.use(Cell).use(CellGroup);


}