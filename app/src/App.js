import logo from './logo.svg';
import './App.css';
import { Box, Button, styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const BannerTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--content-primary)',
  fontSize: 'var(--fontsize-1)',
  fontWeight: 'var(--fontweight-1)',
  fontFamily: 'Poppins'
}))

function App() {
  return (
    <Stack p={10} spacing={4}>
      <BannerTitle>Hello, I am Primary Title!</BannerTitle>
      <Button sx={{
        color: 'var(--brks-core-color-grey-50)',
        backgroundColor: 'var(--brks-core-color-grey-900)',
        borderRadius: 'var(--border-md)',
        width: 'fit-content',
      }}>Button</Button>
    </Stack>
  );
}

export default App;
