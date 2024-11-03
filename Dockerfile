# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Set up production image
FROM node:18 AS runner

# Set the working directory
WORKDIR /app

# Copy build artifacts from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Expose the desired port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
