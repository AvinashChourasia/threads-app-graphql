

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




