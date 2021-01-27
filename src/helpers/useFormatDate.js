import { useMemo } from 'react'
import moment from 'moment'

export const useFormatDate = ({ date, format = 'M/D/YY' }) => {

    const formattedDate = useMemo(() => {
        if (date && format) {
            return moment(date).format(format);
        }

        return 'no date provided';
    }, [date, format]);

    return formattedDate 
}