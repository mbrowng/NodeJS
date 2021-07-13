1.- Crear carpeta con nombre <name_folder> e ingresar.

	mkdir <name_folder>

	cd <name_folder>
	
2.- Copiar archivos en carpeta <name_folder>.

3.- Si se desea modificar la ecuación a evaluar, modificar archivo file.in
	
	nano file.in

4.- Luego, ejecutar las siguientes lineas de comando.
	
	- Ejecutar Node para evaluar Modulo
	
		node
	
	- Abrir modulo
		
		evaluate = require('./index.js')
	
	- Ejecutar Modulo donde la ruta de ejemplo debe ser la real
	
		evaluate.evaluate('D://<name_folder>//file.in');
	
	- Observar resultado esperado.
	
