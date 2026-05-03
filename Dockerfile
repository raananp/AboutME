# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Install build essentials for native module compilation
RUN apk add --no-cache make gcc g++ python3

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies. Using 'npm ci' for reproducible builds.
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application
# Use a minimal Node.js Alpine image for the final container
FROM node:20-alpine

WORKDIR /app

# Install 'serve' package globally, which is a simple static file server
RUN npm install -g serve

# Copy the built static assets from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000, which is the default for the 'serve' command
EXPOSE 3000

# Define the command to run the application using 'serve'
# '-l 3000' specifies listening on port 3000
CMD ["serve", "dist", "-l", "3000"]
