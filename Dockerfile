# Use Node.js LTS (Long Term Support)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on (Vite preview usually 4173, but Railway expects dynamic port)
# We will use a simple server to serve the static files or use verify preview
# Better to use a static server like 'serve'
RUN npm install -g serve

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "3000"]
