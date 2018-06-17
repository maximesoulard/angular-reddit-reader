FROM nginx

# Generate SSL certificate
WORKDIR /var/www
RUN apt-get update && apt-get install openssl
RUN openssl req -new -newkey rsa:2048 -nodes -x509 -keyout server.key -out server.crt -subj "/C=FR/ST=Gironde/L=Bordeaux/O=Home/CN=Home.com"

# nginx configuration
COPY nginx/reddit.reader /etc/nginx/sites-available/reddit.reader
COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/reddit.reader /etc/nginx/sites-enabled/reddit.reader
RUN rm /etc/nginx/conf.d/default.conf

# Copy application
COPY dist /var/www

CMD ["nginx", "-g", "daemon off;"]