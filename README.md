# ReactPro - MegaPaste

Es una aplicación para crear pastes (una mezcla de PasteBin y Multipaste) especialmente útil para compartir enlaces en sitios web de naturaleza warez (descargas)

Un paste puede contener N cantidad de subpastes (y se organizan en pestañas)

El proyecto consumirá una API creado por mi (.NET CORE)

# Entidades

## Paste

- Título
- Contraseña
- Fecha
- Url
- Visitas
- Fecha de creación
- Fecha de actualización
- Creado por

## Sub Paste

- Id Paste
- Contenido
- Fecha de creación
- Fecha de actualización
- Creado por

## Reportes/Problemas

- Id Paste
- Nombre
- Contenido
- Correo electrónico
- Fecha
- Resuelto?
- Fecha de resolución
- Fecha de creación

## Usuarios

- Id Paste
- Nombres
- Apellidos
- Correo electrónico
- Contraseña
- Id Rol

## Roles

- Titulo
- Descripcion
- Activo?
- Fecha de creación
- Fecha de actualización

## Roles y permisos

- Id Rol
- Id Permiso
- Descripcion
- Fecha de creación
- Fecha de actualización

## Permisos

- Titulo
- Descripcion
- Activo?
- Fecha de creación
- Fecha de actualización

# Relaciones

- Un usuario tiene un rol
- Un rol puede tener muchos permisos
- Un usuario puede tener muchos pastes
- Un paste puede tener muchos subpastes
- Un paste puede tener muchos reportes

# Funciones

- CRUD usuarios
- CRUD pastes
  - CRUD subpastes
- CRUD reportes
- CRUD roles
  - CRUD permisos

# Pantallas

- Registro
- Inicio de Sesión
- Dashboard
- Ver paste
- CRUD Pastes
- CRUD Reportes
- Panel de Administración
  - CRUD Usuarios
  - CRUD Roles

# Capturas

![Splash](https://i.imgur.com/8Ey0PqB.png)
![Login](https://i.imgur.com/OiIIARl.png)
![Register](https://i.imgur.com/sOPCiQq.png)
![DashboardWIP](https://i.imgur.com/yuVFphl.png)
![Pastes](https://i.imgur.com/R0oNkQI.png)
