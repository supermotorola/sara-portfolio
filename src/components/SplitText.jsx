export default function SplitText({ text, className = '', delay = 45, startDelay = 300 }) {
  return (
    <span className={`split-parent ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
          aria-hidden="true"
        >
          <span
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              animation: `splitFadeUp 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
              animationDelay: `${startDelay + i * delay}ms`,
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}
