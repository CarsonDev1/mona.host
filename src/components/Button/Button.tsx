interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

// const Button: React.FC<Props> = ({ 
//   children,
//   onClick, 
// }) => { 
//   return (
//     <button className={className} onClick={onClick}>
//       <span className="txt">
//         {children}
//       </span>
//     </button>
//   );
// }

// export default Button;

const Button = ({
  className = '',
  children,
  onClick,
}: Props) => {
  return ( 
    <button className={className} onClick={onClick}>
      <span className="txt">{children}</span>
    </button>
  );
}
 
export default Button;