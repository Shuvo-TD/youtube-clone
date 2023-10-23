'use client';
import { VideoDetail } from '@/components';
import { Box } from '@mui/material';

export default function Video() {
  return (
    <main className="overflow-hidden">
      <Box sx={{ backgroundColor: '#000' }}>
        <VideoDetail />
      </Box>
    </main>
  );
}
