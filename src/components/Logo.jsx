/* eslint-disable react/prop-types */
function Logo({type, className}){
  switch (type) {
    case ("small"):
      return <img className={className} src="/logo-small.png" alt="Logo Ex My Love" />;

    case ("long"):
      return <img className={className} src="/logo-long.png" alt="Logo Ex My Love" />;
    
    default:
      return <img className={className} src="/logo-long.png" alt="Logo Ex My Love" />;
  }
}

export { Logo }