FROM nginx:stable

MAINTAINER swpu.raion@gmail.com

ADD dist/static /usr/share/nginx/html

