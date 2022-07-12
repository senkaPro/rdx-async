import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  changeColor,
  changeColorAsync,
  randomColor,
  selectColor,
} from './colorSlice';

import styles from './Color.module.css';

export function Color() {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const [selectedColor, selectedColorSet] = useState('');
  const [inputColor, inputColorSet] = useState<string>('')

  useEffect(() => {
    if(color){
        selectedColorSet(prev => color)
    }
  }, [color])
  
  const handleColorChange = () => {
    if (!inputColor.startsWith('#') && !inputColor.startsWith('rgb')){
        let color = `#${inputColor}`
        dispatch(changeColor(color))
    } else {
        dispatch(changeColor(inputColor))
    }
  }

  return (
    <div className={styles.container} style={{backgroundColor: selectedColor}}>
      <div className={styles.value}>
        <span>Color hex value:</span>
        <span>{selectedColor}</span>
      </div>
      <div className={styles.inputContainer}>
            <input className={styles.input} placeholder='Enter color value' type='text' name='colorInput' onChange={(evt) => inputColorSet(evt.target.value)}/>
            <button className={styles.inputButton} onClick={handleColorChange}>Change</button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Get a random color"
          onClick={() => dispatch(randomColor())}
        >Get a random color</button>
        <button
          className={styles.asyncButton}
          aria-label="Change color Async"
          onClick={() => dispatch(changeColorAsync())}
        >Change color Async</button>
      </div>
    </div>
  );
}
