import React from 'react'

import PropTypes from 'prop-types'

import './item-card.css'

const ItemCard = (props) => {
  return (
    <div className={`item-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="item-card-image"
      />
      <div className="item-card-container1">
        <h3 className="item-card-text">{props.name}</h3>
        <div className="item-card-container2">
          <svg viewBox="0 0 1024 1024" className="item-card-icon10">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon12">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon14">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon16">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon18">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <div className="item-card-container3">
          <span className="item-card-currency">{props.currency}</span>
          <span className="item-card-value">{props.value}</span>
        </div>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  name: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  currency: '$',
  value: '429',
  rootClassName: '',
}

ItemCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemCard
