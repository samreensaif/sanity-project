# Sanity & Next.js Project

This project is a simple web application built using **Next.js** and **Sanity** as the headless CMS for managing content. It features a basic website structure with a **header**, **hero section**, and **testimonial** section. The project demonstrates how to manage and fetch dynamic content using **Sanity**, **GROQ**, schema types, and `index.ts`.

---

## 🚀 **Project Overview**

- **Framework:** [Next.js 15.1.0](https://nextjs.org/)
- **CMS:** [Sanity 3.67.1](https://www.sanity.io/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS and Styled Components

---

## 📦 **Dependencies**

### Key Dependencies

- **`sanity`**: Headless CMS for managing structured content.
- **`@sanity/image-url`**: For generating image URLs from Sanity assets.
- **`@sanity/vision`**: A tool for testing GROQ queries directly in the Sanity Studio.
- **`next-sanity`**: Simplifies integrating Sanity with Next.js.
- **`styled-components`**: CSS-in-JS library for component-level styling.

### Full `package.json` Dependencies

```json
{
  "dependencies": {
    "@sanity/image-url": "^1.1.0",
    "@sanity/vision": "^3.67.1",
    "next": "15.1.0",
    "next-sanity": "^9.8.25",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "sanity": "^3.67.1",
    "styled-components": "^6.1.13"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---

## 🛠️ **Setup & Installation**

### Prerequisites

- **Node.js** (v18 or higher)
- **Sanity CLI** (for setting up the Sanity Studio)

### Steps to Run the Project

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run Sanity Studio:**

   If you have Sanity configured, navigate to the Sanity project folder and start the studio:

   ```bash
   sanity start
   ```

4. **Run Next.js development server:**

   ```bash
   npm run dev
   ```

   The application will be live at `http://localhost:3000`.

5. **Build the project for production:**

   ```bash
   npm run build
   ```

---

## 📝 **Key Features**

1. **Dynamic Content Management**: Easily update website content using Sanity's CMS without touching the code.
2. **GROQ Queries**: Fetch data efficiently using GROQ.
3. **Schema Types**: Define and manage custom content structures.
4. **Integration with Next.js**: Seamless integration of Sanity with Next.js pages and components.

---

## 📂 **Project Structure**

```
.
├── sanity/             # Sanity Studio configuration
│   ├── schemas/       # Schema types for Sanity
│   │   └── index.ts   # Entry point for schemas
│   └── sanity.json    # Sanity project configuration
├── pages/             # Next.js pages
│   └── index.tsx      # Home page
├── components/        # Reusable components (header, hero, testimonial)
├── styles/            # CSS and Tailwind configurations
└── package.json       # Project dependencies and scripts
```

---

## 🤝 **Credits & Acknowledgments**

- **Mentor:** Sir Taha Ahmed Siddiqui
- **Tools Used:** Next.js, Sanity, Tailwind CSS, Styled Components

---

## 📝 **License**

This project is licensed under the MIT License.

---

Happy Coding! 🚀
