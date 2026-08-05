'use client';

import { useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import { RefreshCw } from 'lucide-react';

export interface CaptchaRef {
  validate: (input: string) => boolean;
  refresh: () => void;
}

interface CaptchaProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onErrorClear?: () => void;
  isOpen?: boolean;
}

export const Captcha = forwardRef<CaptchaRef, CaptchaProps>(({
  value,
  onChange,
  error,
  onErrorClear,
  isOpen = true,
}, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaCode, setCaptchaCode] = useState('');

  const drawCaptcha = useCallback((code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient fill
    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, '#f1f5f9');
    bgGradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw background noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 120)}, ${Math.floor(Math.random() * 120)}, ${Math.floor(Math.random() * 120)}, 0.4)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw background noise dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.25})`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Render characters with distortion (rotation, sizing)
    const chars = code.split('');
    ctx.font = 'bold 22px monospace';
    ctx.textBaseline = 'middle';

    chars.forEach((char, index) => {
      ctx.save();
      const x = 16 + index * 22;
      const y = canvas.height / 2 + (Math.random() * 4 - 2);
      const angle = (Math.random() - 0.5) * 0.35;
      ctx.translate(x, y);
      ctx.rotate(angle);

      const colors = ['#0f172a', '#1e293b', '#334155', '#1e1b4b', '#064e3b'];
      ctx.fillStyle = colors[index % colors.length];
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  }, []);

  const generateCaptcha = useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    onChange('');
  }, [onChange]);

  useImperativeHandle(ref, () => ({
    validate: (input: string) => {
      return input.trim().toUpperCase() === captchaCode.toUpperCase();
    },
    refresh: () => {
      generateCaptcha();
    },
  }));

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen, generateCaptcha]);

  useEffect(() => {
    if (isOpen && captchaCode) {
      const timer = setTimeout(() => drawCaptcha(captchaCode), 30);
      return () => clearTimeout(timer);
    }
  }, [isOpen, captchaCode, drawCaptcha]);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
      <label htmlFor="captcha" className="block text-xs font-semibold text-gray-700 mb-1.5">
        Verification Code *
      </label>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="border border-gray-300 rounded overflow-hidden select-none bg-slate-100 flex items-center justify-center shadow-inner h-[38px]">
            <canvas
              ref={canvasRef}
              width={130}
              height={38}
              className="block cursor-pointer"
              onClick={() => {
                generateCaptcha();
                if (onErrorClear) onErrorClear();
              }}
              title="Click image to generate new code"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              generateCaptcha();
              if (onErrorClear) onErrorClear();
            }}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center h-[38px] w-[38px]"
            title="Refresh Captcha Code"
            aria-label="Refresh Captcha Code"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <input
            type="text"
            id="captcha"
            name="captcha"
            required
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              if (onErrorClear) onErrorClear();
            }}
            className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-gray-900 outline-none transition-all uppercase tracking-widest font-mono h-[38px] ${
              error ? 'border-red-400 bg-red-50/50' : 'border-gray-300 bg-white'
            }`}
            placeholder="Enter code"
            maxLength={5}
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-xs mt-1.5 font-medium">{error}</p>}
    </div>
  );
});

Captcha.displayName = 'Captcha';
