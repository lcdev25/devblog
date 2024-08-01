# Build Stage
FROM node:20 as build

WORKDIR /app

# Copy and install dependencies for the React app
COPY devblog-ui ./devblog-ui
WORKDIR /app/devblog-ui
RUN npm install
RUN npm run build

# Copy and install dependencies for the Node.js server
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install

# Compile TypeScript to JavaScript
RUN npm run build

# Serve Stage
FROM node:20

WORKDIR /app

# Copy compiled server files and build directory from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/devblog-ui/build ./devblog-ui/build
COPY package*.json ./

# Install production dependencies for the server
RUN npm install --only=prod

# Expose port 3000
EXPOSE 3000

# Start the Node.js server with --experimental-modules for ES6 support
CMD ["node", "dist/server.js"]