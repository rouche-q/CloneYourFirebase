## CloneYourFirebase
A packages of tools for cloning every service of a Firebase DB to another

## Installation

use [npm](https://www.npmjs.com/) to install packages and move the two json of the source Firebase and the destination Firebase in the json directory or fill it 

```bash
git clone git@github.com:rouche-q/CloneYourFirebase.git
cd CloneYourFirebase
cp /path/to/your/source/firebase.json ./json/OldFirebase.json
cp /path/to/your/dest/firebase.json ./json/NewFirebase.json
npm start
```

## Features

<b>List of features</b>
- [ ] clone Auth
- [X] clone Firestore
- [ ] clone Storage
