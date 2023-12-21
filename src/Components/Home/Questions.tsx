import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.

At its core, mindfulness is the practice of bringing focused attention to the present moment with an attitude of openness, curiosity, and non-judgment. It involves cultivating awareness of our thoughts, emotions, and the surrounding environment without getting caught up in them.

Through mindfulness, we develop the ability to observe our thoughts, feelings, and sensations as they arise and pass away. This heightened awareness allows us to respond to life's challenges with clarity and compassion, rather than reacting impulsively.

Mindfulness nurtures deeper connections with ourselves and others, fostering empathy and compassion. It can also reduce stress, anxiety, and depression, enhance focus and concentration, improve emotional regulation, and promote a greater sense of overall contentment.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'SPINE SURGERY',
    children: <p>Spinal Suite
    Our spinal operating room is equipped with a state-of-the-art spinal suite giving surgeons optimal conditions for performing delicate procedures. The Spinal Suite relies on advanced intraoperative monitoring systems which can improve surgical accuracy, reduce surgical risk, and optimize patient safety during the procedure</p>,
  },
  {
    key: '2',
    label: 'NEUROSURGERY',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'NEUROLOGY AND NEUROPHYSIOLOGY',
    children: <p>{text}</p>,
  },
  
  {
    key: '4',
    label: 'ORTHOPEDIC SURGERY',
    children: <p>{text}</p>,
  },
  
  {
    key: '5',
    label: 'SPORTS MEDICINE',
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: 'CYBERKNIFE AND RADIOSURGERY',
    children: <p>{text}</p>,
  },
  {
    key: '7',
    label: 'ONCOLOGY AND TOMOTHERAPY',
    children: <p>{text}</p>,
  },
  
  {
    key: '8',
    label: 'OTOLARYNGOLOGY',
    children: <p>{text}</p>,
  },
  
  {
    key: '9',
    label: 'HEAD AND NECK SURGERY',
    children: <p>{text}</p>,
  },
  {
    key: '10',
    label: 'PEDIATRIC NEUROLOGY AND NEUROSURGERY',
    children: <p>{text}</p>,
  },
  
  {
    key: '11',
    label: 'PHYSIOTHERAPY AND REHABILITATION',
    children: <p>{text}</p>,
  },
  
  {
    key: '12',
    label: 'CENTER FOR EARLY DIAGNOSIS OF BREAST HEALTH',
    children: <p>{text}</p>,
  },
];

const Questions: React.FC = () => {
    return(
        <div className='Questions' id='questions'>
            <h1>Our Services</h1>
            <Collapse  accordion items={items} />
        </div>
    )
}

export default Questions;