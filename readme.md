# Geocoding (micro)Service

This repo contains a microservice that will accept a JSON Object with an address attribute, and returns an object with the following format:

```json
{
  "lat": -35.0,
  "lng": 30.123456,
  "address": "123 Fake Street, Anytown ST, 12345, USA"
}
```

### Deployment

This project is built using [micro](https://github.com/zeit/micro) and is deployable using [now](https://github.com/zeit/now-cli)
