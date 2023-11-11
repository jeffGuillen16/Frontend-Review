#!/bin/bash

# Verifica si se proporcionó un comentario para el commit
if [ -z "$1" ]; then
    echo "Por favor, proporciona un comentario para el commit."
    exit 1
fi

# Cambia a la ruta de tu repositorio
cd # Cambia a la ruta de tu repositorio
cd "C:\Users\marco\OneDrive\Escritorio\code\Frontend-Review"

# Añade todos los cambios
git add .

# Realiza el commit con el comentario proporcionado
git commit -m "$1"

# Realiza el push al repositorio remoto
git push 
