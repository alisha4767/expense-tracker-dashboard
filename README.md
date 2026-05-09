# Personal Expense Tracker Dashboard

A modern React TypeScript dashboard for tracking income, expenses, and current balance.

This project helps users manage their personal finance transactions with search, filters, statistics, and localStorage persistence.

---

## Features

- Add income and expense transactions
- Track title, amount, category, type, date, and note
- Search transactions by title or category
- Filter transactions by Income or Expense
- View total balance
- View total income
- View total expense
- Delete transactions
- Save data in browser using localStorage
- Responsive modern dashboard UI

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend library |
| TypeScript | Type safety |
| Vite | Project setup and development |
| CSS3 | Styling and responsive design |
| LocalStorage | Browser data persistence |
| Git & GitHub | Version control |

---

## Folder Structure

```txt
src/
├── components/
│   ├── common/
│   │   ├── EmptyState.tsx
│   │   └── StatCard.tsx
│   └── transactions/
│       ├── TransactionCard.tsx
│       ├── TransactionFilters.tsx
│       ├── TransactionForm.tsx
│       └── TransactionList.tsx
├── data/
│   └── sampleTransactions.ts
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── transaction.ts
├── utils/
│   └── formatters.ts
├── App.tsx
├── index.css
└── main.tsx
```
## Main Concepts Used
React components
Props
useState
useMemo
Form handling
Conditional rendering
List rendering
Custom hook
TypeScript types
localStorage
Responsive CSS
```
