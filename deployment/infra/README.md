kubectl create secret docker-registry my-dockerhub-secret \
--docker-username=your-dockerhub-username \
--docker-password=your-dockerhub-pat \
--docker-email=your-email@example.com \
--docker-server=https://index.docker.io/v1/

kubectl create secret tls my-app-tls --cert=fullchain.pem --key=privkey.pem -n devblog-ns

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx --namespace devblog-ns --set controller.publishService.enabled=true

Create the node port service from nginx-ingress.yaml

Create the ingress resource from ingress.yaml

Step 1: Install and Configure NGINX on Raspberry Pi
Install NGINX:

sh
Copy code
sudo apt-get update
sudo apt-get install nginx
Configure NGINX to Listen on IPv6 and Forward to NodePort:

Edit the NGINX configuration file (e.g., /etc/nginx/sites-available/default):

nginx
Copy code
server {
listen [::]:80;
listen 80;
server_name your-domain.com;  # Replace with your domain

    location / {
        proxy_pass http://127.0.0.1:30080;  # Forward HTTP to NodePort 30080
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
listen [::]:443 ssl;
listen 443 ssl;
server_name your-domain.com;  # Replace with your domain

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;  # Path to your SSL certificate
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;  # Path to your SSL key

    location / {
        proxy_pass https://127.0.0.1:30443;  # Forward HTTPS to NodePort 30443
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
Restart NGINX:

sh
Copy code
sudo systemctl restart nginx