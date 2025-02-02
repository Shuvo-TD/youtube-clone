import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, Loader, VideoCard } from './index';

interface VideosProps {
  videos: any;
  direction?: 'row' | 'column';
}

const Videos: React.FC<VideosProps> = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item: any, idx: any) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
