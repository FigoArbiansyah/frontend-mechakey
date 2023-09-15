import React from 'react';

interface GradientBadgeProps {
    from: string;
    to: string;
    textColor: string;
    content: string;
}

const GradientBadge: React.FC<GradientBadgeProps> = ({ from, to, textColor, content }) => {
  return (
    <div className={`rounded-full py-1 px-3 bg-gradient-to-r from-${from ?? 'rose-500'} to-${to ?? 'rose-500'} text-${textColor ?? 'white'}`}>
        <span className="text-sm">{content}</span>
    </div>
  );
};

export default GradientBadge;