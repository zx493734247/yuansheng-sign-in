const undici = require('undici')
const md5 = require('md5')
const randomstring = require('randomstring')

const { machineIdSync } = require('node-machine-id')
const format = require('string-format')
format.extend(String.prototype, {})

const CONFIG = require('./settings')

const debug = require('util').debuglog('genshin')

debug(machineIdSync({ original: true }))

function getDS() {
  const randomStr = randomstring.generate({ length: 6 })
  const timestamp = Math.floor(Date.now() / 1000)

  // iOS sign
  const sign = md5(`salt=h8w582wxwgqvahcdkpvdhbh2w9casgfl&t=${timestamp}&r=${randomStr}`)
  const DS = `${timestamp},${randomStr},${sign}`
  return DS
}

const headers = {
  'Accept-Encoding': 'gzip, deflate, br',
  'User-Agent': CONFIG.USER_AGENT,
  // 1:  ios
  // 2:  android
  // 4:  pc web
  // 5:  mobile web
  'x-rpc-client_type': '5',
  'x-rpc-device_id': machineIdSync({ original: true }),
  'x-rpc-app_version': CONFIG.APP_VERSION,
  DS: getDS(),
  Referer: CONFIG.REFERER_URL,
  Cookie: process.env.COOKIE,
}

// 获取角色信息
function getUserGameRoles() {
  return undici.request(CONFIG.ROLE_URL, { headers }).then((res) => res.body.json())
}

// 获取当前签到状态信息
function getRewardInfo(region, uid) {
  return undici.request(CONFIG.INFO_URL.format(region, uid), { headers }).then((res) => res.body.json())
}

// 获取签到奖励列表
function getReward() {
  return undici.request(CONFIG.getAwards, { headers }).then((res) => res.body.json())
}

// 签到
function bbsSignReward(region, uid) {
  return undici
    .request(CONFIG.SIGN_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        act_id: CONFIG.ACT_ID,
        region: region,
        uid,
      }),
    })
    .then((res) => res.body.json())
}

module.exports = {
  getUserGameRoles,
  getRewardInfo,
  getReward,
  bbsSignReward,
}
