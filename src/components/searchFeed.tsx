import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  useEffect(() => {
    if (searchTerm) {
      fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`).then((data) =>
        setVideos(data.items)
      );
    }
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos || []} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
