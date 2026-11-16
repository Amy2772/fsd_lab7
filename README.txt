NeighbourNet React fixes

Copy these files into your React project's src folder, preserving the folders:

App.jsx
App.css
pages/Home.jsx
pages/Requests.jsx
components/RequestForm.jsx
components/RequestCard.jsx

The existing Navbar.jsx and Footer.jsx are not changed.

Important:
- Home page submission now POSTs to http://localhost:3001/requests.
- Keep JSON Server running on port 3001 (for example: npm run server, depending on your package.json).
- The Home prompt saves a request using the same JSON Server data as the CRUD page.
- The CRUD card/grid CSS classes are namespaced so they no longer collide with the Home page map popup.
- The form layout is redesigned in the NeighbourNet cream/coral theme.
