r:
	clear && tsc && python3 -m http.server


b:
	clear && tsc && git status && git commit -am "$(date)" && git push
