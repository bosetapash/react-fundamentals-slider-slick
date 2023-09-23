import React, { useEffect, useState } from 'react'
import { longList } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Carousel = () => {
      const [people, setPeople] = useState(longList)
      const [currentIndex, setCurrentIndex] = useState(0)

      const nextSlide = () => {
            setCurrentIndex((oldIndex) => (oldIndex + 1) % people.length)
      }

      const prevSlide = () => {
            setCurrentIndex((oldIndex) => (oldIndex - 1 + people.length) % people.length)
      }
      useEffect(() => {
            const intervalId = setInterval(() => {
                  ;() => nextSlide()
            }, 5000)
            return () => clearInterval(intervalId)
      }, [currentIndex])

      return (
            <section className="slider-container">
                  {people.map((person, index) => {
                        const { id, image, name, title, quote } = person
                        return (
                              <article
                                    className="slide"
                                    key={id}
                                    style={{
                                          tranform: 'translate(${100*index-currentIndex}%)',
                                          opacity: index === currentIndex ? 1 : 0,
                                          visibility: index === currentIndex ? 'visible' : 'hidden'
                                    }}
                              >
                                    <img src={image} alt={name} className="person-img" />
                                    <h5 className="name">{name}</h5>
                                    <p className="title">{title}</p>
                                    <p className="text">{quote}</p>
                                    <FaQuoteRight className="icon" />
                              </article>
                        )
                  })}

                  <button type="button" className="prev" onClick={prevSlide}>
                        <FiChevronLeft />
                  </button>
                  <button type="button" className="next" onClick={nextSlide}>
                        <FiChevronRight />
                  </button>
            </section>
      )
}

export default Carousel
