// import { useEffect, useState } from 'react';

// // material-ui
// import { Grid } from '@mui/material';

// // project imports
// import EarningCard from './DistanceCard';
// import Map from './Map';
// // import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './VibrationCard';
// import TotalIncomeDarkCard from './AlcoholLevelCard';
// import TotalIncomeLightCard from './AccidentCard';
// // import TotalGrowthBarChart from './TotalGrowthBarChart';
// import { gridSpacing } from 'store/constant';
// // ==============================|| DEFAULT DASHBOARD ||============================== //
// import axios from 'axios';

// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://tranquil-headland-17477.herokuapp.com/datalogger/?format=json');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// const Dashboard = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [gpsData, setgpsData] = useState({ distance: '', longitude: '', latitude: '', vibration: '', isAccident: false, alcohol: '' });

//   useEffect(() => {
//     setLoading(false);

//     const fetchDataAsync = async () => {
//       const result = await fetchData();
//       setgpsData({
//         ...gpsData,
//         distance: result[0]?.distance,
//         longitude: result[0]?.longitude,
//         latitude: result[0]?.latitude,
//         vibration: result[0]?.vibration,
//         isAccident: result[0]?.isAccident,
//         alcohol: result[0]?.alcohol
//       });
//     };
//     fetchDataAsync();
//   }, [gpsData]);

//   return (
//     <Grid container spacing={gridSpacing}>
//       <Grid item xs={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid item lg={4} md={6} sm={6} xs={12}>
//             <EarningCard isLoading={isLoading} distance={gpsData?.distance} />
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12}>
//             <TotalOrderLineChartCard isLoading={isLoading} vibration={gpsData?.vibration} />
//           </Grid>
//           <Grid item lg={4} md={12} sm={12} xs={12}>
//             <Grid container spacing={gridSpacing}>
//               <Grid item sm={6} xs={12} md={6} lg={12}>
//                 <TotalIncomeDarkCard isLoading={isLoading} alcoholLevel={gpsData?.alcohol} />
//               </Grid>
//               <Grid item sm={6} xs={12} md={6} lg={12}>
//                 <TotalIncomeLightCard isLoading={isLoading} isAccident={gpsData?.isAccident} />
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Map latitude={gpsData?.latitude} longitude={gpsData?.longitude} />
//       {/* <Grid item xs={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid item xs={12} md={8}>
//             <TotalGrowthBarChart isLoading={isLoading} />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <PopularCard isLoading={isLoading} />
//           </Grid>
//         </Grid>
//       </Grid> */}
//     </Grid>
//   );
// };

// export default Dashboard;
