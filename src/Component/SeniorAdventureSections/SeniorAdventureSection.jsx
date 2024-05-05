import React from 'react';
import { Row, Col } from 'reactstrap';

import SeniorAdventureTile from './SeniorAdventureTile'; // Assuming you have a separate SeniorAdventureTile component

import feature1 from '../../assets/images/virtual.jpg';
import feature2 from '../../assets/images/all_girls_tour.jpg';
import feature3 from '../../assets/images/mot_sick.jpg';
import feature4 from '../../assets/images/Eco_friendly.jpg';
import feature5 from '../../assets/images/preg.jpg';
import feature6 from '../../assets/images/senior.jpg';

const seniorAdventureData = [
  {
    imgUrl: feature1,
    title: 'Accessible Virtual Reality Tour',
    desc: 'Explore the world from anywhere with our VR tours, designed for everyone, including those with mobility challenges. Immerse yourself in stunning destinations through 360-degree videos and detailed audio descriptions, accessible on various VR headsets.',
  },
  {
    imgUrl: feature2,
    title: 'Ensuring Safety on All-Girls Trip',
    desc: 'Travel confidently with our tailored safety tips for all-girls trips. From solo travel advice to harassment prevention strategies, we have got you covered. Join our community forum to connect with fellow female travelers and share experiences.',
  },
  {
    imgUrl: feature3,
    title: 'Motion Sickness Relief Options',
    desc: 'Combat motion sickness with our tips and remedies for a smoother journey. From medication suggestions to natural remedies like ginger, we offer solutions to make your travels more comfortable.',
  },
  {
    imgUrl: feature4,
    title: 'Eco Conscious Travel',
    desc: 'Calculate your carbon footprint and discover green travel options to minimize environmental impact. From eco-friendly accommodations to sustainable transportation, we help you make eco-conscious choices.',
  },
  {
    imgUrl: feature5,
    title: 'Pregnancy friendly Recommendations',
    desc: 'Find comfort and safety with our curated list of pregnancy-friendly accommodations. Enjoy amenities like prenatal yoga classes and access to medical services. Travel safely during pregnancy with our tips and destination recommendations.',
  },
  {
    imgUrl: feature6,
    title: 'Specialised Facilities for Senior Citizens',
    desc: 'We prioritize accessibility in our accommodations with features like ground-floor rooms and handrails. Our staff offer personalized assistance and can help arrange medical support if needed. We provide amenities like adjustable beds and offer leisure activities tailored to seniors need',
  },
];

const SeniorAdventureSection = () => {
  return (
    <Row>
      {seniorAdventureData.map((item, index) => (
        <Col lg="4" md="4" sm="12" className="mb-4" key={index}>
          <SeniorAdventureTile item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default SeniorAdventureSection;
