import express from 'express';
import { SendMail } from './../controls/SendMail';
import { EmailOptionType } from './../config/DataType';
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
router.get('/create', (req, res) => {
    const errInfo: EmailOptionType = {
        userID: '9527',
        userName: 'jerry',
        errorType: 'create error',
        errorBody: 'create VM error....'
    };
    const err = new SendMail(errInfo);
    res.send({
        title: err.setErrorSubject(),
        desc: err.setErrorBody()
    });
})

/**
 * Send email delete api
*/
router.get('/delete', (req, res) => {
    res.send({
        title: 'delete',
        desc: 'send email information'
    });
})

/**
 * Send email update api
*/
router.get('/update', (req, res) => {
    res.send({
        title: 'update',
        desc: 'send email information'
    });
})

/**
 * Send email retrieve api
*/
router.get('/retrieve', (req, res) => {
    res.send({
        title: 'retrieve',
        desc: 'send email information'
    });
})

export default router