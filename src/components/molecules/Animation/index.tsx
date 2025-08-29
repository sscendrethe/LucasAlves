import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import columnsData from '../../../data/columnsData.json'
import styles from './styles.module.scss'

export const Animation = () => {
  return (
    <div className={styles.animation}>
      {columnsData.map((column, columnIndex) => (
        <div
          key={uuidv4()}
          className={[
            styles.animation__columns,
            styles[`animation__column${columnIndex + 1}`],
          ].join(' ')}
        >
          {column.map((image) => (
            <div key={uuidv4()} className={styles.animation__imageWrapper} 
            style={{ backgroundColor: image.backgroundColor }}>
              <Image
                src={image.src}
                alt={image.alt}
                className={styles.animation__image}
                width={178}
                height={178}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
