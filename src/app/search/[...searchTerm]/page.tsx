'use client';
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from '@/components';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Box sx={{ backgroundColor: '#000' }}>
        <SearchFeed />
      </Box>
    </main>
  );
}
