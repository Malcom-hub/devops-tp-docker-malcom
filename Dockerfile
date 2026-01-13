# Image de base
FROM nginx:alpine

# Métadonnées
LABEL maintainer="Malcom Etoughet"
LABEL description="TP DevOps - Application web containerisée avec Nginx"

# Supprimer la config Nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier la configuration Nginx personnalisée
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copier l'application web
COPY src/ /usr/share/nginx/html/

# Exposer le port HTTP
EXPOSE 80

# Healthcheck (DevSecOps friendly)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost || exit 1

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
