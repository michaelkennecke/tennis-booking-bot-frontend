# Tennis Booking Bot Frontend :tennis:

The web-frontend of the tennis-booking-bot, a selenium bot to find and book tennis courts.

## How to run :rocket:

### Prerequisite

A built image of the [tennis-booking-bot](https://github.com/michaelkennecke/tennis-booking-bot)

### Steps to run

1. Type in your eversports username and password in the docker-compose.yml
2. Start the tennis-booking-bot-frontend together with the backend and selenium

```
docker-compose --profile=prod up -d
```

### How to run for development :hammer_and_pick:

### Prerequisite

A built image of the [tennis-booking-bot](https://github.com/michaelkennecke/tennis-booking-bot).

### Steps to run

1. Type in your eversports username and password in the docker-compose.yml
2. Start the tennis-booking-bot-backend and selenium

```
docker-compose --profile=dev up -d
```

3. Run the frontend

```
ng serve
```

4. Go to http://localhost:4200/
