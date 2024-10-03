FROM python:3.12-slim-bullseye  

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 5003

WORKDIR /usr/src/app

CMD ["python", "server.py"]

# TODO: need to pass ATLAS_URI securely when deployed
# running this locally copies config.env into the container