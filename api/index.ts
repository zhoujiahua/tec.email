import express from 'express';
import { SendMail } from './../controls/SendMail';
import { EmailOptionType } from './../config/DataType';
import { getTokenInfo, getAdminUser } from './../config/Keys';
import { post } from './../controls/RequestHttp';
const router = express.Router();

/**
 * Send email test api
*/
router.get('/test', (req, res) => {
    res.send({
        title: 'test',
        desc: 'send email information'
    });
})

/**
 * Send email create api
*/
router.get('/create', async (req, res) => {
    const errInfo: EmailOptionType = {
        userID: getAdminUser.id_user,
        userName: getAdminUser.userName,
        errorType: 'create error' + Date.now(),
        errorBody: 'create VM error....' + Date.now()
    };
    const err = new SendMail(errInfo);
    res.json(await err.sendMailContent());
})

/**
 * Send email delete api
*/
router.get('/delete', async (req, res) => {
    const errInfo: EmailOptionType = {
        userID: getAdminUser.id_user,
        userName: getAdminUser.userName,
        errorType: 'delete error' + Date.now(),
        errorBody: 'delete VM error....' + Date.now()
    };
    const err = new SendMail(errInfo);
    res.json(await err.sendMailContent());
})

/**
 * Send email update api
*/
router.get('/update', async (req, res) => {
    const errInfo: EmailOptionType = {
        userID: getAdminUser.id_user,
        userName: getAdminUser.userName,
        errorType: 'update error' + Date.now(),
        errorBody: 'update VM error....' + Date.now()
    };
    const err = new SendMail(errInfo);
    res.json(await err.sendMailContent());
})

/**
 * Send email retrieve api
*/
router.get('/retrieve', async (req, res) => {
    const errInfo: EmailOptionType = {
        userID: getAdminUser.id_user,
        userName: getAdminUser.userName,
        errorType: 'retrieve error' + Date.now(),
        errorBody: 'retrieve VM error....' + Date.now()
    };
    const err = new SendMail(errInfo);
    res.json(await err.sendMailContent());
})

/**
 * Request token
*/
router.get('/token', async (req, res) => {
    try {
        let data = await post('/oauth2/token', getTokenInfo);
        if (data.error) {
            const errInfo: EmailOptionType = {
                userID: getAdminUser.id_user,
                userName: getAdminUser.userName,
                errorType: `Token request error<${Date.now()}>`,
                errorBody: `Token error information:${data.error}-<${Date.now()}>`
            };
            const err = new SendMail(errInfo);
            res.json(await err.sendMailContent());
        } else {
            res.json(data);
        }
    } catch (error) {
        const errInfo: EmailOptionType = {
            userID: getAdminUser.id_user,
            userName: getAdminUser.userName,
            errorType: `System error<${Date.now()}>`,
            errorBody: `System error information:${error}-<${Date.now()}>`
        };
        const err = new SendMail(errInfo);
        res.json(await err.sendMailContent());
    }
})

export default router