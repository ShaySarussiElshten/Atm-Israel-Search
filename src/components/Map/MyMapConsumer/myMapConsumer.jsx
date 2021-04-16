import {useMemo} from 'react';
import useMapConsumer from '../../../hooks/useMapConsumer'

const MyMapConsumer = ({zoom,viewPoint}) =>{
    const [setMapConsumer] = useMapConsumer()
    const myMapConsumer = useMemo(() => setMapConsumer(zoom,viewPoint), [zoom,viewPoint])
    return myMapConsumer
}


export default MyMapConsumer