var routes = require('./app_server_routes/index');
var routesApi = require('./app_api/routes/index');
app.use('/', routes);
app.use('/', routes);
app.use('/api', routesApi);

router.get('/location', ctrlLocations.locationInfo);

router.post('/locations', ctrlLocations.locationsCreate);


