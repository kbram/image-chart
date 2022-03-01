<div id="top"></div>


<br />
<div align="center">
  <a href="https://github.com/kbram/image-chart">
    <img src="https://github.com/kbram/files/blob/main/image-chart-icon.png" alt="Logo" width="80" height="80">
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
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

## Features

[![](https://github.com/kbram/files/blob/main/image-chart.png)](https://github.com/kbram/files/blob/main/image-chart.png)

> 
> 
>Available Image Types `building` `map` `map2` 
>Others are available soon


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



## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* [React.js](https://reactjs.org/)
* [JavaScript](https://www.javascript.com/)
* [css]()

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
import {ImageChart} from "image-chart";

function App() {
  return (
    <ImageChart name="chart" title="Occupants count"  total={1500} value={500} />
  );
}

export default App;
```

#### sample - 02 (Dark Mode)

```js
import {ImageChart} from "image-chart";

function App() {
  return (
      <ImageChart  name="chart" title="Occupants count " dark={true} total={1500} value={500} />
  );
}

export default App;
```

#### sample - 03 (change image type)

```js
import {ImageChart} from "image-chart";

function App() {
  return (
    <ImageChart   name="chart" title="Occupants count " type="map" cardTextColor="#fff" total={1500} value={500} />
  );
}

export default App;
```


#### sample - 04 (use other props [you can read more in option part])

```js
import {ImageChart} from "image-chart";

function App() {
  return (
    <ImageChart cardBackColor="#f8c7ff" lineColor="#fa2eec" highLightColor="#fa2eec" cardTextColor="#fff"  name="chart" type="map"  title="Occupancy"  total={1200} value={420} />
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
        <td>This is for back image type define</td>
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

> 
> 
> Developed by Karunaaharan Bavaram



## Copyright

Copyright (c) 2022 Karunaaharan Bavaram, contributors. Released under the MIT, GPL licenses

<p align="right">(<a href="#top">back to top</a>)</p>

