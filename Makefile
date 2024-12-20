r:
	clear && tsc && python3 -m http.server


b:
	clear && tsc && gs && gacm "$(date)" && gpush
