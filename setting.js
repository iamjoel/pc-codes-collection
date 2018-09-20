var HOST
var imgPrefix

if (process.env.NODE_ENV === 'development') {
  HOST = 'http://127.0.0.1:7001'
  imgPrefix = 'http://127.0.0.1:7001/public/img'
} else {
  HOST = 'http://127.0.0.1:7001'
  imgPrefix = 'http://127.0.0.1:7001/public/img'
}

export const SERVER_PREFIX = `${HOST}/api`
export const IMGS_PREFIX = imgPrefix

export const urls = {
  
}