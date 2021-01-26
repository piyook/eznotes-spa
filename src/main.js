import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "initialize-css/dist/initialize.css";
import "typeface-roboto";

import FeatureCard from "./components/global/FeatureCard";
import PricingCard from "./components/global/PricingCard";
import NoticeBoard from "./components/global/NoticeBoardCard";
import NoteCard from "./components/global/NoteCard";
import LoadSpinner from "./components/global/LoadSpinner";
import AlertModal from "./components/global/AlertModal";

const app = createApp(App);

app.use(store)
.use(router)
.component('feature-card', FeatureCard)
.component('pricing-card', PricingCard)
.component('notice-board-card', NoticeBoard)
.component('note-card', NoteCard)
.component('load-spinner', LoadSpinner)
.component('alert-modal', AlertModal)

app.config.errorHandler = (err)=>{
    console.log("there was an error !!!"); 
    console.log(err);
}

app.config.devtools = true;

router.isReady().then(function() {
app.mount('#app');
});
