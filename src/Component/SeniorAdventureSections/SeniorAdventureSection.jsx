import React from 'react';
import { Row, Col } from 'reactstrap';

import SeniorAdventureTile from './SeniorAdventureTile'; // Assuming you have a separate SeniorAdventureTile component

import seniorAdventureImg1 from '../../assets/images/voice-command.png';
import seniorAdventureImg2 from '../../assets/images/support.png';
import seniorAdventureImg3 from '../../assets/images/patient.png';
import seniorAdventureImg4 from '../../assets/images/accessibility.png';
import seniorAdventureImg5 from '../../assets/images/application.png';

const seniorAdventureData = [
  {
    imgUrl: seniorAdventureImg1,
    title: 'Accessible Accommodations',
    desc: 'Explore our range of accommodations specially designed for seniors, ensuring comfort and accessibility throughout your journey.',
  },
  {
    imgUrl: seniorAdventureImg2,
    title: 'Curated Itineraries',
    desc: 'Discover curated itineraries crafted with seniors in mind, offering a perfect blend of relaxation and exploration.',
  },
  {
    imgUrl: seniorAdventureImg3,
    title: 'Accessible Accommodations',
    desc: 'Explore our range of accommodations specially designed for seniors, ensuring comfort and accessibility throughout your journey.',
  },
  {
    imgUrl: seniorAdventureImg4,
    title: 'Curated Itineraries',
    desc: 'Discover curated itineraries crafted with seniors in mind, offering a perfect blend of relaxation and exploration.',
  },
  {
    imgUrl: seniorAdventureImg5,
    title: 'Curated Itineraries',
    desc: 'Discover curated itineraries crafted with seniors in mind, offering a perfect blend of relaxation and exploration.',
  },
];

const SeniorAdventureSection = () => {
  return (
    <Row>
      {seniorAdventureData.map((item, index) => (
        <Col lg="2.4" md="2.5" sm="12" className="mb-4" key={index}>
          <SeniorAdventureTile item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default SeniorAdventureSection;
