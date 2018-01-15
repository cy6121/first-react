# 简介
  - react学习历程，会不断更新

#### 项目运行
  下好项目源代码后，进入项目根目录，执行以下命令，访问localhost:9090即可。
  ```
  npm install  
  npm run dev  
  ```
#### 项目部署
  首先打包项目，然后构建Docker镜像，最后运行构建好的镜像即可，所有命令均在项目根目录执行，最后访问localhost。这里使用了容器技术，方便我们快速发布和部署。
  ```
  npm run build
  docker build -t first-react .   
  docker run -d -p 80:80 first-react
  ```
  - 说明：-d 后台运行，-p 宿主机端口:容器开放端口
