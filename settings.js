const ACT_ID = 'e202009291139501'
const APP_VERSION = '2.3.0'

module.exports = {
  ACT_ID,
  APP_VERSION,
  USER_AGENT: `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/${APP_VERSION}`,
  REFERER_URL: `https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=${ACT_ID}&utm_source=bbs&utm_medium=mys&utm_campaign=icon`,
  AWARD_URL: `https://api-takumi.mihoyo.com/event/bbs_sign_reward/home?act_id=${ACT_ID}`,
  ROLE_URL: 'https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn',
  INFO_URL: `https://api-takumi.mihoyo.com/event/bbs_sign_reward/info?act_id=${ACT_ID}&region={}&uid={}`,
  SIGN_URL: 'https://api-takumi.mihoyo.com/event/bbs_sign_reward/sign',
  cookie_test:
    'account_id=272585991; cookie_token=GZnhfchRKJ5pMJ72nY0G9y4KBWNJj71Co3gnXxpd; ltoken=vVjb7z9bJ8YnHDtwrKR8akG3RIxHE20eDBcGyLfd; ltuid=272585991; _MHYUUID=7eef4beb-826f-44b5-8fee-b55430118f21; _ga=GA1.1.744402232.1624506254; _ga_KJ6J9V9VZQ=GS1.1.1635153924.161.1.1635155502.0; login_ticket=P6MKW7grw1r3DY2jrCeQDrHcQBmZjREjPKpDphyT; aliyungf_tc=25defd8d0aa39a8ec718e850ed16ab1f85c181bc87b2580a7286ea11d8c6f600; mi18nLang=zh-cn; UM_distinctid=17ca93e48cd23f-0418c85418b7a9-371e7537-60c28-17ca93e48ce9b2',
}
