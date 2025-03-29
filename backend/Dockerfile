# Use Node.js 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json from the backend directory
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the backend directory
COPY backend . 

# Expose the application port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
