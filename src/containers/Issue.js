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

export default connect(mapStateToProps, mapDispatchToProps)(IssueTemp)
