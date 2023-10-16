'use client';
import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, Sidebar } from './';

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New');
  const [videos, setVideos] = useState<VideoItem[] | null>(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          position: { sx: 'static', md: 'sticky', lg: 'sticky' },
          px: { sx: 0, md: 2 },
          top: 0,
          // overflowY: 'auto',
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © 2023 Shuvo Talukdar
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos || []} />
      </Box>
    </Stack>
  );
};

export default Feed;
