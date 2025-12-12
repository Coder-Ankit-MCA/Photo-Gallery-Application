import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/1.jpg", alt: "Aishwariya Rai" },
    { src: "/2.jpg", alt: "Hande Ercel" },
    { src: "/3.jpg", alt: "Aishwariya Rai" },
    { src: "/4.jpg", alt: "Kakashi Hatake", },
    { src: "/5.jpg", alt: "Todi Stark", },
    { src: "/6.jpg", alt: "Tom Cruise", },
    { src: "/7.jpg", alt: "Tom Cruise", },
    { src: "/8.jpg", alt: "8", },
    { src: "/9.jpg", alt: "9", },
    { src: "/10.jpg", alt: "10", },
    { src: "/11.jpg", alt: "11", },
    { src: "/12.jpg", alt: "12", },
    { src: "/13.jpg", alt: "13", },
    { src: "/14.jpg", alt: "14", },
    { src: "/15.jpg", alt: "15", },
    { src: "/16.jpg", alt: "16", },
    { src: "/17.jpg", alt: "17", },
    { src: "/18.jpg", alt: "18", },
    { src: "/19.jpg", alt: "Flag of India", },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}
