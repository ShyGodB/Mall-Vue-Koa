const KoaRouter = require('koa-router');
const router = new KoaRouter();
const editGod = require('../../lib/god');
const editCar = require('../../lib/car');
const md5 = require('md5');

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
    ctx.body = { msg: '添加用户成功' };
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

module.exports = router;
