
# Santos Motors Ecommerce

This is a modern automotive parts ecommerce website built with React, Tailwind CSS, and Google Gemini AI.

## How to Run Locally

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Download**: Ensure all files from this project are in a single folder.
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```
5. **Open**: Visit `http://localhost:5173` in your browser.

## How to Deploy to Netlify

1. Upload the files to a **GitHub** repository.
2. Connect the repository to **Netlify**.
3. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. **Environment Variables**: Go to Site Settings > Environment Variables in Netlify and add:
   - `API_KEY`: [Your Google Gemini API Key]

## Project Structure
- `index.tsx`: Main entry point for React.
- `App.tsx`: Main application component.
- `components/`: UI components like Header, Hero, and ProductCards.
- `services/`: AI logic for the Gemini assistant.
