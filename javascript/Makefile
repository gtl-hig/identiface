front:
	python frontend/manage.py runserver 0.0.0.0:9000


static:
	python frontend/manage.py collectstatic

clean:
	-find . -name '*.pyc' -print0| xargs -0 rm
	-find . -name '*.swp' -print0| xargs -0 rm
	-find . -name '*un~' -print0| xargs -0 rm
	-find . -name '__pycache__' -print0| xargs -0 rm -rf

git-clean:
	-find . -name '*.orig' -print0| xargs -0 rm
