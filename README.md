# React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
Then an Express server was added in the `server` directory. 
The server is proxied via the `proxy` key in `package.json`.

## Using this project

1. Install the dependencies.

   ```npm install```

2. Change a `.env` file for environment variables in your server.

   ```touch .env```

3. Start the server

   You can start the server on its own with the command:

   ```npm run server```

   Run the React application on its own with the command:

   ```npm start```

   Run both applicatCreateions together with the command:

   ```npm run dev```

   The React application will run on port 3000 and the server port 3001.
