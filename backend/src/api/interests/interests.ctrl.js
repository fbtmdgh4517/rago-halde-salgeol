// const interests = [
//     {
//         coinName: 'adfsadsf',
//     },
// ];
import Interests from '../../models/interests.js';
export const add = async (ctx) => {
    const { coinName } = ctx.request.body;
    const interest = new Interests({
        coinName,
    });
    try {
        await interest.save();
        ctx.body = interest;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = (ctx) => {
    // ctx.body = interests;
};

export const remove = (ctx) => {
    // const { coinName } = ctx.params;
    // const index = interests.findIndex((i) => i.coinName === coinName);
    // if (index === -1) {
    //     ctx.status = 404;
    //     ctx = {
    //         message: '코인이 존재하지 않음',
    //     };
    //     return;
    // }
    // interests.splice(index, 1);
    // ctx.status = 204;
};
