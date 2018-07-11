#  Goodbye to monolithic architectures!, Welcome Microservices!

## ¿Que es un Microservicio?

![Arquitectura Monolítica VS Arquitectura de Microservicios](./_assets/monolithic_vs_microservices.png)

## Construyendo un Microservicio sencillo

```
docker build -t node_service:1.0.0 .
```

```
docker run -d -p 8080:8080 node_service:1.0.0
```

```
curl -i localhost:8080/foo
```

## Ecosistema de Microservicios

## Construyendo un ecositema de Microservicios

```
docker-compose -f docker-compose.basic.yml up -d 
```

```
docker-compose -f docker-compose.basic.yml scale node=3
```

## Escalando los servicios

```
docker-compose -f docker-compose.gateway.yml up -d 
```

```
docker-compose -f docker-compose.gateway.yml scale node=3
```

```
curl -H 'Host: node' -i localhost/foo
```

## Service Mesh (Patrón sidecar)

![Malla de Servicios](./_assets/service_mesh.png)

