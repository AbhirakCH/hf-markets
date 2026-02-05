# HF Markets Frontend

## Objective

The goal of this assessment is to evaluate React development skills through the implementation of a fully functional, responsive landing page based on the provided Figma design. The exercise focuses on modern React best practices, component architecture, and frontend problem-solving.

## Tech Stack

- **Core**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios
- **Notifications**: Sonner
- **Node**: v22.18.0

## Functionality

- **Responsive Design**: Layout adapts smoothly to mobile, tablet, and desktop screens.
- **Email Validation**: Client-side validation using Zod schema to ensure correct email format.
- **Dynamic Phone Number Prefill**: Country selector dropdown that automatically fills the corresponding country code (e.g., Thailand +66, Japan +81).
- **Form Handling**: Controlled components using `react-hook-form` with validation and error states.
- **Feedback**: Success toast notification upon form submission.
- **Registration Service**: API logic separated into a dedicated service layer.

## Submission Response

Upon successful form submission, the API response details are logged to the **Console**. A success toast notification will also appear on the UI.

## Links

- **Demo Link**: https://hf-markets.vercel.app/
- **GitHub Link**: https://github.com/AbhirakCH/hf-markets
- **Google Drive Link**: https://drive.google.com/file/d/1Hbcut8CYPu_zQ3qYrInG2ZdaBcNrY8QB/view?usp=sharing

## Setup Instructions

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Run Development Server**:

    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```
