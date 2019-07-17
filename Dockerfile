FROM nginx:1.15.7-alpine

COPY /dist/pkmnRaidCalc /usr/share/nginx/html
#COPY dist/assets/gui.conf /etc/nginx/conf.d/gui.conf
EXPOSE 80
