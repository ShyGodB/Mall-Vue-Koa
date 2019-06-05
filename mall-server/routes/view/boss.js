const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editBoss = require('../../lib/boss');
const editStore = require('../../lib/store');
const editGood = require('../../lib/good');
const multer = require('koa-multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '../mall-view/src/assets/bossAvatar')
    },
    filename(req, file, cb) {
        const name = file.originalname;
        const extension = name.substring(name.length - 4);
        cb(null, 'boss-' + Date.now() + extension);
    }
})

const upload = multer({ storage: storage })

router.post("/view/update-boss-avatar/:id", upload.single('avatar'), async (ctx) => {
    const id = ctx.params.id;
    const path = ctx.req.file.path;
    const data = [path, id];
    await editBoss.updateBossAvatar(data);
    ctx.body = {
        avatar_url: path
    };
});


router.post("/view/addBoss", async (ctx) => {
    const data = ctx.request.body;
    const mobile = data.value.mobile;
    const boosId = 'boss-' + mobile;
    const nickname = 'boss-' + mobile;
    const username = data.value.username;
    const email = data.value.email;
    const password = data.value.password;
    const date = new Date();
    const registerTime = date.toLocaleString();
    const realname = data.value.realname;
    const idcard = data.value.idcard;
    const businesslicense = data.value.businesslicense;
    const data1 = [boosId, username, nickname, password, email, mobile, registerTime, realname, idcard, businesslicense];
    await editBoss.addBoss(data1);
    ctx.body = { msg: '添加店主成功' };
});

router.post("/view/addstore", async (ctx) => {
    const data = ctx.request.body;
    const boss_id = data.boss_id;
    const boss_name = data.boss_name;
    const rows = await editStore.getStore(boss_id);
    if(rows.length !== 0) {
        ctx.body = { msg: '创建失败，当前只允许店主拥有一个店铺，有疑问请咨询工作人员！' };
    } else {
        const data1 = [boss_id, boss_name, data.name, data.type, data.nature];
        await editStore.addStore(data1);
        ctx.body = { msg: '恭喜你，创建成功！' };
    }
});

router.post("/view/getstore", async (ctx) => {
    const boss_id = ctx.request.body.boss_id;
    const rows = await editStore.getStore(boss_id);
    if (rows.length === 0) {
        ctx.body = { msg: '尚未创建店铺！' };
    } else {
        ctx.body = rows[0];
    }
});

router.post("/view/getgood", async (ctx) => {
    const data = ctx.request.body.store_id;
    const rows = await editGood.getGoodByStoreId(data);
    ctx.body = rows;
});

router.post("/view/update-boss-info", async (ctx) => {
    const data = ctx.request.body;
    const token = data.token;
    const value = data.value;
    const id = data.id;
    const data1 = [value, id];
    console.log(data1);
    
    switch(token) {
        case 'nickname':
            await editBoss.updateBossNickname(data1);
            break;
        case 'gender':
            await editBoss.updateBossGender(data1);
            break;
        case 'birthday':
            await editBoss.updateBossBirthday(data1);
            break;
        case 'email':
            await editBoss.updateBossEmail(data1);
            break;
        case 'mobile':
            await editBoss.updateBossMobile(data1);
            break;
        case 'qq':
            await editBoss.updateBossQQ(data1);
            break;
        case 'wechat':
            await editBoss.updateBossWechat(data1);
            break;
        case 'weibo':
            await editBoss.updateBossWeibo(data1);
            break;
        case 'bio':
            await editBoss.updateBossBio(data1);
            break;

    }
    
    ctx.body = {msg: '修改成功'};
});

router.post("/view/update-boss-password", async (ctx) => {
    const data = ctx.request.body;
    const token = data.token;
    const id = data.id;
    const password = data.password
    const data1 = [password, id]
    switch (token) {
        case '验证':
            const rows = await editBoss.checkPassword(data1);
            ctx.body = rows;
            break;
        case '修改':
            await editBoss.updatePassword(data1);
            ctx.body = { msg: '修改密码成功' };
            break;
        default:
            ctx.body = { msg: '请求失败' };
            break;
    }
});


router.post("/view/delete-good", async (ctx) => {
    const id = ctx.request.body.id;
    await editGood.deleteGood(id);
    ctx.body = { msg: '删除成功' };
});

router.post("/view/restore-good", async (ctx) => {
    const id = ctx.request.body.id;
    await editGood.restoreGood(id);
    ctx.body = { msg: '恢复成功' };
});

module.exports = router;
