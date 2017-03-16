import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    const alternate = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/book-icon.png';

    return (
      <div className="c-gallery">
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <a
                key={index} className='c-book'
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                  alt="book image"
                  className="c-book__img"
                />
                <div className="c-book__body">
                  <h3 className="c-book__title">{title}</h3>
                </div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
