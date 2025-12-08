FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci 

# Copy the rest of the code
COPY . .

# The port your app listens on
EXPOSE 8080

# Start server
CMD ["npm", "start"]
