
page:
	npm run build
	cd build && git init && git add . && \
	git commit -m "init page" && \
	git remote add origin git@github.com:aug0cz/cloud-music.git && \
	git push --force origin master:gh-pages
