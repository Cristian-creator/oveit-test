import React from 'react'
import { SectionContainer, SectionTitle } from '../common/styled-components/StyledComponents.styles'
import { AboutVendorBanner, AboutVendorContact, AboutVendorData, AboutVendorDescription, AboutVendorImage } from './AboutVendor.styles';
import { Typography } from '@mui/material';
import VendorImage from '../../images/common/about-vendor.png';

const AboutVendor = () => {
  return (
    <SectionContainer>
        <SectionTitle variant="subtitle1"> About vendor </SectionTitle>
        <AboutVendorBanner>
            <AboutVendorImage image={VendorImage} alt="about-vendor" />
            <AboutVendorData>
                <Typography variant='subtitle2'> John Smith </Typography>
                <AboutVendorDescription variant='subtitle2'> Description will be placed here. Proin eget enim in lacus. Quis morbi odio in etiam. Maecenas at ut viverra etiam ipsum diam eget mattis ipsum. </AboutVendorDescription>
            </AboutVendorData>
            <AboutVendorContact variant="outlined"> Contact vendor </AboutVendorContact>
        </AboutVendorBanner>
    </SectionContainer>
  )
}

export default AboutVendor