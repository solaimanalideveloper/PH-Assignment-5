# 🧱 DevStack

A simple web app to explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.

Built as part of a React practice assignment, focused on component structure, state handling, and working with dynamic JSON data instead of hardcoded content.

---

## 🚀 Tech Stack

- **React** (with Vite) – component-based UI
- **TypeScript** – type safety across components
- **Tailwind CSS** – utility-first styling and custom gradient themes
- **React Toastify** – toast notifications for user actions (add/remove from stack)

---

## ✨ Features

- **Browse technologies by category** – Frontend, backend, database, and tooling options are pulled from a JSON file and rendered dynamically as cards, each with an icon, badge, category, difficulty, and rating.
- **Build your own stack** – Add or remove technologies with a single click. Your selections update instantly and persist in state until you clear them.
- **Live feedback with toasts** – Every add, remove, and "clear all" action triggers a toast notification, so the app always confirms what just happened instead of leaving you guessing.

---

## 📁 Project Structure (key parts)

```
src/
 ├─ components/
 │   ├─ Nav.tsx              # top navigation bar
 │   ├─ HeroSection.tsx      # landing hero with CTA buttons
 │   ├─ Technologies.tsx     # loads data, manages stack state
 │   ├─ Technologi.tsx       # single technology card
 │   └─ FooterSection.tsx    # footer with links
 ├─ index.css                # Tailwind + custom gradient classes
 └─ App.tsx                  # ties everything together with Suspense
```

---

## 🛠️ Getting Started

```bash
npm install
npm run dev
```

---

## 📚 React Concepts — Q&A

**i. What is JSX, and why is it used in React?**
JSX is a syntax that lets you write HTML-looking markup directly inside JavaScript/TypeScript files. It's used because it makes describing what the UI should look like much more readable than calling `React.createElement()` manually — under the hood, that's exactly what it compiles to.

**ii. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they're read-only from the child's side and used to configure how it renders (like passing a `technology` object into a card). State is data a component manages *internally*, and it can change over time. When state updates, the component re-renders. In this project, `stack` is state (owned by `Technologies`), while each `Technologi` card receives its data through props.

**iii. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update values across re-renders. I used it in `Technologies.tsx` to keep track of `stack` — the list of technologies the user has added — so the UI updates every time something is added or removed.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that isn't part of rendering itself, like fetching data, after the component mounts. You need it (or an equivalent async loading pattern) to load JSON data because fetching is asynchronous and can't happen directly during render — it has to be triggered separately and the result stored in state once it resolves, so the component knows to re-render with the actual data.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to identify which items changed, got added, or got removed between renders. Without a stable, unique key, React can't reliably match old list items to new ones, which can cause wrong data to show up on the wrong card or unnecessary re-renders of the whole list.

**vi. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on a condition, instead of always rendering the same thing. Example from this project: in the stack panel, if `stack.length === 0`, it shows *"Your stack is empty."* — otherwise, it maps over `stack` and renders the selected technology cards.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent → child: through props (e.g., `Technologies` passes `technology`, `onAdd`, and `isAdded` down to each `Technologi` card). Child → parent: the parent passes a *function* down as a prop (like `onAdd={handleAddToStack}`), and the child calls that function with whatever data it needs to send back up — the parent then updates its own state based on that.
