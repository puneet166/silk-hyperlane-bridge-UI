import { PropsWithChildren, ReactElement } from 'react';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  customColor?: string; // Accepts custom color (hex, rgb, rgba, etc.)
  customTextColor?: string; // Allows setting custom text color
  bold?: boolean;
  className?: string;
  icon?: ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
}

export function SolidButton(
  props: PropsWithChildren<ButtonProps & React.HTMLProps<HTMLButtonElement>>,
) {
  const {
    type,
    onClick,
    customColor = 'rgb(28 154 217 / 80%)',
    customTextColor = '#ffffff', 
    className,
    bold,
    icon,
    disabled,
    title,
    ...passThruProps
  } = props;

  const base =
    'flex items-center justify-center rounded-lg transition-all duration-500 active:scale-95';
  const weight = bold ? 'font-semibold' : '';
  const onDisabled = 'disabled:opacity-50 cursor-not-allowed';

  const buttonStyle = {
    backgroundColor: customColor,
    color: customTextColor,
  };

  return (
    <button
      onClick={onClick}
      type={type ?? 'button'}
      disabled={disabled ?? false}
      title={title}
      className={`${base} ${onDisabled} ${weight} ${className}`}
      style={buttonStyle} 
      {...passThruProps}
    >
      {icon ? (
        <div className="flex items-center justify-center space-x-1">
          {icon}
          {props.children}
        </div>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
}
