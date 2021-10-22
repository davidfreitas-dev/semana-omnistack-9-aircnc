const express = require ('express');

const multer = require ('multer');
const uploadConfig = require ('./config/upload');

const SessionController = require ('./controllers/SessionController');
const SpotController = require ('./controllers/SpotController.js');
const DashboardController = require ('./controllers/DashboardController.js');
const BookingController = require ('./controllers/BookingController.js');

const routes = express.Router();
const upload = multer(uploadConfig);

// Routes Session
routes.post('/sessions', SessionController.store);

// Routes spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

// Routes dashboards
routes.get('/dashboards', DashboardController.show);

// Routes dashboards
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;