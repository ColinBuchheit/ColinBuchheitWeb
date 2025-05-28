# Colin Buchheit Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI, showcasing my professional experience, technical skills, and projects.

## 🌟 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Material-UI
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Dark Theme**: Elegant dark mode with custom gradient accents
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Integrated EmailJS with reCAPTCHA for secure communication
- **State Management**: Redux Toolkit for scalable state management
- **3D Graphics Support**: Three.js integration for potential 3D visualizations

## 🚀 Live Demo

[View Live Site](https://colinbuchheit.com)

## 🛠️ Built With

### Core Technologies
- **React** (v18.3.1) - UI library for building user interfaces
- **TypeScript** (v4.9.5) - Static typing for JavaScript
- **Material-UI** (v5.16.6) - React component library
- **React Router** (v6.26.1) - Client-side routing
- **Redux Toolkit** (v2.2.7) - State management

### Styling & Animation
- **Emotion** - CSS-in-JS styling solution
- **Framer Motion** (v11.3.24) - Animation library
- **Custom CSS** - Global styles and CSS variables

### Additional Libraries
- **EmailJS** - Contact form email service
- **React Google reCAPTCHA** - Bot protection
- **Three.js** - 3D graphics capabilities
- **React Three Fiber** - React renderer for Three.js

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── Contact.tsx     # Contact form
│   ├── Experience.tsx  # Work experience section
│   ├── SkillsEducation.tsx  # Skills and education
│   └── MotionButton.tsx     # Animated button component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Experience.tsx  # Experience page
│   ├── SkillsEducation.tsx  # Skills page
│   └── Contact.tsx     # Contact page
├── store/              # Redux store configuration
│   ├── index.ts        # Store setup
│   ├── reCaptchaSlice.ts    # reCAPTCHA state
│   └── reducers/       # Redux reducers
├── styles/             # Global styles
│   └── GlobalStyles.css     # CSS variables and utilities
├── theme.ts            # Material-UI theme configuration
└── App.tsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/ColinBuchheit/ColinBuchheitWeb.git
cd ColinBuchheitWeb
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

4. Start the development server
```bash
npm start
# or
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 🎨 Customization

### Theme
The theme can be customized in `src/theme.ts`. The site uses a dark theme with:
- Primary color: `#6d9eeb` (Blue)
- Secondary color: `#4ecca3` (Teal)
- Background: `#121212`

### Global Styles
CSS variables and global styles are defined in `src/styles/GlobalStyles.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- xs: 0px
- sm: 600px
- md: 960px
- lg: 1280px
- xl: 1920px

## 🔒 Security Features

- **reCAPTCHA**: Protects contact form from spam
- **Input Validation**: Client-side form validation
- **Environment Variables**: Sensitive data stored securely

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and templates
3. Add your credentials to the `.env` file
4. Configure reCAPTCHA at [Google reCAPTCHA](https://www.google.com/recaptcha)

## 🤝 Contributing

While this is a personal portfolio website, suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Colin Buchheit**

- GitHub: [@ColinBuchheit](https://github.com/ColinBuchheit)
- LinkedIn: [Colin Buchheit](https://www.linkedin.com/in/colin-buchheit-02a3aa22b/)
- Email: colinbuchheit@gmail.com



---
