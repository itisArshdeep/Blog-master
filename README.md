# BlogMaster

**BlogMaster** is a modern, feature-rich blogging platform built using React and Vite for the frontend, with Appwrite as the backend service. It enables users to create, manage, and share their blog posts seamlessly.

## Features

- 📝 **Write and Edit Blogs**: Intuitive editor to create and update blog content.
- 📚 **Blog Listing**: View all published blogs in an organized manner.
- 🔐 **User Authentication**: Secure login and registration using Appwrite.
- 🗂️ **Data Management**: Manage posts, comments, and user profiles with Appwrite's database.
- 🚀 **Fast and Modern UI**: Leveraging the speed of Vite and React.

---

## Tech Stack

### Frontend:
- **React**: For building a responsive and dynamic UI.
- **Vite**: Ultra-fast development environment and build tool.

### Backend:
- **Appwrite**: Backend-as-a-service (BaaS) for authentication, database, and storage.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **NPM** or **Yarn**
- **Appwrite Server** (set up and running)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blogmaster.git
   cd blogmaster
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   VITE_APPWRITE_ENDPOINT=https://your-appwrite-server.com/v1
   VITE_APPWRITE_PROJECT=your-project-id
   VITE_APPWRITE_DATABASE=your-database-id
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Backend Configuration

1. **Set up Appwrite**:
   - Install Appwrite following the [official installation guide](https://appwrite.io/docs/installation).
   - Create a project and note the project ID.
   - Configure your database collections for blogs, users, and other required entities.

2. **Integrate Appwrite**:
   - Use the SDK to connect your React app to Appwrite services.
   - Refer to the [Appwrite documentation](https://appwrite.io/docs) for detailed integration.

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

---


## Contributions

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.

---

## Contact

For queries or feedback, feel free to reach out:
- **Email**: deepsingh13131212@gmail.com
- **GitHub**: (https://github.com/itisArshdeep)

---

Enjoy blogging with **BlogMaster**! 🚀
```

