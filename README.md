## WEHI Data Commons Project - May 2024

### Overview  
The **WEHI Data Commons Project** is a **Research Data Common** designed to maintain a register of data portals, information, and research focused on cell datasets.

This repository includes:  
- **Frontend**: Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for a fast and responsive user interface.  
- **Backend**: Powered by [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for robust API handling.

### Demo  
Check out the live demo: [WEHI Data Commons](https://data-commons.vercel.app)
This webapp was initially deployed on ARDC research cloud's Ubuntu VM using Nginx reverse proxy and pm2 process management

### Getting Started  

#### Prerequisites  
- Node.js and npm installed on your machine.  
- Git for cloning the repository.  

#### Running Locally  
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Start the frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```
3. Start the backend in another terminal:
   ```bash
   cd server
   npm install
   npm run dev
   ```
4. Visit http://localhost:3000 in your browser to access the app.

#### Documentation & Support
For detailed setup instructions, API documentation, and troubleshooting, please refer to the [Wiki](https://github.com/amybok/data-common/wiki)
