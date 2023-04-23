import { defineNuxtPlugin } from "nuxt/app";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true});
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Textarea', Textarea);
  nuxtApp.vueApp.component('InputText', InputText);

});

