# teamwork-visualiser-dashboard

A dashboard to collect, analyse, and visualize all teamwork activities (i.e., multimodal learning analytics visual interfaces). Several features are adapted from previous work: https://github.com/Teamwork-Analytics/obs-rules and https://github.com/vanechev/obs-tool/

# Running the application

1. Make sure you have the `config.env` file in the `/server` directory, as it contains env variables needed to run the application. Ensure that Node and NPM are available in your system.

2. In `/client` and the `/server`, run `npm install` to install the package dependencies.

3. To run the server, in `/server`, run `npm run dev` in the console/terminal.
   To run the client, in `/client`, run `npm start` in the console/terminal.

4. The application will be running on `localhost:3000`.

## Running the app using Docker.

Note: Please ensure that environment variables are set as a `.env` file at the root and each service (i.e., client, server, nginx, and pyserver).

To clean build and run the system:

```bash
docker-compose --env-file .env up --force-recreate --build
```

To simply run the system:

```bash
docker compose up
```

Please get in touch with riordan.alfredo@gmail.com or riordan.alfredo@monash.edu to gain access to environment variables and sample datasets.
