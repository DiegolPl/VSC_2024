import pandas as pd

def copiar_registros(archivo_origen, archivo_destino):
    # Cargar los datos del primer archivo Excel
    datos_origen = pd.read_excel(archivo_origen)
    
    # Cargar las columnas del segundo archivo Excel
    columnas_destino = pd.read_excel(archivo_destino, nrows=0).columns.tolist()
    print(columnas_destino)
    
    # Filtrar solo las columnas presentes en el segundo archivo Excel
    datos_filtrados = datos_origen[columnas_destino]
    print()
    print(datos_filtrados)
    
    # Guardar los datos filtrados en el segundo archivo Excel
    #datos_filtrados.to_excel("archivo_destino.xlsx", index=False)

# Rutas de los archivos Excel
archivo_origen = "Registro.xlsx"
archivo_destino = "Seguro.xlsx"

# Llamar a la función para copiar los registros
copiar_registros(archivo_origen, archivo_destino)