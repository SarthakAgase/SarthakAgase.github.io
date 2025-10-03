# Sarthak Agase | Portfolio

This is the portfolio website of Sarthak Agase, created using React and TypeScript.

## Here's Brief Info about me

### Introduction

Hello, myself Sarthak Agase, I am IT Engineer with brief experience in building scalable full-stack web applications. Strong at problem solving skills, I love blending creativity with technology. Currently I am in Full Stack development domain and always up for exploring new domains.

### Education

Details about my educational background, including my Bachelor of Technology in Information Technology from Vishwakarma Institute of Information Technology.

### Experience

Information about my work experience, including my internship at Raja Software Labs where I worked on an IoT-based full-stack web application.

### Achievements

Details about my achievements, including my research paper "Voice Auth: Audio Verification with Deep-Learning" published in IEEE ICCUBEA 2024.

### Certifications

A list of my certifications, including:

- IBM Data Science
- Machine Learning A-Z
- GraphQL Developer

## Let's Get Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SarthakAgase/SarthakAgase.github.io.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

This command deploys the application to GitHub Pages.

It uses the `gh-pages` package to push the contents of the `build` directory to a `gh-pages` branch in your repository, which is then served by GitHub Pages.

#### Prerequisites

1.  **Install `gh-pages`:**

    ```sh
    npm install --save-dev gh-pages
    ```

2.  **Set `homepage` in `package.json`:**

    Add the following field to your `package.json` file, replacing `<username>` with your GitHub username and `<repo-name>` with your repository name:

    ```json
    "homepage": "https://<username>.github.io/<repo-name>"
    ```

    For this project, it is set to:
    ```json
    "homepage": "https://SarthakAgase.github.io"
    ```

3.  **Add deploy scripts to `package.json`:**

    Add the following scripts to your `package.json`:

    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

#### Manual Deployment

You can now deploy your application by running:

```sh
npm run deploy
```

This will create a `gh-pages` branch and push your `build` directory to it.

#### GitHub Repository Setup

For the deployment to be accessible, you need to configure your GitHub repository:

1.  Go to your repository's **Settings**.
2.  Navigate to the **Pages** section in the left sidebar.
3.  Under **Source**, select the `gh-pages` branch and the `/(root)` folder.
4.  Click **Save**.

Your application will be available at the URL specified in your `homepage` field.

### Automated Deployment with GitHub Actions

This project is configured to automatically deploy to GitHub Pages whenever code is pushed to the `main` branch.

This is handled by the `.github/workflows/deploy.yml` workflow, which automates the build and deployment steps.

The workflow will:
1.  Check out the repository.
2.  Set up Node.js.
3.  Install dependencies using `npm ci`.
4.  Lint the project using `npm run lint`.
5.  Build the project using `npm run build`.
6.  Deploy the `build` directory to the `gh-pages` branch using the `peaceiris/actions-gh-pages` action.

This ensures that the live version of the portfolio is always up-to-date with the latest changes in the `main` branch.

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)
- [Create React App](https://github.com/facebook/create-react-app)
