# Serve static pages using tnnl

This project is under development. Unless you are explicitly asked to, do not use it for now!

With tnnl you can make IoT devices that are behind a private network, accessible from the internet.

## Run

```
docker run -d --restart always -v $PATH_TO_YOUR_FILES:/data -e TOKEN="********************" --name "my-first-tnnl-page" weberlars/tnnl-static
```
