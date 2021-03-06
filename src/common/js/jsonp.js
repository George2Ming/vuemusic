import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = '' ;
  for (let i in data) {
    let val = data[i] !== undefined ? data[i] : '';
    url += `&${i}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : '';
}
