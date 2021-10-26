const express = require ('express');

const multer = require ('multer');
const uploadConfig = require ('./config/upload');

const SessionController = require ('./controllers/SessionController');
const SpotController = require ('./controllers/SpotController.js');
const DashboardController = require ('./controllers/DashboardController.js');
const BookingController = require ('./controllers/BookingController.js');
const ApprovalController = require ('./controllers/ApprovalController.js');
const RejectionController = require ('./controllers/RejectionController.js');

const routes = express.Router();
const upload = multer(uploadConfig);

// Routes Session
routes.post('/sessions', SessionController.store);

// Routes spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

// Routes dashboards
routes.get('/dashboards', DashboardController.show);

// Routes booking
routes.post('/spots/:spot_id/bookings', BookingController.store);

// Routes actions
routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;