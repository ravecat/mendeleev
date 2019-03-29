export const API_PORT = process.env.API_PORT || 3001;
export const API_URL = process.env.API_URL || 'localhost';
export const API_PATH = process.env.API_PATH;
<<<<<<< HEAD
export const [MICRO, STANDART] = process.env.RESPONSIVE.split(',').map(Number);
=======
export const RESPONSIVE = process.env.RESPONSIVE.split(',').map(Number);
>>>>>>> Separate table views to different resolutions
