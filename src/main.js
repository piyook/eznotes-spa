import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "initialize-css/dist/initialize.css";
import "typeface-roboto";

import FeatureCard from "./components/global/FeatureCard";
import PricingCard from "./components/global/PricingCard";
import NoticeBoard from "./components/global/NoticeBoardCard";

const app = createApp(App);

app.use(store)
.use(router)
.component('feature-card', FeatureCard)
.component('pricing-card', PricingCard)
.component('notice-board-card', NoticeBoard);

app.config.errorHandler = (err)=>{
    console.log("there was an error !!!"); 
    console.log(err);
}

app.mount('#app')
