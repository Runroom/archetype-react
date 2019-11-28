# React Archetype

## Create certifications for SSL
Install `mkcert`

```
mkcert -install
mkdir .certs && cd $_
mkcert -cert-file cert.pem -key-file key.pem localhost
cd ..
```
