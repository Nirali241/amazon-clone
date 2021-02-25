import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB660400564_.jpg"/>
            
            <div className="home__row">
                <Product 
                    id="001"
                    title="Think and Grow Rich (DELUXE HARDBOUND EDITION) An exquisitely designed leather-bound edition of one of the best inspirational book" 
                    price={399} 
                    image="https://m.media-amazon.com/images/I/91lZu3F+cPL._AC_UY218_.jpg"
                    rating={5}
                />
                <Product 
                    id="002"
                    title="Pebble Pace Smart Watch with Full Touch Dynamic Colour Display, Multiple Sports Mode, Built-in oximeter, HR, Sleep and BP Monitoring"
                    price={2999}
                    image="https://m.media-amazon.com/images/I/618G0V+9m7L._AC_UY218_.jpg"
                    rating={4}
                /> 
                          
            </div>
            <div className="home__row">
                <Product 
                    id="003"
                    title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
                    price={3499}
                    image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg"
                    rating={4}
                />
                <Product 
                    id="004"
                    title="Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black"
                    price={2999}
                    image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SY450_.jpg"
                    rating={3}
                />
                <Product 
                    id="005"
                    title="Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor"
                    price={21999}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41VPreWzHjL._SX300_SY300_QL70_FMwebp_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="006"
                    title="Angelie 6171 Makeup kit+7 Piece Brush Set for Women (Pink)"
                    price={269}
                    image="https://images-na.ssl-images-amazon.com/images/I/51d32ROaH5L._SL1184_.jpg"
                    rating={4}
                />
                <Product
                    title="Panasonic 147 cm (58 inches) 4K Ultra HD Certified Android Smart LED TV TH-58HX450DX (Black) (2020 Model)"
                    price={45990}
                    image="https://m.media-amazon.com/images/I/91LzCxOO3fL._AC_UY218_.jpg"
                    rating={4}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
