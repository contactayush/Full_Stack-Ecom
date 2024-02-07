FROM node:17-alpine AS development
#ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package*.json ./
RUN npm install
RUN npm install vite
# Copy app files
COPY . ./
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "run","dev" ]

