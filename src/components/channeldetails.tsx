import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

interface ChannelSnippet {
  title: string;
  description: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
}

interface ChannelStatistics {
  subscriberCount: string;
}

interface ChannelDetailType {
  id: {
    channelId: string;
  };
  snippet: ChannelSnippet;
  statistics: ChannelStatistics;
}

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

const ChannelDetail: React.FC = () => {
  const [channelDetail, setChannelDetail] = useState<ChannelDetailType | null>(
    null
  );
  const [videos, setVideos] = useState<VideoItem[] | null>(null);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      const fetchResults = async () => {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );

        setVideos(videosData?.items);
      };

      fetchResults();
    }
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        {channelDetail && (
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        )}
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos || []} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
