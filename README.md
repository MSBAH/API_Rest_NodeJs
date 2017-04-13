# Création d'un API avec nodejs et une base de données MySql 

##### Création d'un simple API Restavec NodeJs et une utilisation de la base de données MySql.

### Pré-requis
* Installer nodejs <http://nodejs.org/>
* avoir une mySql sur sa machine
### Installation du projet
Cloner ce projet puis votre terminal lancer


       npm install
                
 pour installer les dépendances du projet.
 
#### Les dépendances majeurs utilisées dans ce projet sont
* **knexjs:** pour les réquettes SQL et la migration <http://knexjs.org/> .
* **expressjs:** pour créer l'infrastructure web <http://expressjs.com/fr/>.
* **handlebarsjs:** pour le moteur de template <http://handlebarsjs.com/>

####les commandes à exécuter:
* pour créer une migration

       knex migrate:make <nom_de_la_migration>
       
 * pour exécuter une migration
 
        knex migrate:latest
 
 * pour créer une seed
 
        knex seed:make <nom_de_la_seed>
        
 * pour exécuter une seed
 
        knex seed:run
 
 Pour lancer le serveur j'ai installé **nodemon**
    
        npm install -g nodemon
        
 Ouvrer votre navigateur et taper: <http://localhost:3000>
 
 
 