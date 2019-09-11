const bossControl = require('../../control/view/boss/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.post("/view/update-boss-avatar", bossControl.updateBossAvatar);

router.post("/view/addBoss", bossControl.addBoss);

router.post("/view/addstore", bossControl.addStore);

router.post("/view/getstore", bossControl.getStore);

router.post("/view/getgood", bossControl.getGood);

router.post("/view/update-boss-info", bossControl.updateBossInfo);

router.post("/view/update-boss-password", bossControl.updateBossPassword);

router.post("/view/delete-good", bossControl.deleteGood);

router.post("/view/restore-good", bossControl.restoreGood);


module.exports = router;
