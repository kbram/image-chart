<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/kbram/image-chart">
    <img src="https://github.com/kbram/files/blob/main/image-chart-icon.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">image-chart</h3>

  <p align="center">
    Simply use Image Chart to plot your ratio percentages (Differently plot something)
    <br />
    <a href="https://github.com/kbram/image-chart"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kbram/image-chart">View Demo</a>
    ·
    <a href="https://github.com/kbram/image-chart/issues">Report Bug</a>
    ·
    <a href="https://github.com/kbram/image-chart/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
   <li><a href="#about-project">About Project</a></li>
   <li><a href="#features">Features</a></li>
    <li><a href="#framework-support">Framework support</a></li>
    <li><a href="#built-With">Built With</a></li>
    <li>
      <a href="#get-started">Get Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usages</a></li>
    <li><a href="#options">Options</a></li>
    <li><a href="#browser-support">Browser Support</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- PROJECT FEATHERS -->

## About Project

[![](https://github.com/kbram/files/blob/main/image-chart.png)](https://github.com/kbram/files/blob/main/image-chart.png)

This is different kind of graph representation of UI kit. It's fully worked on react Js. In here you can simply plot graph with binary values. Now package are 3 different kind of image is using, many images are adding soon. You can simply change back, text color attributes.

  <p align="right">(<a href="#top">back to top</a>)</p>

## Features

> Available Image Types `building` `map` `map2` `mountain`
> Others are available soon

- Highly customizable
- Very easy to implement
- Resolution independent
- Uses css for smooth animations on riced time
- Works in all modern browsers, [Chrome, FireFox, Safari]
- Simply compare ratio
- No need other front-end css stuff
- Dark, light modes available and text back colors are editable
- You can use any color theme combination
- Now map and building template are available (other templates are under developed)

<p align="right">(<a href="#top">back to top</a>)</p>

## Framework support

- React JS _(no dependencies)_

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

- [React.js](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [css]()

<p align="right">(<a href="#top">back to top</a>)</p>

## Get started

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Using npm:

```bash
$ npm i image-chart
```

Using yarn:

```bash
$ yarn add image-chart
```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Usage

#### sample - 01

```js
import { ImageChart } from "image-chart";

function App() {
  return (
    <ImageChart name="chart" title="Occupants count" total={1500} value={500} />
  );
}

export default App;
```

#### sample - 02 (Dark Mode)

```js
import { ImageChart } from "image-chart";

function App() {
  return (
    <ImageChart
      name="chart"
      title="Occupants count "
      dark={true}
      total={1500}
      value={500}
    />
  );
}

export default App;
```

#### sample - 03 (change image type)

```js
import { ImageChart } from "image-chart";

function App() {
  return (
    <ImageChart
      name="chart"
      title="Occupants count "
      type="map"
      cardTextColor="#fff"
      total={1500}
      value={500}
    />
  );
}

export default App;
```

#### sample - 04 (use other props [you can read more in option part])

```js
import { ImageChart } from "image-chart";

function App() {
  return (
    <ImageChart
      cardBackColor="#f8c7ff"
      lineColor="#fa2eec"
      highLightColor="#fa2eec"
      cardTextColor="#fff"
      name="chart"
      type="map"
      title="Occupancy"
      total={1200}
      value={420}
    />
  );
}

export default App;
```

#### sample - 05 (Using your own image)

To use your own custom image, set the `type` prop to `"my"` and pass the image source to the `image` prop. You can import images directly into your component or pass a URL.

For sample images that you can use, or to see the structure of the default images, you can check the image directory in the repository: [https://github.com/kbram/image-chart/tree/master/src/components/ImageChart/image](https://github.com/kbram/image-chart/tree/master/src/components/ImageChart/image)

```js
import { ImageChart } from "image-chart";
import myCustomImage from "./path/to/your/image.png"; // Example: import your image

function App() {
  return (
    <ImageChart
      name="chart"
      title="Custom Image Chart"
      type="my"
      image={myCustomImage} // Pass the imported image or a URL string
      total={1000}
      value={750}
      dark={false}
      cardTextColor="#333"
    />
  );
}

export default App;
```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Options

You can pass these options to the initialize function to set a custom look and feel for the plugin.

<table>
    <tr>
      <th>Property (Type)</th>
      <th>Default</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong>name</strong></td>
      <td>null</td>
      <td>string</td>
      <td>The name is must be compulsory attribute. If you not put this multiple component can't use in same time. this is for identification of our component </td>
    </tr>
    <tr>
        <td><strong>title</strong></td>
        <td>null</td>
        <td>string</td>
        <td>This is for displaying title of component</td>
    </tr>
     <tr>
        <td><strong>total</strong></td>
        <td>null</td>
        <td>int</td>
        <td>This attributes must be compulsory. This is for max limit number of chart</td>
    </tr>
    <tr>
        <td><strong>value</strong></td>
        <td>null</td>
        <td>int</td>
        <td>This attributes must be compulsory. This is for plot value of chart</td>
    </tr>
    <tr>
        <td><strong>fontStyle</strong></td>
        <td>Montserrat, sans-serif</td>
        <td>string</td>
        <td>You can change whole component font style here</td>
    </tr>
    <tr>
        <td><strong>type</strong></td>
        <td>building</td>
        <td>string</td>
        <td>This is for back image type define. Available types are `building`, `map`, `map2`, `mountain`. Set to `my` to use a custom image via the `image` prop.</td>
    </tr>
    <tr>
      <td><strong>image</strong></td>
      <td>null</td>
      <td>string / object</td>
      <td>Used when `type` is set to `my`. Pass the imported image object or a URL string for your custom image.</td>
    </tr>
    <tr>
      <td><strong>dark</strong></td>
      <td>false</td>
      <td>boolean</td>
      <td>This is boolean attribute , It's true value is decided dark mode or not.</td>
    </tr>
    <tr>
        <td><strong>cardBackColor</strong></td>
        <td><li>Dark:<code>#242424</code></li><li>Light:<code>#ededed</code></li></td>
        <td>string</td>
        <td>This is for background color of the component</td>
    </tr>
    <tr>
        <td><strong>cardTextColor</strong></td>
        <td><li>Dark:<code>#343a40</code></li><li>Light:<code>#343a40</code></li></td>
        <td>string</td>
        <td>This is for text color of the component</td>
    </tr>
     <tr>
        <td><strong>cardSideTextColor</strong></td>
        <td><li>Dark:<code>#e2e3e4</code></li><li>Light:<code>#343a40</code></li></td>
        <td>string</td>
        <td>This is for axis text color of the component</td>
    </tr>
    <tr>
        <td><strong>imageCardColorLine</strong></td>
        <td><code>#3cb4e7</code></td>
        <td>string</td>
        <td>This is for chart line color</td>
    </tr>
     <tr>
        <td><strong>highLightColor</strong></td>
        <td><code>#3cb4e7</code></td>
        <td>string</td>
        <td>This is for chart back highlight color</td>
    </tr>
</table>

<p align="right">(<a href="#top">back to top</a>)</p>

## Browser Support

Native support

- Chrome
- Safari
- FireFox

<p align="right">(<a href="#top">back to top</a>)</p>

## License

[MIT](LICENSE)

> Developed by [`Karunaaharan Bavaram`](https://www.bavaram.info)

## Copyright

Copyright (c) 2022 [`Karunaaharan Bavaram`](https://www.bavaram.info), contributors. Released under the MIT, GPL licenses

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/kbram/image-chart.svg?style=for-the-badge
[contributors-url]: https://github.com/kbram/image-chart/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kbram/image-chart.svg?style=for-the-badge
[forks-url]: https://github.com/kbram/image-chart/network/members
[stars-shield]: https://img.shields.io/github/stars/kbram/image-chart.svg?style=for-the-badge
[stars-url]: https://github.com/kbram/image-chart/stargazers
[issues-shield]: https://img.shields.io/github/issues/kbram/image-chart.svg?style=for-the-badge
[issues-url]: https://github.com/kbram/image-chart/issues
[license-shield]: https://img.shields.io/github/license/kbram/image-chart.svg?style=for-the-badge
[license-url]: https://github.com/kbram/image-chart/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bavaram
