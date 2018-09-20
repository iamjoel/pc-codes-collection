import Vue from 'vue'

import axios from 'axios'
require('@/service/interceptor') // axios 拦截器，做通用报错等
Vue.prototype.$http = axios

require('@/assets/filters')

import {IMGS_PREFIX} from '@/setting'
Vue.prototype.$imgPrefix = IMGS_PREFIX

require('@/service/mock') // mock 数据