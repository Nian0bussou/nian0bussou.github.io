r:
	clear
	tsc
	python3 -m http.server


b:
	clear
	tsc
	git status
	git add .
	git commit -am "make b"
	git push
