# saving-goals
Es un api rest (fake) de prueba el cual responde con archivos json a las peticiones solicitadas, y también lo subiremos a Heroku live.

## Creación de un repositorio local subirlo a bitbucket y despliegue en Heroku 

#### Requisitos 
- Hombrew
- Node
- npm
- Heroku CLI (Nota: despues de instalar Heroku CLI reiniciar la terminal o la Mac)
- Cuenta en Heroku que no sea de BBVA

#### Paso a paso
1. Crear la carpeta del proyecto o descargar el proyecto del repositorio de bitbucket
2. Seguir los siguientes comandos git en la Terminal para inicializar nuestro repositorio local

```terminal
touch .gitignore
```
comandos de git para subir
```terminal
git status
git add -A
git commit -am "message"
```

```terminal
heroku create
git push heroku master

heroku login
git init 
git add .
git status
git commit -m "primer commit"
git remote add origin ssh://git@globaldevtools.bbva.com:7999/hkbkx/datamanagers-saving-goals-gmx.git
git push -u origin master
heroku run bash
heroku ps:scale web
heroku open
```

> Un país, una civilización se puede juzgar por la forma en que trata a sus animales.  — Mahatma Gandhi

…or create a new repository on the command line
echo "# user" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/JuanPelcastre/user.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/JuanPelcastre/user.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

