const express = require('express');
const { protectRoute, isAuthorised } = require('../helper');
const { getAllPlans, getPlan, createPlan, updatePlan, deletePlan, top3Plans } = require('../controller/planController');

const planRouter = express.Router();

planRouter
.route('/all')
.get(getAllPlans)

planRouter
.route('/top3')
.get(top3Plans)

planRouter.use(protectRoute) //logged in hai ya nhi 
planRouter
.route('/single/:id')
.get(getPlan)

planRouter.use(isAuthorised(['admin', 'restaurantowner'])) // logged in , lekin role 
planRouter
.route('/crud')
.post(createPlan)

planRouter
.route('/crud/:id')
.patch(updatePlan)
.delete(deletePlan)

module.exports = planRouter;