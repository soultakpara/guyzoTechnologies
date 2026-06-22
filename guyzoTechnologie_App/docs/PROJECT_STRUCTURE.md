# Arborescence du projet

Ce projet Next.js regroupe le frontend et le backend dans la meme application.

```text
app/
  (public)/suivi/[trackingCode]/      Espace public de suivi d'une reparation
  (auth)/                             Routes d'authentification
  (dashboard)/                        Interface interne de gestion
  api/                                Route Handlers backend Next.js
components/                           Composants UI partages
features/                             Modules metier par domaine
server/                               Code backend prive: services, DB, jobs
lib/                                  Helpers partages et configuration
hooks/                                Hooks React partages
types/                                Types TypeScript globaux
emails/                               Modeles de messages et notifications
public/                               Images, icones et assets statiques
docs/                                 Documentation technique du projet
```

Les dossiers de routes dans `app/` ne deviennent publics que lorsqu'un fichier `page.tsx` ou `route.ts` est ajoute.
