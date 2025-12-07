# Proba-IT-2025

Completed tasks:
Homepage, Header / navbar and Footer
Homepage is complete w all functionalities required. Header is stateful and fully functional as well. Footer is just for aesthetics because I am lazy. (useNavigate to the social media links of the League and it's set. I'm lazy.)

This was pretty standard, on the header I used conditioned rendering and that's about it, really

Register- frontend backend

check for validity of email address, if the passwords match and if there isn't already a user by that email. If all of these are true, it creates a new entry in the users collection of MongoDB.

Login - frontend backend, implemented JWT token with expiry date of 15 minutes (Could not understand how blacklisting works for dummies so the logout function is unavailable)
no bonuses made

made requests to check if the user exists, based on the email (which is unique for every user), checks if the password is correct and then create a JWT that contains said email, in order to authorize the user to do specific tasks. 

Authentification and authorization done using JWT token
no bonus

Profile - frontend backend complete functionality according to specifications
no bonuses - buttons exist but do not have any functional component

In the grill Schema I also remember the owner of the post / grill. As such, I filter through the DB and only show the ones owned by the person whose email is stored in the JWT.

Adding new grills - completed
=> function that initializes a new entry in the grills collection with 0 likes. The picture is added in the public folder and is given a unique name for identification, that is then stored in the DB entry.
Leaderboard - completed
=> A second, separate request to the DB that sorts the entries of grills in descending order and then limits the response array to only three. 
Liking grills - completed
=> Every user is associated a counter of how many likes said user has given and an array in which the IDs of every grill is stored. If the ID of a grill is already in the array of "Liked Grills", then the like button appears brown, already pressed and in this state pressing it again would delete the like from the post. The user is limited to 10 likes only.
Searching grills - completed
=> filters through the State that contains the grills (it only does so for the first n, which is the value of a counter that the user can choose to increase, grills because, again, I am lazy. A better approach would be to make a different request that filters through all grills in the DB using the search item provided). if the search bar is empty, the page is reloaded if the user presses the magnifying glass.


Ce am invatat?
Sa folosesc Mongo, ceea ce pt mine e un win destul de mare. Refuz sa folosesc ceva daca nu am o intelegere intima a acelui ceva, asa ca primele 4 zile (din ultimele doua saptamani) au fost petrecute intrebandu-ma daca sunt sanatos la cap in fata Mongo (stiu ca nu e greu deloc si ca nu e mare chestie de capul ei dar chiar nu ma prindeam, era ceva rau). Dupa ce m-am prostit cu requesturi si tot ce trebuie (fisierul de server.js deja aratand ca o groapa de gunoi) am trecut la partea cu care sunt mai familiar, frontend, la care chiar nu am avut probleme (in afara de font. Am uitat unde l-am pus si unde nu...). A fost dragut, a fost vibe, design-ul e f misto si a fost o placere sa nu trebuiasca sa ma gandesc eu cum sa arate pt ca cineva deja a facut ganditul pentru mine (The design team gets a thumbs up from me).

Si, sincer, a fost distractiv. Problema este ca sunt foarte perfectionist si am pierdut mult timp pe niste detalii mizere, nervi ca nu e destul de bun si alte asemenea, care au dus la stergerea a ore de codare pentru ca ma pierdusem in oboseala, cod si complicatii. 
Stiu perfect faptul ca codul meu arata MIZERABIL. Eu pot sa ma orientez in el destul de lejer (na, eu l-am facut) si am incercat sa aplic principiile de formatare pe care le am de la PCLP, insa acolo stiu clar ca mai am de lucru. Partitionarea pe fisiere diferite este de asemenea deplorabila, am pe alocuri functii redundante care puteau lejer sa fie puse intr-ul fisier separat si importate unde este nevoie de ele, insa m-am bazat pe filosofia "fa-l sa existe, dupa care il faci bun / eficient". 

Si that's about it, really. A fost foarte fun, un challenge cu siguranta in special din cauza workload-ului (si ca l-am facut eu mai greu decat trebuia). A fost fun sa invat cam cum ar fi procesul efectiv de lucru, cu figma, fullstack development si toate cele. I'm off to sleep.
