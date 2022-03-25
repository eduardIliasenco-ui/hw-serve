import router from './router';
import { NotFoundException, BadRequestException, InternalServerErrorException, UnauthorizedException, ForbiddenException } from './CustomHttpExceptions';

const cities = ['chisinau', 'balti', 'orhei'];

router.get('/weather', (req, res) => {
    const randomNumber = Math.round(Math.random() * 5);
    const degree = Math.round(Math.random() * 24);
    const windSpeed = Math.round(Math.random() * 9);
    const feelsLike = degree - 4;
    const response = {
        city: 'Chisinau',
        degree,
        feelsLike,
        windSpeed,
        temperatureUnit: '°C',
        windSpeedUnit: 'm/s',
    };

    res.setHeader('Content-Type', 'application/json');

    switch (randomNumber) {
        case 0:
            res.statusCode = 200;

            res.json(response);
            break;
        case 1:
            res.statusCode = 400;

            res.json(new BadRequestException());
            break;
        case 2:
            res.statusCode = 404;

            res.json(new NotFoundException());
            break;
        case 3:
            res.statusCode = 500;

            res.json(new InternalServerErrorException());
            break;
        case 4:
            res.statusCode = 401;

            res.json(new UnauthorizedException());
            break;
        default:
            res.statusCode = 403;

            res.json(new ForbiddenException());
            break;
    }
});