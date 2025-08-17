# Project Overview: Jungle

This is a SvelteKit application named "jungle". It includes a homepage, an "about" page, and a Wordle-like game called "Sverdle". The application is styled with Tailwind CSS and uses Playwright for end-to-end testing.

## Project Structure

- **`src/routes/`**: This directory contains the application's routes.
  - **`+layout.svelte`**: The main layout file, which includes a header and footer.
  - **`+page.svelte`**: The homepage, which displays a welcome message and a counter component.
  - **`about/+page.svelte`**: A static "about" page.
  - **`sverdle/`**: This directory contains the Sverdle game.
    - **`+page.svelte`**: The main component for the Sverdle game.
    - **`+page.server.ts`**: The server-side logic for the Sverdle game.
    - **`game.ts`**: Contains the core game logic for Sverdle.
    - **`words.server.ts`**: Manages the word list for the Sverdle game.

## How to Run the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## How to Run Tests

To run the end-to-end tests, use the following command:

```bash
npm run test
```
