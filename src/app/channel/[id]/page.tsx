'use client';
import { ChannelDetail } from '@/components';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Box sx={{ backgroundColor: '#000' }}>
        <ChannelDetail />
      </Box>
    </main>
  );
}
