import { connect } from 'react-redux'
import IssueTemp from '../components/templates/IssueTemp'
import { actionCreators } from '../actions/index'


const mapStateToProps = ({ issue }) => {
  return {
    data: issue.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (prams) => dispatch(actionCreators.showModal(prams)),
    removeModal: () => dispatch(actionCreators.removeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTemp)
