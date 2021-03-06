const fs = require('fs');
const editGod = require('../../../lib/god');
const editCar = require('../../../lib/car');
const editAddress = require('../../../lib/address');


module.exports = {
    async updateGodAvatar(ctx, next) {
        const data = ctx.request.body;
        const base64 = data.base64;
        const id = data.id;
        const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
        const dataBuffer = Buffer.from(base64Data, 'base64');
    	const newUserPicturePath = `../mall-view/src/assets/godAvatar/${id}.png`;
    	fs.writeFile (newUserPicturePath, dataBuffer, async (err) => {
    		if (err) {
                ctx.body = {msg: err};
    		} else {
                const data1 = [newUserPicturePath, id];
                await editGod.updateGodAvatar(data1);
    		}
    	});
        ctx.body = {msg: newUserPicturePath};
    },
    async addGod(ctx, next) {
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
    },
    async addGoodToCar(ctx, next) {
        const data = ctx.request.body;
        const data1 = [
            data.god_id, data.good_id, data.store_id, data.store_name,
            data.name, data.num, data.old_price, data.new_price,
            data.subtotal, data.description, data.img];

        await editCar.addById(data1);
        ctx.body = { msg: '添加成功' };
    },
    async updateGoodInfoInCar(ctx, next) {
        const data = ctx.request.body;
        const data1 = [data.num, data.subtotal, data.id];
        await editCar.updateByIdByGod_id(data1);
        ctx.body = { msg: '更新成功' };
    },
    async deleteGoodFromCar(ctx, next) {
        const data = ctx.request.body;
        const id = data.id;
        await editCar.deleteById(id);
        ctx.body = { msg: '删除成功' };
    },
    async updateGodInfo(ctx, next) {
        const data = ctx.request.body;
        const token = data.token;
        const value = data.value;
        const id = data.id;
        const data1 = [value, id];

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
    },
    async updateGodPassword(ctx, next) {
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
    },
    async addAddress(ctx, next) {
        const data = ctx.request.body;
        const god_id = data.god_id;
        const name = data.name;
        const area = data.area;
        const address = data.address;
        const mobile = data.mobile;
        const data1 = [god_id, name, area, address, mobile];
        await editAddress.addAddress(data1);
        ctx.body = await editAddress.listAddressByGodId(god_id);
    },
    async uploadImageTest(ctx, next) {
        ctx.body = {msg: '成功'};
    }
};
