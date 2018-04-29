# Shintolin

## DOCKER STUFF

```bash
# create database volume
docker volume create --name=shintolin4-postgres-data

# destroy database volume
docker volume rm shintolin4-postgres-data

# bash into web server
docker exec -it shintolin4_shintolin4_1 /bin/bash
```

## TODO (Old Setup)

Now run (first time setup):

```bash
$ yarn run migrate-up
```

Now to start the application locally:

## License

MIT
