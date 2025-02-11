# Use Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all backend files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]
