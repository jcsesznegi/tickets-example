import { connect } from 'react-redux'
import { ToJS } from './ToJS'
import DumbComponent from '../components/DumbComponent'

const mapStateToProps = state => {
  return {
    obj: getImmutableObjectFromStateTree(state)
  }
}
export default connect(mapStateToProps)(toJS(DumbComponent))
