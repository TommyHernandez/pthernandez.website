---
published: true
title: ¿Que es un headless CMS?
date: '2021-12-10'
image: 'images/code.jpg'
description: "El pasado 4 de diciembre se cumplían 25 años del nacimiento de JavaScript pero... ¿era realmente su aniversario? ¿Es verdad que fue creado en 10 días? ¿Por qué se creó? Viendo el nombre... ¿tiene algo que ver con Java?"
topic: cms
tags:
- cms
---

Un término que está muy de moda últimamente, además de «microservicios» es Headless CMS. Seguro que lo has escuchado y te has preguntado ¿Qué demonios es un headless CMS? Headless en inglés es «sin cabeza» pero traducir el término tampoco te ayuda a entender qué es.

Pues hoy voy a intentar aclararlo y explicar de forma breve y concisa a que nos referimos cuando hablamos de headless cms.
Primero: ¿Qué significa CMS? Si aun no lo sabes son las siglas de *Content Management System*. Wikipedia lo define
CMS
 : Un sistema de gestión de contenidos o CMS (del inglés content management system) es un programa informático que permite crear un entorno de trabajo para la creación y administración de contenidos, principalmente en páginas web, por parte de los administradores, editores, participantes y demás usuarios

Por lo tanto un gestor de contenidos nos permite tener un blog, o la web de nuestro negocio, porque todo el contenido está en un sitio y se administra de forma relativamente sencilla. Existen muchos CMS, escritos en múltiples lenguajes, por nombrar alguno tenemos WordPress y Joomla en PHP o Magnolia en Java. Los CMS tradicionales, como WordPress tienen una forma de funcionar concreta y se componen básicamente de 3 elementos clave:

Base de datos, donde se almacena la información.
Un panel de administración, donde se conectan los editores para añadir contenido.
Un frontal, construido en HTML, CSS y JS. Donde se visualizan los datos.
Estos tres elementos suelen estar estrechamente relacionados ( o acoplados ), juntos ofrecen una web, tal y como la conocemos. A esto se le suele denominar monolito.

En wordpress por ejemplo tenemos la posibilidad de tener una base de datos MySQL o PostgreSQL. Pero a la hora de introducir el contenido y de mostrarlo siempre estamos atados a PHP y a que ambas cosas estén en la misma maquina.
