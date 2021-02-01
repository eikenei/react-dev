import { READ_EVENTS } from '../action'
import _ from 'lodash'

export default (events = {},action) => {
    switch(action.type){
        case READ_EVENTS:
            //console.log(action)
            //console.log(action.response.data)
            //console.log(_.mapKeys(action.response.data,'id'))
            return _.mapKeys(action.response.data,'id')
            //return state
        default :
            return events
    }
}
