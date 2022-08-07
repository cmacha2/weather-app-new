import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'

const Card = ({onClose,data,index}) => {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={()=>onClose(index)}>X</button>
      <h6 className={styles.titleCity}>{data.location.name}</h6>
      <h6 className={styles.titleCountry}>{data.location.country}</h6>
      <img className={styles.image} src={data.current.condition.icon} alt="weather"/>
      <h6 className={styles.titleTemp}>{data.current.temp_c}°C</h6>
      <h6 className={styles.titleCondition}>{data.current.condition.text}</h6>
    </div>
  )
}

export default Card