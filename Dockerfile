# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port that your React Vite app will run on
EXPOSE 4321

# Start the development server
CMD ["npm", "run", "dev"]
# To build and run this Dockerfile:
# 1. Make sure Docker is installed on your machine.
# 2. Open a terminal and navigate to the directory containing this Dockerfile.
# 3. Build the Docker image using the following command:
#    docker build -t frontend-ts .
# 4. Run the Docker container using the following command:
#    docker run -p 4321:4321 frontend-ts
#    Replace "my-app" with the image name used in the previous step.
# 5. Access your React Vite app in a web browser at http://localhost:4321.

