import 'pinia'
import { Router } from 'vue-router'
/* eslint-disable */
declare module 'pinia' {
    export interface PiniaCustomProperties{
        router: Router
    }
  }
  