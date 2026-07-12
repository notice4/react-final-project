# 🚀 React Final Project

**🌐 Live Demo:** [https://react-final-project-one-orpin.vercel.app/](https://react-final-project-one-orpin.vercel.app/)

მოცემული პროექტი არის სრულყოფილი React აპლიკაცია, რომელიც აგებულია თანამედროვე სტანდარტების და საუკეთესო პრაქტიკების გამოყენებით.

### 🛠️ ტექნოლოგიები და ინსტრუმენტები
* Vite & React
* ES6+ / JavaScript
* React Router
* Context API
* Node.js & Express
* ESLint & Prettier

### ✨ ძირითადი ფუნქციონალი
* **Reusable კომპონენტები:** UI დაყოფილია მრავალჯერადად გამოყენებად ნაწილებად (`props` და `children` მხარდაჭერით).
* **მონაცემების დინამიური წამოღება (Data Fetching):** შექმნილია Custom Hook (`useFetch`), რომელიც იღებს API-დან მონაცემებს და მართავს `loading` და `error` მდგომარეობებს.
* **ავტორიზაცია (Authentication):** დანერგილია Login/Logout სისტემა `localStorage`-ის გამოყენებით. დახურული გვერდები ხელმისაწვდომია მხოლოდ ავტორიზებული პირებისთვის.
* **ფორმები და ვალიდაცია:** მონაცემების ვალიდაციისთვის გამოიყენება `react-hook-form` (Controlled inputs, error messages).
* **State Management:** ლოკალური state იმართება `useState`-ით (Lifting state up), ხოლო გლობალური `useContext`-ით.
* **ტესტირება:** დაწერილია Unit ტესტები `Vitest`-ისა და `React Testing Library`-ის მეშვეობით (`npm run test`).
* **ანიმაციები:** ინტერფეისის გამოცდილების (UX) გასაუმჯობესებლად აქტიურად გამოიყენება CSS transitions.

