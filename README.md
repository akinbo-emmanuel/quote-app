# Quote App

A simple web application for displaying and managing quotes. Users can view a collection of quotes fetched from an external API, filter quotes by author or date, and sort them by ID or author. The app is built with ReactJS, TypeScript, and Tailwind CSS.

![Quote App Preview](https://tinyurl.com/mdru2tp7)

## Features

- Fetches quotes from an external API and displays them on the page.
- Allows users to filter quotes by author or date.
- Supports sorting quotes by ID or author.
- Dark mode support for improved readability.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/quote-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quote-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Technologies Used

- ReactJS - A JavaScript library for building user interfaces.
- TypeScript - A statically typed superset of JavaScript.
- Tailwind CSS - A utility-first CSS framework for building custom designs.

## Folder Structure

```
quote-app/
│
├── src/
│   ├── components/         # React components
│   ├── api/                # API integration
│   ├── assets/             # Images, fonts, etc.
│   └── App.tsx             # Main application component
│
├── public/                  # Static assets
│   ├── index.html           # HTML template
│   └── favicon.ico          # Favicon
│
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- [Quotable API](https://github.com/lukePeavey/quotable) - API used for fetching quotes.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
