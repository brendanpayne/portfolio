import { lazy } from 'react';
import WavesCanvas from './Waves';

const BallCanvas = lazy(() => import('./Ball'));
const Card3DCanvas = lazy(() => import('./Card3d'));
const WaveBallCanvas = lazy(() => import('./WaveBall'));

export { BallCanvas, WavesCanvas, WaveBallCanvas, Card3DCanvas };
