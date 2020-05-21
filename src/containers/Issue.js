import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IssueTemp from '../components/templates/IssueTemp'
import { actionCreators } from '../actions/index'


const mapStateToProps = ({ issue }) => {
  return {
    data: issue.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showModal: (prams) => dispatch(actionCreators.showModal(prams)),
//     removeModal: () => dispatch(actionCreators.removeModal()),
//     addIssue: () => dispatch(actionCreators.addIssue())
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(IssueTemp)
