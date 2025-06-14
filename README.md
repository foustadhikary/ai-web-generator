# AI Web Generator

**AI Web Generator** is an intelligent web application designed to help users create websites effortlessly by simply describing their dream website in natural language. Using advanced AI-powered parsing and generation, the app converts user prompts into detailed, actionable website build plans, guiding users through each step of the development process.

---

## 🚀 Features

- **Natural Language Website Description:** Users can describe any kind of website they want to build using simple English text.
- **AI-Powered Plan Generation:** Converts textual prompts into structured website build steps using XML parsing.
- **Step-by-Step Interactive Builder:** Users can navigate through the generated steps to customize and implement their website.
- **Modern and Responsive UI:** Built with React and TailwindCSS for a clean, intuitive experience on all screen sizes.
- **Smooth Navigation:** Powered by React Router for seamless page transitions.
- **Robust XML Parsing:** Custom parsing logic translates AI responses into file creation and script execution steps.
- **Extensible Architecture:** Easily integrate additional AI models or extend features.

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- Access to the backend AI API service (configured in `src/config.ts`)

---

## ⚙️ Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository**

  git clone https://github.com/your-username/ai-web-generator.git
  cd ai-web-generator

2. **Install Dependencies**
   
  - Using npm:
   npm install
   
   - Or using yarn:
   yarn install

3. **Configure Backend API URL**
   
   Open src/config.ts and update BACKEND_URL to your backend server address:
   export const BACKEND_URL = 'http://localhost:5000'; // Replace accordingly
   
4. **Start the development server**
   - Using npm:
   npm start

   - Using yarn:
   yarn start

5. **Open in browser**
   Navigate to http://localhost:3000.

---

## 🎯 Usage

- On the home page, enter a description of the website you want to build, e.g.,

"A portfolio website with a dark theme, an about section, and a contact form."

- Click Generate Website Plan.

- You will be redirected to the builder page showing detailed steps for your website.

- Follow the step-by-step instructions to customize and create your website.

---

## 🛠️ Technologies Used

- **React** — Frontend UI library

- **React Router** — Client-side routing

- **TypeScript** — Strongly typed JavaScript

- **TailwindCSS** — Utility-first CSS framework

- **Axios** — HTTP client for API calls

- **lucide-react** — Icon components

- **Custom backend API** — Processes AI prompts and returns structured responses

- **XML Parsing** — Converts AI-generated XML to build steps

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repo.

2. Create a feature branch:
   git checkout -b feature/YourFeatureName
   
3. Make your changes with clear commit messages:
   git commit -m "Add feature: Your feature description"

4. Push your branch:
   git push origin feature/YourFeatureName

5. Open a Pull Request explaining your changes.

Please ensure code style consistency and passing tests.

---
