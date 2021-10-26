const apis = require('./apis')
const util = require('util')

const debug = util.debuglog('genshin')

async function main() {
  debug('开始', Date.now())
  const response = await apis.getUserGameRoles()
  if (response.data) {
    const [role] = response.data.list
    const { data: info } = await apis.getRewardInfo(role.region, role.game_uid)
    debug('是否已签到', info.is_sign)
    if (info.first_bind) {
      debug('请先前往米游社App手动签到一次')
      return
    }
    if (!info.is_sign) {
      debug('开始签到')
      const result = await apis.bbsSignReward(role.region, role.game_uid)
      debug(result.message)
    }
  }
}
main()
