# Shintolin

## Setup

### Docker Installation

Install Docker (stable channel):

[https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

### Docker DNS Fix

There is some weird Docker DNS stuff that made things slow. This magic spell fixes it if placed in your `/etc/hosts` file:

```
# DOCKER MAGIC, see: https://github.com/docker/compose/issues/3419#issuecomment-221793401
127.0.0.1       localunixsocket.local
127.0.0.1       localunixsocket.localdomain
127.0.0.1       localunixsocket
```

### Getting Started

From your host machine:

```bash
$ bin/reset-database # create a Docker volume for database storage; ignore the error
$ bin/shell # start the containers and drop you into a bash shell
```

From within the shell opened above:

```bash
$ yarn run db-migrate up # execute database migrations
$ bin/start # use PM2 to start up the various apps
```

Now try accessing the below in your host's web browser:

* UI/Client: [http://localhost:3000](http://localhost:3000)
* API/Server: [http://localhost:3001/health](http://localhost:3001/health)
* Storybook: [http://localhost:3002](http://localhost:3002)

Also take a look at the various PM2 commands (in particular, `pm2 logs <app_name>`):

[http://pm2.keymetrics.io/docs/usage/quick-start/#cheat-sheet](http://pm2.keymetrics.io/docs/usage/quick-start/#cheat-sheet)


## License

[MIT License](/LICENSE)


## Author

[Troy Goode](https://github.com/TroyGoode) ([troygoode@gmail.com](mailto:troygoode@gmail.com))
