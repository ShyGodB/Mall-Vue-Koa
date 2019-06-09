const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../../lib/god');
const editCar = require('../../lib/car');
const multer = require('koa-multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '../mall-view/src/assets/godAvatar')
    },
    filename(req, file, cb) {
        const name = file.originalname;
        const extension = name.substring(name.length - 4);
        cb(null, 'god-' + Date.now() + extension);
    }
})

const upload = multer({ storage: storage })

router.post("/view/update-god-avatar/:id", upload.single('avatar'), async (ctx) => {
    const id = ctx.params.id;
    const path = ctx.req.file.path;
    const data = [path, id];
    await editGod.updateGodAvatar(data);
    ctx.body = {
        avatar_url: path
    };
});


router.post("/view/addGod", async (ctx) => {
    const data = ctx.request.body;
    const usertype = data.usertype;
    const mobile = data.value.mobile;
    const godId = 'god-' + mobile;
    const username = data.value.username;
    const nickname = 'god-' + mobile;
    const email = data.value.email;
    const password = data.value.password;
    const date = new Date();
    const registerTime = date.toLocaleString();
    const data1 = [godId, username, nickname, password, mobile, registerTime, email];
    await editGod.addGod(data1);
    const rows = await editGod.getGodByGodid(godId);
    ctx.body = { 
        token: 'god',
        body:  rows
    };
});

router.post("/view/add-good-to-car", async (ctx) => {
    const data = ctx.request.body;
    const data1 = [
        data.god_id, data.good_id, data.store_id, data.store_name, 
        data.name, data.num, data.old_price, data.new_price,
        data.subtotal, data.description, data.img];

    await editCar.addById(data1);
    ctx.body = { msg: '添加成功' };
});

router.post("/view/update-good-info-in-car", async (ctx) => {
    const data = ctx.request.body;
    const data1 = [data.num, data.subtotal, data.id];
    await editCar.updateByIdByGod_id(data1);
    ctx.body = { msg: '更新成功' };
});

router.post("/view/delete-good-from-car", async (ctx) => {
    const data = ctx.request.body;
    const id = data.id;
    await editCar.deleteById(id);
    ctx.body = { msg: '删除成功' };
});

router.post("/view/update-god-info", async (ctx) => {
    const data = ctx.request.body;
    const token = data.token;
    const value = data.value;
    const id = data.id;
    const data1 = [value, id];
    console.log(data1);

    switch (token) {
        case 'nickname':
            await editGod.updateGodNickname(data1);
            break;
        case 'gender':
            await editGod.updateGodGender(data1);
            break;
        case 'birthday':
            await editGod.updateGodBirthday(data1);
            break;
        case 'email':
            await editGod.updateGodEmail(data1);
            break;
        case 'mobile':
            await editGod.updateGodMobile(data1);
            break;
        case 'qq':
            await editGod.updateGodQQ(data1);
            break;
        case 'wechat':
            await editGod.updateGodWechat(data1);
            break;
        case 'weibo':
            await editGod.updateGodWeibo(data1);
            break;
        case 'bio':
            await editGod.updateGodBio(data1);
            break;
        case 'idcard':
            await editGod.updateGodIdcard(data1);
            break;
        case 'married':
            await editGod.updateGodMarried(data1);
            break;
        case 'income':
            await editGod.updateGodIncome(data1);
            break;
        case 'education':
            await editGod.updateGodEducation(data1);
            break;
        case 'industry':
            await editGod.updateGodIndustry(data1);
            break;

    }

    ctx.body = { msg: '修改成功' };
});

router.post("/view/update-god-password", async (ctx) => {
    const data = ctx.request.body;
    const token = data.token;
    const id = data.id;
    const password = data.password
    const data1 = [password, id]
    switch (token) {
        case '验证':
            const rows = await editGod.checkPassword(data1);
            ctx.body = rows;
            break;
        case '修改':
            await editGod.updatePassword(data1);
            ctx.body = { msg: '修改密码成功'};
            break;
        default:
            break;
    }
});


module.exports = router;
