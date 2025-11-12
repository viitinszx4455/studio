/**
 * ScaleLogo Component
 * 
 * Componente do triângulo icônico da Creative Scale
 * Implementa logo com efeitos luminosos e animações
 * 
 * Features:
 * - Triângulo duplo com geometria perfeita
 * - Ponto luminoso animado no vértice superior
 * - 5 esferas flutuantes com movimento sutil
 * - Animação de entrada suave
 * - Totalmente responsivo
 * 
 * Animações:
 * - logoFadeIn: Entrada inicial (1.2s)
 * - pulse: Ponto luminoso (2.5s loop)
 * - float: Esferas individuais (3-4.5s loops)
 * 
 * Breakpoints:
 * - Desktop: 160px (>1200px)
 * - Tablet: 120px (768-1199px)
 * - Mobile: 90px (<768px)
 * 
 * Performance:
 * - GPU accelerated
 * - Will-change optimization
 * - Reduced motion support
 * 
 * @version 1.0
 * @author Creative Scale Team
 */
export default function ScaleLogo() {
  return (
    <div className="scale-logo-container">
      <svg
        className="scale-logo-svg"
        width="160"
        height="140"
        viewBox="0 0 160 140"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feFlood floodColor="#FFFFFF" floodOpacity="0.8" />
            <feComposite in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="light-gradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#CCCCCC" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Triangles */}
        <polygon
          points="80,20 150,120 10,120"
          fill="none"
          stroke="url(#edge-gradient)"
          strokeWidth="3"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <polygon
          points="80,32 138,108 22,108"
          fill="none"
          stroke="#E8E8E8"
          strokeWidth="2"
          opacity="0.95"
        />

        {/* Light Point & Halos */}
        <g className="light-point">
          <circle cx="80" cy="20" r="15" fill="url(#light-gradient)" opacity="0.6" />
          <circle cx="80" cy="20" r="25" fill="url(#light-gradient)" opacity="0.3" />
          <circle cx="80" cy="20" r="35" fill="url(#light-gradient)" opacity="0.15" />
          <circle cx="80" cy="20" r="6" fill="#FFFFFF" filter="url(#glow-effect)" />
        </g>

        {/* Spheres */}
        <circle className="sphere sphere-1" cx="60" cy="35" r="4" fill="#FFFFFF" opacity="0.85" />
        <circle className="sphere sphere-2" cx="52" cy="60" r="3" fill="#E8E8E8" opacity="0.70" />
        <circle className="sphere sphere-3" cx="58" cy="50" r="2.5" fill="#D3D3D3" opacity="0.75" />
        <circle className="sphere sphere-4" cx="48" cy="95" r="2" fill="#F5F5F5" opacity="0.60" />
        <circle className="sphere sphere-5" cx="55" cy="80" r="1.5" fill="#FAFAFA" opacity="0.50" />
      </svg>
    </div>
  );
}
