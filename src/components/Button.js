
import classNames from "classnames"

export default function Button({children,variant='default'}){
  
    return(
        <>
       <button className={classNames({
        "p-4 h-10 flex items-center  rounded":true,
        "bg-green-200":variant=='success',
        "bg-red-500":variant=='danger',
        "bg-yellow-200":variant=='warning',
        "bg-gray-200":variant=='default',
       })}>{children}</button> 
        </>
    )
}