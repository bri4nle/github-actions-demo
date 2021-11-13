FROM node:14-alpine

# Create a directory in the image
RUN mkdir -p /home/app

# Copy source files from local to image
COPY . /home/app

# Set default dir in image
WORKDIR /home/app

# Install dependencies in image
RUN npm install

CMD ["npm", "start"]