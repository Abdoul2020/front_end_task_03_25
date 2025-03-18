# Rick and Morty Character Finder

## Overview
This project integrates the [Rick and Morty API](https://rickandmortyapi.com) to display character information with advanced filtering options. Users can filter characters by status and gender, with filters managed via URL query parameters. The application utilizes Server-Side Rendering (SSR) to fetch fresh data when the filters change.

## Features
- Fetch and display character data from the Rick and Morty API.
- Filtering based on status (Alive, Dead, Unknown) and gender (Male, Female, Genderless, Unknown).
- URL query parameters for managing filters (e.g., `?status=alive&gender=male`).
- Integrated filtering system to show only characters matching selected filters.
- Server-Side Rendering (SSR) ensures fresh data on page load and filter changes.
- Modern and clean UI using `shadcn/ui` components.

## Project Setup & Technologies
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **State Management:** Zustand
- **Data Fetching:** React Query
- **URL Management:** nuqs
- **Linting & Formatting:** ESLint, Prettier, Husky, Lint-Staged

## State Management
- **Zustand:** Used for global state management.
- **React Query:** Handles API calls and caching.
- **Filtering State:** Managed using state management for selected filters and interactions.

## URL Management with nuqs
- `nuqs` is used for managing URL query parameters.
- `shallow: false` ensures that filter changes trigger a new request to the server (SSR).

## Filtering Mechanism
1. User selects a filter (e.g., `status=alive` and `gender=male`).
2. Filters are added to the URL query parameters.
3. The page reloads with SSR to fetch updated data.
4. React Query fetches data based on the updated query parameters.

## Code Quality & Scalability
- **Linting & Formatting:**
  - ESLint and Prettier enforce consistent coding styles.
  - Husky & Lint-Staged ensure automatic formatting before commits.
  - ESLint rule prohibits the use of `any` to enforce TypeScript type safety.
- **Scalability:**
  - API requests are managed using React Query hooks.
  - `useEffect` is avoided for API calls in favor of React Query for better maintainability.

## API Calls with React Query
- API calls are handled using `useQuery` and `useMutation`.
- Each API endpoint has its own hook file for modularity.
- Avoids `useEffect` for API requests, ensuring efficient and scalable data fetching.

## Evaluation Criteria
- Code quality and scalability.
- Optimization of API calls and data management.
- Automated linting, formatting, and commit process.
- Proper use of TypeScript with strict type safety (no `any` usage).
- Effective usage of Zustand and React Query.
- UI/UX quality with `shadcn/ui` components.
- Correct implementation of SSR with Next.js 15.
- Proper URL query management with `nuqs` and `shallow: false` for server requests.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open `http://localhost:3000` in your browser.


Ressources : 
   - Stackoverflow
   - ChatGPT & Cursor for debug