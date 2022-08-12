require('dotenv').config()

const ACT_ID = 'e202009291139501'
const APP_VERSION = '2.34.1'

module.exports = {
  ACT_ID,
  APP_VERSION,
  USER_AGENT: `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/${APP_VERSION}`,
  REFERER_URL: `https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=${ACT_ID}&utm_source=bbs&utm_medium=mys&utm_campaign=icon`,
  AWARD_URL: `https://api-takumi.mihoyo.com/event/bbs_sign_reward/home?act_id=${ACT_ID}`,
  ROLE_URL: 'https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn',
  INFO_URL: `https://api-takumi.mihoyo.com/event/bbs_sign_reward/info?act_id=${ACT_ID}&region={}&uid={}`,
  SIGN_URL: 'https://api-takumi.mihoyo.com/event/bbs_sign_reward/sign',
}
