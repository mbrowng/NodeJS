1.- Crear carpeta con nombre P1 e ingresar.
	mkdir P1
	cd P1
2.- Copiar archivos en carpeta P1.
3.- Si se desea modificar la ecuación a evaluar, modificar archivo file.in
	nano file.in
4.- Luego, ejecutar las siguientes lineas de comando.
	- Ejecutar Node para evaluar Modulo
		node
	- Abrir modulo
		evaluate = require('./index.js')
	- Ejecutar Modulo donde la ruta de ejemplo debe ser la real
		evaluate.evaluate('D://Proyectos//KUNDER//P1_Module//file.in');
	- Observar resultado esperado.
	