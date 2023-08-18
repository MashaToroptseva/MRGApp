import Vue from 'vue'
import App from './App.vue'
import bridge from '@vkontakte/vk-bridge';

Vue.config.productionTip = false

window.bridge = bridge;

window.bridge.send('VKWebAppInit')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

new Vue({
    render: h => h(App),
}).$mount('#app')
