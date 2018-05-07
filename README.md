# Project Title

Simple build to compile scss and js code into a single dist folder. Used for asset workflows without development pipelines.

### Prerequisites

- node (currently run on 8.0.0)

### Installing

```
npm install
```

It is suggested to keep all the files under a folder structure in modules/vendors inside stylesheets. Require Javascript folders as needed in whichever structure is best for your use.

### Run

To run and watch the files

```
npm run dev
```

## Deployment

To not watch the files, and run a simple distribution of the files

```
npm run dist
```

## Built With

* [Webpack](https://github.com/webpack) - Packer of many modules
* [Bourbon](https://github.com/thoughtbot/bourbon) - SCSS Mixins
* [Neat](https://github.com/thoughtbot/neat) - SCSS Grid Mixins
* [Autoprefixer](https://github.com/postcss/autoprefixer) - Cross Browser Support
* [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - Used for CSS File Extraction

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
