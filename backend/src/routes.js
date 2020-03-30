const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotControlller = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardContoller');
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store)

routes.get('/spots',SpotControlller.index)
routes.post('/spots',upload.single('thumbnail'),SpotControlller.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings',BookingController.store)

module.exports = routes;