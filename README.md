PHOTO GALLERY APPLICATION – REACT + VITE + LIGHTGALLERY

This project is a fast and modern Photo Gallery web application built using React and Vite. It uses the LightGallery plugin to display images in a beautiful lightbox with zoom, thumbnails, fullscreen, and smooth transitions.

FEATURES

Fast development and build using Vite

Responsive photo grid layout

LightGallery integration for lightbox effect

Zoom, thumbnails, fullscreen, slide transitions

Mobile-friendly UI

Clean and modular React components

Easily customizable and scalable

TECHNOLOGIES USED

React

Vite

LightGallery

JavaScript / JSX

CSS (or Tailwind if used)

INSTALLATION AND SETUP

Clone the project:
git clone your-repo-link
cd project-folder-name

Install project dependencies:
npm install

Run the development server:
npm run dev

INSTALLING LIGHTGALLERY

Install LightGallery and its plugins:
npm install lightgallery lightgallery/react
npm install lg-thumbnail lg-zoom

USING LIGHTGALLERY IN REACT COMPONENT

Inside your Gallery component, import the modules:

import LightGallery from "lightgallery/react"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

Use the LightGallery wrapper:

<LightGallery plugins={[lgThumbnail, lgZoom]}>
<a href="/images/photo1.jpg">
<img src="/images/photo1_thumb.jpg" />
</a>
</LightGallery>

PROJECT STRUCTURE

photo-gallery-react
└── public
└── src
└── components
└── Gallery.jsx
└── assets
└── App.jsx
└── main.jsx
└── package.json
└── vite.config.js
└── README.txt

HOW THE GALLERY WORKS

Images are stored inside public/images or src/assets

Gallery.jsx loads all images into a grid layout

When the user clicks on an image, LightGallery opens the image in a popup

User can zoom, swipe, switch images, enable fullscreen etc.

BUILDING FOR PRODUCTION
To generate the production build:
npm run build

To preview the production build:
npm run preview

CONTRIBUTING
Contributions are welcome. You can request new features such as categories, filters, or image upload support.

LICENSE
This project is released under the MIT License.