const apis = require('./apis')
const util = require('util')

const debug = util.debuglog('genshin')

async function main() {
  debug('开始', new Date().toLocaleString())
  if (!process.env.COOKIE) {
    debug('环境变量 COOKIE 未配置，退出...')
    process.exit()
  }
  const response = await apis.getUserGameRoles()
  if (response.data) {
    const [role] = response.data.list
    const rewardInfo = await apis.getRewardInfo(role.region, role.game_uid)
    if (rewardInfo.retcode !== 0) {
      debug(rewardInfo.message)
      return
    }

    if (rewardInfo.data.first_bind) {
      debug('请先前往米游社App手动签到一次')
      return
    }
    if (!rewardInfo.data.is_sign) {
      debug('开始签到')
      const result = await apis.bbsSignReward(role.region, role.game_uid)
      debug(result.message)
    } else {
      debug('已签到')
    }
  }
}
main()
