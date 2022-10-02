import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

function ScrollToTopButton() {

  const [backToTopButton, setBackToTopButton] = useState(false)

  //on mount adding event listener to scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      }
      else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    // ScrollToTop Button start
    <React.Fragment>
      {backToTopButton && (
        <button className={styles.scrollUp} onClick={scrollUp}>
          ^
        </button>
      )}
    </React.Fragment>
    // ScrollToTop Button start
  )
}

export default React.memo(ScrollToTopButton);