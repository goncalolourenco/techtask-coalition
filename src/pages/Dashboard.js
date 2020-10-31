import React from 'react';
import Box from '@material-ui/core/Box';
import EmailDataLeak from '../components/features/EmailDataleak';
import DomainDataLeak from '../components/features/DomainDataleak';

const DashboardPage = () => {
  return (
    <>
      <Box my={6}>
        <EmailDataLeak />
      </Box>
      <Box my={6}>
        <DomainDataLeak />
      </Box>
    </>
  );
};

export default DashboardPage;
