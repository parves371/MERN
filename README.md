# MERN Stack Learning Journey

Welcome to my MERN (MongoDB, Express.js, React.js, Node.js) stack learning journey repository! This repository serves as a central hub for all the projects, code snippets, resources, and progress tracking related to my journey of mastering the MERN stack.

## About the MERN Stack

The MERN stack is a powerful combination of technologies for building modern web applications:

- **MongoDB**: A NoSQL database that provides scalability and flexibility, perfect for storing JSON-like documents.
- **Express.js**: A web application framework for Node.js, providing a robust set of features for building web and mobile applications.
- **React.js**: A JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side JavaScript execution.

## Repository Structure

- **Projects**: This directory contains subdirectories for individual MERN projects I'm working on. Each project will have its own folder containing the code, and any associated files.
- **Code Snippets**: Collection of useful code snippets, examples, and best practices related to MERN development.

## How to Use This Repository

Feel free to explore the projects, tutorials, and code snippets available in this repository. If you're also learning the MERN stack, you might find some valuable resources and inspiration for your own projects.

## Contributing

If you have any suggestions, improvements, or additional resources that could benefit this repository and fellow learners, please feel free to open an issue or pull request. Your contributions are highly appreciated!

## Resources

Here are some additional resources to help you dive deeper into the MERN stack:

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)

Let's embark on this exciting journey of mastering the MERN stack together!

Happy coding! 🚀
<br/>
<br/>
<br/>
<br/>

# Node.js fs Module Examples

This README provides examples of common file system operations using Node.js `fs` module.

## Table of Contents

- [Reading Files](#reading-files)
- [Writing Files](#writing-files)
- [Appending to Files](#appending-to-files)
- [Renaming Files](#renaming-files)
- [Deleting Files](#deleting-files)

## 1. Reading Files

You can read the contents of a file using the `fs.readFile()` method.

```javascript
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

## 2. Writing Files:

To write data to a file, you can use the `fs.writeFile()` method.

```javascript
const fs = require("fs");

const data = "Hello, world!";

fs.writeFile("example.txt", data, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data written to file");
});
```

## 3. Appending to Files:

If you want to append data to an existing file, you can use the `fs.appendFile()` method.

```javascript
const fs = require("fs");

const newData = "\nNew data to append";

fs.appendFile("example.txt", newData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data appended to file");
});
```

## 4. Renaming Files:

You can rename a file using the `fs.rename()` method.

```javascript
const fs = require("fs");

fs.rename("oldFile.txt", "newFile.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File renamed successfully");
});
```

## 5. Deleting Files:

To delete a file, you can use the `fs.unlink()` method.

```javascript
const fs = require("fs");

fs.unlink("example.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully");
});
```

These are just some basic examples of what you can do with the `fs` module in Node.js. There are many more methods available for handling files and directories.
