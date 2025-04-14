

# Postgres access commands in windows powershell :- 

docker exec -i <dockername> bash

root@8bce705eb808:/# su postgres

postgres@8bce705eb808:/$ psql


postgres=# \l

postgres=# \c threads

You are now connected to database "threads" as user "postgres".


threads-# \d
               List of relations
 Schema |        Name        | Type  |  Owner
--------+--------------------+-------+----------
 public | _prisma_migrations | table | postgres
 public | users              | table | postgres
(2 rows)


threads=# \x

Expanded display is off.


threads=# select * from users;

threads=# Delete from users where 1=1;

DELETE 1

threads=# select * from users;
 id | first_name | last_name | profile_image_url | email | password | salt
----+------------+-----------+-------------------+-------+----------+------
(0 rows)



## Git Commands :-


npx gitignore Node

git init   -> Initialize Git repo

git add .  -> Stage all changes

git commit -m "commit name"   -> Commit changes

git remote add origin <url>   -> Add remote origin

git push -u origin main  -> Push to GitHub

git branch -> Check current branch

git checkout -b main -> Create/switch to main




## Docker commands :- 

first install, docker desktop, configure it
docker -> get info about docker

create docker-compose.yml file =>  add the postgres db into it

docker compose up   -> to start the docker

Docker Compose is a tool that helps you define and run multi-container Docker applications. Instead of running docker run commands for each service, you describe everything in one file — the docker-compose.yml file — and bring it all up with a single command:  docker compose up

It's a YAML (YAML Ain't Markup Language) file that describes how to run your containers. It includes things like:
What images to use
What ports to expose
What environment variables to set
What volumes to mount
What services are included (e.g., database, backend, frontend)


