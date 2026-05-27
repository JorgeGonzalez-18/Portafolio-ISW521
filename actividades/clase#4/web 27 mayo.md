web 27 mayo



react no es un framework, es una biblioteca



next.js es el framework



**-> inversion de control!!!!**



**METADATO:** abstraccion de la abstraccion de los datos



ACTIVIDAD #1



TODOD LOS COMMITS VIOLAN EL CONVETIONAL COMMITS, SIGUIENTE SE MUESTRAN LOS COMMITS REESCRITOS SEGUN CONVETIONAL COMMITS:



1-> a3f1c09 = fix(auth): correct login validation

2-> b7e2d41 = feat(ui): implement design changes for client

3-> 9c4a$$7 = feat(client): add new functional for client

4-> f01b334 = chore(deps) update express dependency

5-> e5d2198 = chore(config): add environmental variables template



\-(chore: tareas de mantenimiento, no agrega funciones ni corrigen bugs)-



COMMITS QUE REPRESENTAS PROBLEMAS DE SEGURIDAD

1. f01b334 no debe versionarse
2. e5d2198 contiene informacion sensible

ANTES DEL PRIMER COMMIT SE DEBE CONFIGURAR UN .gitignore





sin git add: Untracked

con git add pero sin commit: Staged



Flujo: **Untracked -> Staged -> Commited(Tracked)**





|Tipo    |Cuándo usarlo                                 |

|--------|----------------------------------------------|

|feat    |Nueva funcionalidad                           |

|--------|----------------------------------------------|

|fix     |Corrección de bug                             |

|--------|----------------------------------------------|

|chore   |Mantenimiento, no afecta al usuario           |

|--------|----------------------------------------------|

|docs    |Solo documentación                            |

|--------|----------------------------------------------|

|refactor|Restructurar código sin cambiar comportamiento|

|--------|----------------------------------------------|

|test    |Agregar o corregir tests                      |

|--------|----------------------------------------------|

|build   |Sistema de build o dependencias externas      |

|--------|----------------------------------------------|

|ci      |Configuración de CI/CD                        |

|--------|----------------------------------------------|





ACTIVIDAD #2



**1->> comando para descargar cambios de tu companero sin modificar mi rama local:** 

git fetch origin 

se usa en lugar de git pull debido a que git fetch solo descarga los cambios del remoto pero no los integra a la rama y esto permite inspeccionar antes de tomar decisiones



**2->> secuencia de comando para hacer historial limpio y lineal:** 

* git fetch origin
* git rebase origin/main

rebase= reescribe commits encima de los nuevos, hitorial lineal



\# Con merge:       # Con rebase:

**A - B** - C - **M**      **A - B - C - D - E**

&#x20;    \\     /

&#x20;     D - E





**3->> rejected--non-fast-forward:**

mensaje que indica que el remoto tiene commits que no estan localmente 

flujo correcto = git fetch origin

 git rebase origin/main

 git push origin main







