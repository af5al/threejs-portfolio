import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pointerEvents: 'none',
      }}>
      <div className="canvas-loader-container">
        <div className="canvas-loader-ring"></div>
        <div className="canvas-loader-inner"></div>
        <p className="canvas-loader-label">INITIALIZING 3D ENVIRONMENT</p>
        <div className="canvas-loader-bar">
          <div
            className="canvas-loader-fill"
            style={{ width: `${Math.max(5, Math.min(100, progress))}%` }}
          />
        </div>
        <p className="canvas-loader-percentage">
          {progress > 0 ? `${progress.toFixed(0)}%` : 'CONNECTING...'}
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
