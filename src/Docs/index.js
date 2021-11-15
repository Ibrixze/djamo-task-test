import basicInfos from './basicInfos'
import components from './components'
import servers from './servers'
import tags from './tags'
import task from './Tasks/index'

export default {
    ...basicInfos,
    ...components,
    ...servers,
    ...tags,
    ...task
}