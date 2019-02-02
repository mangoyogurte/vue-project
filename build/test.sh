cp -r dist mzb
tar -czf mzb.tar mzb
rm -rf mzb
scp mzb.tar root@47.74.190.154:/usr/share/nginx/html/mzb.tar
rm -rf mzb.tar
ssh root@47.74.190.154 'cd /usr/share/nginx/html/ && rm -rf mzb && tar -xzf mzb.tar && rm -rf mzb.tar'