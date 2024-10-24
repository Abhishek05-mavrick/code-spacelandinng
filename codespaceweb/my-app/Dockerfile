# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the application (assuming it’s a production build)
RUN npm run build

# Step 7: Expose the port the app will run on (default for Next.js is 3000)
EXPOSE 3000

# Step 8: Command to run the application
CMD ["npm", "run", "start"]

