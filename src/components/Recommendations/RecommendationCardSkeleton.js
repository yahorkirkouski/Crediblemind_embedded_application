import { Card, CardContent, Skeleton, Typography } from '@mui/material';

export const RecommendationCardSkeleton = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <Skeleton variant="rectangular" height={140} />
        <CardContent>
        <Typography variant="h6" component="div">
          <Skeleton width="80%" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton width="60%" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton width="60%" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton width="100%" />
        </Typography>
      </CardContent>
    </Card>
  );
};
