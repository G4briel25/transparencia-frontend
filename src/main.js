import 'primeicons/primeicons.css';
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';
import Tooltip from 'primevue/tooltip';

import App from './App.vue'
import router from './router/index.js'
import {definePreset} from "@primeuix/themes";

const app = createApp(App)

app.use(createPinia())
app.use(router);

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            0: '#fff',
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },

        colorScheme: {
            // light: {
            //     surface: {
            //         0: '#fff',
            //         50: '{zinc.50}',
            //         100: '{zinc.100}',
            //         200: '{zinc.200}',
            //         300: '{zinc.300}',
            //         400: '{zinc.400}',
            //         500: '{zinc.500}',
            //         600: '{zinc.600}',
            //         700: '{zinc.700}',
            //         800: '{zinc.800}',
            //         900: '{zinc.900}',
            //         950: '{zinc.950}'
            //     }
            // },
            // dark: {
            //     surface: {
            //         0: '#ffffff',
            //         50: '{slate.50}',
            //         100: '{slate.100}',
            //         200: '{slate.200}',
            //         300: '{slate.300}',
            //         400: '{slate.400}',
            //         500: '{slate.500}',
            //         600: '{slate.600}',
            //         700: '{slate.700}',
            //         800: '{slate.800}',
            //         900: '{slate.900}',
            //         950: '{slate.950}'
            //     }
            // }
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark'
        }
    }
});

app.directive('tooltip', Tooltip);
app.use(ConfirmationService);
app.use(ToastService);

app.mount("#app");