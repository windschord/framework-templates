based on https://fastapi.tiangolo.com/advanced/async-sql-databases/

## start app
```bash
python standalone.py
```

see the docs at http://127.0.0.1:8000/docs

## migrate db
```bash

# create migrate revision file
alembic revision --autogenerate

# apply to database
alembic upgrade head
```
