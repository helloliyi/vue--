import axiosIns from './axios' //发送请求需要的工具
import config from './config' //发送请求需要的原材料
import httpUtil from '@/util/http'

export default httpUtil(axiosIns, config)
