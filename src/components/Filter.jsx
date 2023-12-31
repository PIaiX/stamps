import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SelectImitation from './utils/SelectImitation';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { IoChevronDownOutline } from "react-icons/io5";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const Filter = (props) => {
  const [value, setValue] = useState([150, 1500]);
  console.log('value: '+value);
  return (
    <form action="" className='filter'>
       <div className="mb-4 d-flex d-lg-none justify-content-between align-items-center">
          <button type='button' className='d-flex align-items-center' onClick={props.onClose}>
            <TfiArrowCircleLeft className='fs-13 me-2'/>
            <h4>Фильтры</h4>
          </button>
          <button type='reset' className='main-color'>очистить</button>
        </div>
      <fieldset>
        <legend>Цена, ₽</legend>
        <div className='range'>
          <div className="range-inputs">
            <div className="input-labeled">
              <span>От</span>
              <input 
                type="number" 
                value={value[0]} 
                onChange={(e)=>setValue([e.target.value, value[1]])}
              />
            </div>
            <hr/>
            <div className="input-labeled">
              <span>До</span>
              <input 
                type="number" 
                value={value[1]} 
                onChange={(e)=>setValue([value[0], e.target.value])}
              />
            </div>
          </div>
        </div>
        <RangeSlider min={0} max={2500} value={value} onInput={setValue}/>
      </fieldset>
      <fieldset>
        <legend>Параметр</legend>
        <SelectImitation 
          placeholder={'Выберите параметр'}
          optionsArr={[
            {
              value: 1,
              label: 'Параметр 1',
              defaultChecked: false,
            },
            {
              value: 2,
              label: 'Параметр 2',
              defaultChecked: false,
            },
            {
              value: 3,
              label: 'Параметр 3',
              defaultChecked: false,
            },
          ]}
        />
      </fieldset>
      <fieldset>
        <legend>Параметр 2</legend>
        <SelectImitation 
          placeholder={'Выберите параметр 2'}
          optionsArr={[
            {
              value: 1,
              label: 'Параметр 1',
              defaultChecked: false,
            },
            {
              value: 2,
              label: 'Параметр 2',
              defaultChecked: false,
            },
            {
              value: 3,
              label: 'Параметр 3',
              defaultChecked: false,
            },
          ]}
        />
      </fieldset>

      <Accordion defaultActiveKey="0">
        <Accordion.Item as="fieldset" eventKey="0">
          <Accordion.Header as="legend">
            <span>Характеристика</span>
            <IoChevronDownOutline/>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item as="fieldset" eventKey="1">
          <Accordion.Header as="legend">Параметр 3</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item as="fieldset" eventKey="2">
          <Accordion.Header as="legend">Параметр 4</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item as="fieldset" eventKey="3">
          <Accordion.Header as="legend">Параметр 5</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span>Значение 1</span>
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="bottom">
        <button type='button' className='btn-2 w-100'>применить</button>
      </div>
    </form>
  );
};

export default Filter;