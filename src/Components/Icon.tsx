import React, {ReactSVGElement} from 'react';
import classnames from 'classnames'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
  name?: string
}&React.SVGAttributes<SVGElement>

const Icon: React.FunctionComponent<Props> = (props) => {
  const {name,children,className}=props
  return (
    <svg className ={classnames('icons',className)}>
      {name && <use xlinkHref={'#' + name}/>}
    </svg>
  );
}

export {Icon}
