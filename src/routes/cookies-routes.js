'use strict';

const express = require('express');
const Cookies = require('../models/cookies');
const cookies = new Cookies();

const cookieRouter = express.Router();

// RESTful routes
cookieRouter.get('/cookies', getCookies);
cookieRouter.get('/cookies/:id', getOneCookie);
cookieRouter.post('/cookies', createCookie);
cookieRouter.put('/cookies/:id', updateCookie);
cookieRouter.delete('/cookies/:id', deleteCookie);

// RESTful route handlers
function getCookies(req, res) {
    const allCookies = cookies.get()
    res.status(200).json(allCookies);
}

function getOneCookie(req, res) {
    const id = req.params.id;
    const oneCookie = cookies.get(id);
    res.status(200).json(oneCookie);
}

function createCookie(req, res) {
    const obj = req.body;
    const newCookie = cookies.create(obj)
    res.status(200).json(newCookie);
}

function updateCookie(req, res) {
    const newIDToBeGiven = req.params.id;
    const cookieObjToBeUpdated = req.body;
    const newUpdatedCookie = cookies.update(newIDToBeGiven, cookieObjToBeUpdated);
    res.status(200).json(newUpdatedCookie);
}

function deleteCookie(req, res) {
    cookies.delete(req.params.id);
    res.status(200).json('deleting cookie');
}

module.exports = cookieRouter;

