<div style="display: flex;flex-direction: row;align-items: center;justify-content: space-between; gap: 2em;">
    <h1>BlackShort UI</h1>
    <img src="https://avatars.githubusercontent.com/u/132726538?s=400&u=c9ef32a82ebad639033c5ba69ba49de50a94e436&v=4" alt="BlackShort" width="100" height="100" style="border-radius:50%; object-fit:cover">
</div>

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/BlackShort/Components/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/BlackShort/Components)](https://github.com/BlackShort/Components/issues)
[![GitHub stars](https://img.shields.io/github/stars/BlackShort/Components)](https://github.com/BlackShort/Components/stargazers)

A collection of reusable React components built on top of React, Tailwind CSS, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install your-component-library
```

## Usage

```jsx
import React from "react";
import { LoginPage } from "blackshort-ui";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
```

## Components

All the component which are available to use are listed below

| Component                                                                     | Availability                                                                                                                                                                        | Description                                                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **[Login](https://github.com/BlackShort/Components/blob/main/Login)**         | <span style="display:flex; align-item:center; justify-content: center;color:white; background-color:#22c55ece;padding:0.1em; border-radius:0.3em;text-align:middle">string</span>   | A basic login page with username and password fields along with submit button.                               |
| **[Accordion](https://github.com/BlackShort/Components/blob/main/Accordion)** | <span style="display:flex; align-item:center; justify-content: center;color:white; background-color:#22c55ece;padding:0.1em; border-radius:0.3em;text-align:middle">`string`</span> | An accordion component for organizing and displaying content in collapsible sections.                        |
| **[Carousel](https://github.com/BlackShort/Components/blob/main/Carousel)**   | <span style="display:flex; align-item:center; justify-content: center;color:white; background-color:#22c55ece;padding:0.1em; border-radius:0.3em;text-align:middle">`string`</span> | A carousel component for cycling through a set of images or content in a slideshow.                          |
| **[Footer](https://github.com/BlackShort/Components/blob/main/Footer)**       | <span style="display:flex; align-item:center; justify-content: center;color:white; background-color:#22c55ece;padding:0.1em; border-radius:0.3em;text-align:middle">`string`</span> | A footer component to be placed at the bottom of the page, often containing copyright information and links. |
| **[Card](https://github.com/BlackShort/Components/blob/main/Card)**           | <span style="display:flex; align-item:center; justify-content: center;color:white; background-color:#22c55ece;padding:0.1em; border-radius:0.3em;text-align:middle">`string`</span> | A card component for displaying content in a structured and visually appealing way.                          |
| **[Spinner](https://github.com/BlackShort/Components/blob/main/Spinner)**     | <span style="display:flex; align-item:center; justify-content: center;color:white; background-color:#22c55ece;padding:0.1em; border-radius:0.3em;text-align:middle">`string`</span> | A spinner or loading indicator component for indicating that content is being loaded.                        |

## Customization

You can customize these components by simply using the `tailwind` classes.</s>

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Contributions are welcome!

## License

This project is licensed under the [MIT License](https://github.com/BlackShort/Components/blob/main/LICENSE).
